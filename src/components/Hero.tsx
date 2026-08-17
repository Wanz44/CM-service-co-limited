import React from 'react';
import { ArrowRight, Search, ShieldCheck, Clock, MapPin, Plane, Ship } from 'lucide-react';
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
    <section id="hero" className="relative bg-[#f8fafc] text-[#0f172a] pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-slate-200/70">
      {/* Subtle geometric dot grid pattern background for high-tech corporate feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean Corporate Typography & CTAs (60-30-10 palette) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
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
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0f172a] tracking-tight leading-[1.15] font-display">
              {currentLang === 'zh' ? (
                <span>连接广州与金沙萨的<br className="hidden sm:inline" /><span className="text-orange-600">高标准物流专线</span></span>
              ) : currentLang === 'en' ? (
                <span>Your Direct Logistics Bridge Between <span className="text-orange-600">Guangzhou & Kinshasa.</span></span>
              ) : (
                <span>Votre pont logistique direct entre <span className="text-orange-600">Guangzhou et Kinshasa.</span></span>
              )}
            </h1>

            {/* Short subtitle with airy line-height (1.6 - 1.7) */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-2xl font-body">
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
                className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 shadow-soft-lg hover:shadow-orange-600/20 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 text-center"
              >
                <span>{currentLang === 'zh' ? '立即获取专属报价' : currentLang === 'en' ? 'Get Instant Quote' : 'Demander une Cotation Pro'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenTracking && (
                <button
                  onClick={onOpenTracking}
                  className="bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200/90 px-6 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 shadow-soft hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-98 text-center"
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

          {/* RIGHT COLUMN: Minimalist Vector Trade Corridor Visual (Clean Data & Abstract Graphic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-xl overflow-hidden">
              
              {/* Header of the corridor card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Corridor Logistique Actif
                  </span>
                  <h3 className="text-base font-bold text-[#0f172a] font-display">
                    Guangzhou (CAN) ➔ Kinshasa (FIH)
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Ligne Ouverte
                </span>
              </div>

              {/* Vector Corridor Interactive Graphic */}
              <div className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 overflow-hidden">
                <svg className="w-full h-44" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background grid lines */}
                  <line x1="0" y1="40" x2="360" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="360" y2="80" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="0" y1="120" x2="360" y2="120" stroke="#e2e8f0" strokeDasharray="3 3" />

                  {/* Main Arc Path Connecting Guangzhou (300, 30) to Kinshasa (60, 130) */}
                  <path
                    d="M 300 35 C 240 10, 120 40, 60 125"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Animated Dashed Arc */}
                  <path
                    d="M 300 35 C 240 10, 120 40, 60 125"
                    stroke="#ea580c"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />

                  {/* Cargo Vessel Marker on Midpoint */}
                  <g transform="translate(170, 48)">
                    <circle cx="12" cy="12" r="14" fill="#0f172a" />
                    <circle cx="12" cy="12" r="18" fill="#0f172a" fillOpacity="0.15" />
                    <Ship className="w-4 h-4 text-white" x="4" y="4" />
                  </g>

                  {/* Origin Node: Guangzhou */}
                  <g transform="translate(280, 20)">
                    <circle cx="20" cy="15" r="16" fill="#f97316" fillOpacity="0.2" />
                    <circle cx="20" cy="15" r="8" fill="#ea580c" />
                    <circle cx="20" cy="15" r="3" fill="#ffffff" />
                  </g>

                  {/* Destination Node: Kinshasa */}
                  <g transform="translate(40, 110)">
                    <circle cx="20" cy="15" r="16" fill="#0284c7" fillOpacity="0.2" />
                    <circle cx="20" cy="15" r="8" fill="#0284c7" />
                    <circle cx="20" cy="15" r="3" fill="#ffffff" />
                  </g>
                </svg>

                {/* Node Labels */}
                <div className="flex justify-between items-end mt-1 text-xs">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block">Arrivée RDC</span>
                    <span className="font-bold text-[#0f172a]">🇨🇩 Kinshasa (Gombe)</span>
                    <span className="text-[10px] text-slate-500 block">Port Matadi & N'djili</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">Départ Chine</span>
                    <span className="font-bold text-[#0f172a]">🇨🇳 Guangzhou (Yuexiu)</span>
                    <span className="text-[10px] text-slate-500 block">Hub Sourcing & Entrepôt</span>
                  </div>
                </div>
              </div>

              {/* Micro Data Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-0.5">
                    <Ship className="w-3.5 h-3.5 text-blue-600" />
                    <span>Fret Maritime</span>
                  </div>
                  <div className="text-sm font-bold text-[#0f172a]">35 à 45 Jours</div>
                  <div className="text-[10px] text-slate-500">Conteneurs FCL & Groupage LCL</div>
                </div>

                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-0.5">
                    <Plane className="w-3.5 h-3.5 text-orange-600" />
                    <span>Fret Aérien Express</span>
                  </div>
                  <div className="text-sm font-bold text-[#0f172a]">4 à 7 Jours</div>
                  <div className="text-[10px] text-slate-500">Vols réguliers N'djili</div>
                </div>
              </div>
            </div>
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
