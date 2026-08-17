import React from 'react';
import { ArrowRight, Search, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenContact: () => void;
  onOpenServices?: () => void;
  onOpenTracking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenContact,
  onOpenTracking,
}) => {
  const t = translations[currentLang];

  return (
    <section id="hero" className="relative bg-[#f8fafc] text-[#0f172a] pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-200/70">
      {/* Subtle geometric dot grid pattern background for high-tech corporate feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 sm:space-y-8 text-left">
          {/* Minimalist Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-soft text-slate-800 text-xs font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            <span className="text-slate-600 font-medium">Corridor Direct Exclusif</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#0f172a] font-bold">Chine ➔ RDC</span>
          </div>

          {/* Huge Headline in Midnight Blue (#0f172a) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#0f172a] tracking-tight leading-[1.12] font-display">
            {currentLang === 'zh' ? (
              <span>连接广州与金沙萨的<br className="hidden sm:inline" /><span className="text-orange-600">高标准物流专线</span></span>
            ) : currentLang === 'en' ? (
              <span>Your Direct Logistics Bridge Between <span className="text-orange-600">Guangzhou & Kinshasa.</span></span>
            ) : (
              <span>Votre pont logistique direct entre <span className="text-orange-600">Guangzhou et Kinshasa.</span></span>
            )}
          </h1>

          {/* Short subtitle with airy line-height (1.6 - 1.7) */}
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-[1.7] max-w-3xl font-body">
            {currentLang === 'zh'
              ? '专注于中刚双向供应链：源头采购、越秀集运仓品控、整柜拼箱海运及航空专线，金沙萨一站式清关直达。'
              : currentLang === 'en'
              ? 'Dedicated China-to-DRC freight solutions: factory sourcing, warehouse quality control, FCL/LCL sea shipping, air express, and seamless Kinshasa customs clearance.'
              : 'Sourcing usine vérifié, entrepôt sécurisé à Guangzhou, conteneurs maritimes FCL/LCL, fret aérien express et dédouanement complet DGDA & FERI à Kinshasa.'}
          </p>

          {/* Action Buttons (10% Accent: Copper Orange #ea580c) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onOpenContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 shadow-soft-lg hover:shadow-orange-600/20 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 text-center"
            >
              <span>{currentLang === 'zh' ? '立即获取专属报价' : currentLang === 'en' ? 'Get Instant Quote' : 'Demander une Cotation Pro'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenTracking && (
              <button
                onClick={onOpenTracking}
                className="bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200/90 px-7 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 shadow-soft hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-98 text-center"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>{currentLang === 'zh' ? '查询货物动态' : currentLang === 'en' ? 'Track Shipment' : 'Suivre une Marchandise'}</span>
              </button>
            )}
          </div>

          {/* Micro Live Status */}
          <div className="flex items-center gap-2.5 text-xs text-slate-500 pt-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>{currentLang === 'zh' ? '广州越秀集货仓正常收货中 • 每周二/五定期发柜' : currentLang === 'en' ? 'Guangzhou warehouse open • Regular weekly container departures' : 'Entrepôt Guangzhou ouvert • Départs conteneurs hebdomadaires garantis'}</span>
          </div>
        </div>

        {/* REASSURANCE BAR: 3 Minimalist Icons Underneath with generous spacing */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/60 border border-slate-200/50 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0f172a]">Dédouanement DGDA & FERI Agréé</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Conformité totale OCC, BIVAC et guichet unique sans blocage imprévu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/60 border border-slate-200/50 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#021541] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0f172a]">Bureaux Physiques Directs</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Guangzhou Yuexiu 🇨🇳 & Kinshasa Gombe 🇨🇩. Équipes sur place 7j/7.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/60 border border-slate-200/50 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0f172a]">Suivi & Traçabilité Temps Réel</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Mises à jour à chaque étape : empotage, embarquement et déchargement.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
