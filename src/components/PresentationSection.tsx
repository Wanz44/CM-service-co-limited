import React from 'react';
import { Building2, Award, CheckCircle, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PresentationSectionProps {
  currentLang: Language;
}

export const PresentationSection: React.FC<PresentationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="presentation" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Bento Box with Filtered Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft-xl bg-white p-3">
              <div className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Logistique CM Service Guangzhou Kinshasa"
                  className="w-full h-full object-cover grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 block mb-1">
                    {t.presentationSection.subBadge}
                  </span>
                  <h3 className="text-xl font-bold font-display leading-snug">
                    {t.presentationSection.officeTitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Clean Minimalist Overlapping Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 bg-white p-6 rounded-3xl shadow-soft-xl border border-slate-200/80 max-w-xs flex-col gap-2">
              <div className="flex items-center gap-2.5 text-orange-600">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-sm text-[#0f172a] font-display">{t.presentationSection.awardTitle}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                {t.presentationSection.awardDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Text Information & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              <span>{t.presentationSection.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display leading-tight">
              {t.presentationSection.title}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-body">
              {t.presentationSection.desc}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm font-display">{t.presentationSection.feature1Title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-body">{t.presentationSection.feature1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm font-display">{t.presentationSection.feature2Title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-body">{t.presentationSection.feature2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm font-display">{t.presentationSection.feature3Title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-body">{t.presentationSection.feature3Desc}</p>
                </div>
              </div>
            </div>

            {/* Hub Addresses */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-soft">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🇨🇳</span>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Hub Chine</span>
                </div>
                <div className="text-[#0f172a] font-bold text-sm font-display">Guangzhou (Yuexiu)</div>
                <div className="text-slate-500 text-xs font-normal mt-0.5">Sourcing, Entrepôt & Inspection qualité</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-soft">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🇨🇩</span>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Siège RDC</span>
                </div>
                <div className="text-[#0f172a] font-bold text-sm font-display">Kinshasa (Gombe)</div>
                <div className="text-slate-500 text-xs font-normal mt-0.5">Dédouanement, Transit & Livraison finale</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
