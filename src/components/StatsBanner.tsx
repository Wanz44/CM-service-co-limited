import React from 'react';
import { ClipboardCheck, Globe, Users, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StatsBannerProps {
  currentLang: Language;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="bg-[#0f172a] text-white py-16 sm:py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">
            Infrastructure & Capacité
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Des chiffres concrets au service de votre rentabilité
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block mb-1">
                +1 250
              </span>
              <h3 className="text-sm font-bold text-slate-200">
                {t.statsBanner.shipments}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Conteneurs FCL et expéditions LCL acheminés sans incident de Guangzhou au port de Matadi & Kinshasa.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block mb-1">
                2 Hubs Propres
              </span>
              <h3 className="text-sm font-bold text-slate-200">
                {t.statsBanner.offices}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Bureaux et entrepôts physiques exclusifs à Guangzhou Yuexiu 🇨🇳 et Kinshasa Gombe 🇨🇩 sans sous-traitance opaque.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block mb-1">
                100% Garantie
              </span>
              <h3 className="text-sm font-bold text-slate-200">
                {t.statsBanner.guarantee}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Contrôle qualité physique systématique et assurance transport Ad Valorem sécurisant vos capitaux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
