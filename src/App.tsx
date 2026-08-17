import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { VehiclesSection } from './components/VehiclesSection';
import { GuidesSection } from './components/GuidesSection';
import { StatsBanner } from './components/StatsBanner';
import { ProcessTimelineSection } from './components/ProcessTimelineSection';
import { TestimonialsAndCasesSection } from './components/TestimonialsAndCasesSection';
import { PresentationSection } from './components/PresentationSection';
import { FaqSection } from './components/FaqSection';
import { PartnersSection } from './components/PartnersSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

import { TrackingModal } from './components/TrackingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { LegalModal, LegalTabType } from './components/LegalModal';

import { ServiceItem, Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('hero');

  // Modals state
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTabType>('legal');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteDetails, setQuoteDetails] = useState('');

  const handleOpenQuoteWithDetails = (details: string) => {
    setQuoteDetails(details);
    setQuoteOpen(true);
  };

  const handleOpenLegal = (tab: LegalTabType) => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] antialiased">
      {/* Top Sticky Intelligent Header (4 links + 1 CTA button) */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenContact={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onOpenServices={() => scrollToSection('services')}
          onOpenTracking={() => setTrackingOpen(true)}
        />

        {/* 2. Services Section (Link 1 in Header: Services) with fluid Framer Motion transitions */}
        <ServicesSection
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3. Chinese Vehicles Showcase Section (Link 2 in Header: Véhicules) */}
        <VehiclesSection
          currentLang={currentLang}
          onOpenQuote={(details) => handleOpenQuoteWithDetails(details || '')}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
        />

        {/* 4. Practical Trade & Customs Guides Section (Link 3 in Header: Guides) */}
        <GuidesSection
          currentLang={currentLang}
          onOpenQuote={(details) => handleOpenQuoteWithDetails(details || '')}
        />

        {/* 5. Stats Navy Banner */}
        <StatsBanner currentLang={currentLang} />

        {/* 6. 5-Step Operational Process Timeline */}
        <ProcessTimelineSection
          currentLang={currentLang}
          onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
        />

        {/* 7. Case Studies & Verified Client Reviews */}
        <TestimonialsAndCasesSection
          currentLang={currentLang}
          onOpenQuote={(details) => handleOpenQuoteWithDetails(details || '')}
        />

        {/* 8. Presentation & Company Overview (Link 4 in Header: À propos) */}
        <PresentationSection currentLang={currentLang} />

        {/* 9. FAQ & Customs/FERI Reassurance */}
        <FaqSection
          currentLang={currentLang}
          onOpenContact={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
        />

        {/* 10. Partners Section */}
        <PartnersSection currentLang={currentLang} />

        {/* 11. Call To Action (CTA) */}
        <CtaSection
          currentLang={currentLang}
          onStartProject={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
        />
      </main>

      {/* Footer */}
      <div className="pb-20 lg:pb-0">
        <Footer
          currentLang={currentLang}
          onOpenTracking={() => setTrackingOpen(true)}
          onOpenContact={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
          onOpenLegal={handleOpenLegal}
        />
      </div>

      {/* Mobile Fixed Quick Action Bar (App-like thumb zone) */}
      <MobileBottomBar
        currentLang={currentLang}
        activeSection={activeSection}
        onGoHome={() => scrollToSection('hero')}
        onOpenServices={() => scrollToSection('services')}
        onOpenGuides={() => scrollToSection('guides')}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
      />

      {/* Interactive Modals */}
      <TrackingModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={(details) => handleOpenQuoteWithDetails(details)}
      />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialDetails={quoteDetails}
        onOpenWhatsApp={() => { setQuoteOpen(false); setWhatsAppOpen(true); }}
      />

      <WhatsAppModal
        isOpen={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
      />

      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
