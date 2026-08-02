import React, { useState } from 'react';
import { Globe, Menu, X, MessageSquare, Search, Calculator } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

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

  const t = translations[currentLang];

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'presentation', label: t.nav.presentation },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick('hero')}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#021541] flex items-center justify-center text-white font-extrabold text-base sm:text-lg tracking-wider border-2 border-[#bb0019] shrink-0">
            CM
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-extrabold text-[#021541] tracking-tight leading-none">
              CM SERVICE CO., LIMITED
            </h1>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
              Arco Iris RDC • Import / Export
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-[#bb0019] cursor-pointer ${
                activeSection === item.id ? 'text-[#bb0019] font-bold border-b-2 border-[#bb0019] pb-1' : 'text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1.5 text-slate-700 hover:text-[#021541] px-2.5 py-1.5 rounded-md hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
              title="Changer de langue"
            >
              <Globe className="w-4 h-4 text-slate-600" />
              <span className="uppercase font-semibold text-xs">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 border border-slate-200 z-50 animate-in fade-in duration-100">
                <button
                  onClick={() => { onLanguageChange('fr'); setLangDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'fr' ? 'font-bold text-[#021541] bg-slate-50' : 'text-slate-700'}`}
                >
                  <span>Français</span>
                  <span>🇫🇷</span>
                </button>
                <button
                  onClick={() => { onLanguageChange('zh'); setLangDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'zh' ? 'font-bold text-[#021541] bg-slate-50' : 'text-slate-700'}`}
                >
                  <span>中文 (Chinois)</span>
                  <span>🇨🇳</span>
                </button>
                <button
                  onClick={() => { onLanguageChange('en'); setLangDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer ${currentLang === 'en' ? 'font-bold text-[#021541] bg-slate-50' : 'text-slate-700'}`}
                >
                  <span>English</span>
                  <span>🇬🇧</span>
                </button>
              </div>
            )}
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={onOpenWhatsApp}
            className="bg-[#bb0019] hover:bg-[#990014] text-white px-4 xl:px-5 py-2.5 rounded-md text-xs xl:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Quick Lang Switcher Mobile */}
          <div className="flex bg-slate-100 p-0.5 rounded border border-slate-200 text-[11px] font-bold">
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-1.5 py-1 rounded ${currentLang === 'fr' ? 'bg-[#021541] text-white' : 'text-slate-600'}`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('zh')}
              className={`px-1.5 py-1 rounded ${currentLang === 'zh' ? 'bg-[#021541] text-white' : 'text-slate-600'}`}
            >
              ZH
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-1 rounded ${currentLang === 'en' ? 'bg-[#021541] text-white' : 'text-slate-600'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="bg-[#bb0019] text-white p-2 rounded-md text-xs font-semibold shrink-0"
          >
            WhatsApp
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100 shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-2.5 text-base font-semibold text-slate-800 hover:text-[#bb0019]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { onOpenTracking(); setMobileMenuOpen(false); }}
              className="w-full text-left py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200 rounded text-sm font-medium text-slate-800 flex items-center justify-between"
            >
              <span>{t.nav.tracking}</span>
              <Search className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="w-full text-left py-2.5 px-3.5 bg-[#021541] text-white rounded text-sm font-medium flex items-center justify-between"
            >
              <span>{t.nav.calculator}</span>
              <Calculator className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
