import React from 'react';
import { ArrowRight, ShieldCheck, Ship, Plane } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenContact: () => void;
  onOpenServices: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenContact,
  onOpenServices,
  onOpenCalculator,
}) => {
  const t = translations[currentLang];

  return (
    <section id="hero" className="relative bg-[#021541] text-white min-h-[520px] sm:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Cargo Container Ship Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Cargo ship container shipping Arco Iris"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        {/* Dark Navy Blue Gradient Overlay for optimum contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021541] via-[#021541]/95 to-[#021541]/75" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#bb0019] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-4 sm:mb-6">
            {t.hero.title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenContact}
              className="bg-[#bb0019] hover:bg-[#990014] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
            >
              <span>{t.hero.btnProject}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
            >
              <Ship className="w-4 h-4 text-sky-400 shrink-0" />
              <Plane className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.hero.btnRates}</span>
            </button>
          </div>

          {/* Tagline */}
          <div className="mt-6 text-xs text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span>{t.hero.tagline}</span>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <div>
              <span className="block text-lg sm:text-2xl font-bold text-white mb-0.5">Guangzhou ➔ Matadi</span>
              <span className="text-[11px] sm:text-xs text-slate-400">FCL & LCL Maritime</span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-bold text-white mb-0.5">4 à 7 Jours</span>
              <span className="text-[11px] sm:text-xs text-slate-400">Aérien Express Kinshasa</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-lg sm:text-2xl font-bold text-white mb-0.5">100% Conforme</span>
              <span className="text-[11px] sm:text-xs text-slate-400">DGDA, FERI & OCC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

