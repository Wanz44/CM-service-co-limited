import React from 'react';
import { PARTNERS_LIST } from '../data/content';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PartnersSectionProps {
  currentLang: Language;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">
          {t.partnersSection.badge}
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {PARTNERS_LIST.map((partner) => (
            <div 
              key={partner.name}
              className="text-base sm:text-2xl font-black text-slate-600 tracking-wider hover:text-[#021541] transition-colors select-none"
            >
              {partner.logoText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

