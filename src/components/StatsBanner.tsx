import React from 'react';
import { ClipboardCheck, Globe, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StatsBannerProps {
  currentLang: Language;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="bg-[#021541] text-white py-12 sm:py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 md:bg-transparent md:border-none">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white/10 flex items-center justify-center text-white mb-3 sm:mb-4 border border-white/15">
              <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#bb0019]" />
            </div>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase">
              {t.statsBanner.shipments}
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Sourcing, conteneurs complets et groupage livrés à Kinshasa.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 md:bg-transparent md:border-none md:border-x md:border-white/10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white/10 flex items-center justify-center text-white mb-3 sm:mb-4 border border-white/15">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400" />
            </div>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase">
              {t.statsBanner.offices}
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Chine, RDC, France, Belgique, Canada & Afrique centrale.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 md:bg-transparent md:border-none">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white/10 flex items-center justify-center text-white mb-3 sm:mb-4 border border-white/15">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
            </div>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase">
              {t.statsBanner.guarantee}
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Équipes permanentes à Guangzhou (Guangdong) & Kinshasa (Gombe).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

