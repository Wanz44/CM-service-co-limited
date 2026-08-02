import React from 'react';
import { Calculator, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaSectionProps {
  currentLang: Language;
  onStartProject: () => void;
  onViewTariffs: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  currentLang,
  onStartProject,
  onViewTariffs,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#d9e3f9] via-[#e7eeff] to-[#dee8ff] rounded-lg p-6 sm:p-12 md:p-16 text-center border border-slate-200/80 shadow-xs relative overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-[#021541]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold text-[#bb0019] bg-white/80 px-3 py-1 rounded uppercase tracking-wider inline-block mb-3 border border-slate-200">
              {t.ctaSection.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#021541] tracking-tight mb-4 leading-tight">
              {t.ctaSection.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-lg mb-8 leading-relaxed">
              {t.ctaSection.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto bg-[#021541] hover:bg-[#1a2b56] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{t.ctaSection.btnStart}</span>
                <Send className="w-4 h-4 text-red-400" />
              </button>

              <button
                onClick={onViewTariffs}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#021541] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm tracking-wider uppercase border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.ctaSection.btnTariffs}</span>
                <Calculator className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

