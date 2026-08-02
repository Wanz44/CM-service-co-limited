import React from 'react';
import { Building2, Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PresentationSectionProps {
  currentLang: Language;
}

export const PresentationSection: React.FC<PresentationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="presentation" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Image & Badges */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Logistique CM Service Guangzhou Kinshasa"
                className="w-full h-[320px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021541]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 block mb-1">
                  {t.presentationSection.subBadge}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold">
                  {t.presentationSection.officeTitle}
                </h3>
              </div>
            </div>

            {/* Overlapping badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#021541] text-white p-5 sm:p-6 rounded-md shadow-xl border-2 border-[#bb0019] max-w-xs flex-col gap-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span className="font-extrabold text-base sm:text-lg">{t.presentationSection.awardTitle}</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                {t.presentationSection.awardDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e7eeff] text-[#021541] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#bb0019]" />
              <span>{t.presentationSection.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#021541] tracking-tight leading-tight">
              {t.presentationSection.title}
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              {t.presentationSection.desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#bb0019] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#021541] text-xs sm:text-sm">{t.presentationSection.feature1Title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{t.presentationSection.feature1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#bb0019] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#021541] text-xs sm:text-sm">{t.presentationSection.feature2Title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{t.presentationSection.feature2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#bb0019] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#021541] text-xs sm:text-sm">{t.presentationSection.feature3Title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{t.presentationSection.feature3Desc}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-semibold text-slate-700">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase">Bureau Chine</span>
                <span className="text-[#021541] font-bold">{t.presentationSection.chinaOffice}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase">Bureau RDC</span>
                <span className="text-[#021541] font-bold">{t.presentationSection.rdcOffice}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

