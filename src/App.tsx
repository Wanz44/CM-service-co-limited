import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StatsBanner } from './components/StatsBanner';
import { PresentationSection } from './components/PresentationSection';
import { GuidesSection } from './components/GuidesSection';
import { PartnersSection } from './components/PartnersSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { TrackingModal } from './components/TrackingModal';
import { FreightCalculatorModal } from './components/FreightCalculatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppModal } from './components/WhatsAppModal';

import { ServiceItem, ArticleItem, Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('hero');

  // Modals state
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [quoteDetails, setQuoteDetails] = useState('');

  const handleOpenQuoteWithDetails = (details: string) => {
    setQuoteDetails(details);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#121c2c] antialiased">
      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Banner */}
        <Hero
          currentLang={currentLang}
          onOpenContact={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onOpenServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 2. Services Section */}
        <ServicesSection
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3. Stats Navy Banner */}
        <StatsBanner currentLang={currentLang} />

        {/* 4. Presentation & Company Overview */}
        <PresentationSection currentLang={currentLang} />

        {/* 5. Guides & Actualités */}
        <GuidesSection
          currentLang={currentLang}
          onSelectArticle={(article) => setSelectedArticle(article)}
          onViewAllArticles={() => {
            const el = document.getElementById('blog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Partners Section */}
        <PartnersSection currentLang={currentLang} />

        {/* 7. Call To Action (CTA) */}
        <CtaSection
          currentLang={currentLang}
          onStartProject={() => { setQuoteDetails(''); setQuoteOpen(true); }}
          onViewTariffs={() => setCalculatorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenContact={() => { setQuoteDetails(''); setQuoteOpen(true); }}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
      />

      {/* Interactive Modals */}
      <TrackingModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
      />

      <FreightCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onRequestQuoteWithDetails={handleOpenQuoteWithDetails}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={(details) => handleOpenQuoteWithDetails(details)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenQuote={() => { setQuoteDetails(''); setQuoteOpen(true); }}
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
    </div>
  );
}
