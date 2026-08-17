import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Menu,
  X,
  MessageSquare,
  ArrowRight,
  FileText,
  Car,
  BookOpen,
  Building2,
  Ship,
  ChevronDown
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { COMPANY_LOGO } from '../data/content';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenTracking: () => void;
  onOpenCalculator: () => void;
  onOpenQuote: () => void;
  onOpenWhatsApp: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenTracking,
  onOpenCalculator,
  onOpenQuote,
  onOpenWhatsApp,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const t = translations[currentLang];

  // Navigation Links with Contact
  const navLinks = [
    {
      id: 'services',
      label: currentLang === 'zh' ? '服务项目' : currentLang === 'en' ? 'Services' : 'Services',
      icon: Ship,
    },
    {
      id: 'vehicules',
      label: currentLang === 'zh' ? '中国车辆' : currentLang === 'en' ? 'Vehicles' : 'Véhicules',
      icon: Car,
    },
    {
      id: 'guides',
      label: currentLang === 'zh' ? '实战指南' : currentLang === 'en' ? 'Guides' : 'Guides',
      icon: BookOpen,
    },
    {
      id: 'presentation',
      label: currentLang === 'zh' ? '关于我们' : currentLang === 'en' ? 'About' : 'À propos',
      icon: Building2,
    },
    {
      id: 'contact',
      label: currentLang === 'zh' ? '联系我们' : currentLang === 'en' ? 'Contact' : 'Contact',
      icon: MessageSquare,
    },
  ];

  // Intelligent Header (auto-hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down -> hide
        setIsHeaderVisible(false);
        setLangDropdownOpen(false);
      } else {
        // Scrolling up -> show
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll lock when mobile menu overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[78px] sm:min-h-[90px] py-2 flex items-center justify-between">
          
          {/* Logo (Left, clickable = Home) */}
          <div
            className="flex items-center gap-3.5 cursor-pointer select-none group"
            onClick={() => handleNavClick('hero')}
          >
            <div className="h-18 sm:h-22 w-auto flex items-center justify-center shrink-0">
              <img
                src={COMPANY_LOGO}
                alt="CM SERVICE Logo"
                className="h-16 sm:h-20 w-auto max-w-[280px] object-contain transition-transform duration-200 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-xl font-black text-[#0f172a] tracking-tight leading-none font-display">
                  CM SERVICE
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded-full">
                  CO., LTD
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase mt-1 flex items-center gap-1.5">
                <span>🇨🇳 Guangzhou</span>
                <span className="text-orange-500 font-bold">⇄</span>
                <span>🇨🇩 Kinshasa</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation: Exactly 4 Links with active indicator */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer group ${
                    isActive
                      ? 'text-[#0f172a] font-bold'
                      : 'text-slate-600 hover:text-[#0f172a] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle 2px Copper-Orange Active Line / Dot */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-orange-600 rounded-full animate-in fade-in zoom-in duration-150" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Switcher + Exactly 1 CTA Button ("Demander un devis") */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Discreet Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 text-slate-600 hover:text-[#0f172a] px-2.5 py-2 rounded-xl hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                title="Changer de langue"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span className="uppercase">{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-soft-xl py-1.5 border border-slate-200 z-50 animate-in fade-in duration-100">
                  <button
                    onClick={() => { onLanguageChange('fr'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'fr' ? 'font-bold text-[#0f172a] bg-slate-50' : 'text-slate-700'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇫🇷</span>
                      <span>Français</span>
                    </span>
                    {currentLang === 'fr' && <span className="text-orange-600 font-bold">✓</span>}
                  </button>
                  <button
                    onClick={() => { onLanguageChange('zh'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'zh' ? 'font-bold text-[#0f172a] bg-slate-50' : 'text-slate-700'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇨🇳</span>
                      <span>中文</span>
                    </span>
                    {currentLang === 'zh' && <span className="text-orange-600 font-bold">✓</span>}
                  </button>
                  <button
                    onClick={() => { onLanguageChange('en'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'en' ? 'font-bold text-[#0f172a] bg-slate-50' : 'text-slate-700'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇬🇧</span>
                      <span>English</span>
                    </span>
                    {currentLang === 'en' && <span className="text-orange-600 font-bold">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Exactly 1 Primary Action CTA in Copper-Orange */}
            <button
              onClick={onOpenQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-soft flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-98"
            >
              <FileText className="w-4 h-4 text-white/90" />
              <span>Demander un devis</span>
            </button>
          </div>

          {/* Mobile Right Controls: Lang + Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Discreet Mobile Lang Switcher */}
            <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[11px] font-bold">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-1 rounded-lg transition-colors ${currentLang === 'fr' ? 'bg-[#0f172a] text-white' : 'text-slate-600'}`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('zh')}
                className={`px-2 py-1 rounded-lg transition-colors ${currentLang === 'zh' ? 'bg-[#0f172a] text-white' : 'text-slate-600'}`}
              >
                ZH
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-lg transition-colors ${currentLang === 'en' ? 'bg-[#0f172a] text-white' : 'text-slate-600'}`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6 text-[#0f172a]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Full-Screen Midnight Blue Overlay (Penser "Application") */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0f172a] text-white flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
          
          {/* Top Bar of Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto p-1 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_LOGO}
                  alt="CM SERVICE Logo"
                  className="h-8 w-auto max-w-[100px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight text-white font-display">
                  CM SERVICE
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">Guangzhou ⇄ Kinshasa</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-2xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center: 4 Big Navigation Links (Cascade Display) */}
          <div className="py-8 space-y-4 my-auto">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white font-bold border border-orange-500/50'
                      : 'hover:bg-slate-900/60 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold font-display tracking-tight">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className={`w-5 h-5 ${isActive ? 'text-orange-500' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Bottom of Overlay: CTA Button + Contact Links */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-soft-lg active:scale-98 transition-all cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span>Demander un devis</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct (Conseiller en direct)</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
};
