import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaSectionProps {
  currentLang: Language;
  onStartProject: () => void;
  onOpenWhatsApp?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  currentLang,
  onStartProject,
  onOpenWhatsApp,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f172a] rounded-3xl p-8 sm:p-14 md:p-18 text-center text-white border border-slate-800 shadow-soft-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-orange-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.ctaSection.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 font-display leading-[1.2]">
              {t.ctaSection.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-10 leading-[1.7] font-body max-w-2xl mx-auto">
              {t.ctaSection.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-2xl text-sm tracking-wide transition-all shadow-soft-lg hover:shadow-orange-600/25 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
              >
                <span>Demander un Devis Gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenWhatsApp && (
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-750 text-slate-100 font-bold px-8 py-4 rounded-2xl text-sm tracking-wide border border-slate-700 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Échanger sur WhatsApp</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
