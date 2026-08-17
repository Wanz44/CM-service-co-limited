import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface GuidesSectionProps {
  currentLang: Language;
  onOpenQuote: (details?: string) => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({
  currentLang,
  onOpenQuote,
}) => {
  const [activeGuideIndex, setActiveGuideIndex] = useState(0);

  const guides = [
    {
      id: 'guide-1688-alibaba',
      category: 'SOURCING & NÉGOCIATION',
      title: 'Importer depuis Alibaba & 1688 vers Kinshasa sans se faire arnaquer',
      readTime: '5 min',
      badge: 'Essentiel Acheteurs',
      steps: [
        {
          title: 'Pourquoi 1688 est 30% moins cher qu\'Alibaba ?',
          desc: '1688.com est la plateforme domestique chinoise B2B avec des tarifs usine purs. Alibaba applique des marges pour les acheteurs internationaux.',
        },
        {
          title: 'Le rôle de notre centrale d\'achat à Guangzhou',
          desc: 'Nous payons en RMB pour vous, recevons vos colis dans notre entrepôt de Yuexiu, et faisons le contrôle qualité avant le départ pour la RDC.',
        },
        {
          title: 'Éviter les contrefaçons et vérifier les usines',
          desc: 'Exigez toujours des tests d\'échantillons et une inspection photo/vidéo avant le chargement en conteneur.',
        }
      ],
      ctaText: 'Faire vérifier un fournisseur chinois',
    },
    {
      id: 'guide-feri-dgda',
      category: 'DOUANES & CONFORMITÉ',
      title: 'Certificat FERI obligatoire & Dédouanement DGDA à Matadi / Kinshasa',
      readTime: '6 min',
      badge: 'Réglementation Officielle',
      steps: [
        {
          title: 'Qu\'est-ce que la FERI (Fiche Électronique de Renseignement) ?',
          desc: 'Document obligatoire exigé par l\'OGEFREM pour toute cargaison maritime à destination de la RDC, à valider impérativement avant le départ du navire.',
        },
        {
          title: 'Les pièces maîtresses du dédouanement',
          desc: 'Connaissement maritime (Bill of Lading / BL), Facture commerciale originale, Liste de colisage (Packing list) et Attestation BIVAC/OCC.',
        },
        {
          title: 'Comment CM Service évite les surestaries et pénalités ?',
          desc: 'Nous anticipons le pré-dédouanement dès que le bateau est en mer pour obtenir le bon à enlever dès l\'accostage au port de Matadi.',
        }
      ],
      ctaText: 'Obtenir une assistance FERI',
    },
    {
      id: 'guide-calcul-cbm',
      category: 'LOGISTIQUE & OPTIMISATION',
      title: 'Comment calculer et optimiser le CBM de son groupage maritime',
      readTime: '4 min',
      badge: 'Économies Fret',
      steps: [
        {
          title: 'La formule mathématique du CBM',
          desc: 'CBM = Longueur (m) × Largeur (m) × Hauteur (m). 1 CBM standard peut contenir environ 10 à 15 cartons moyens de marchandises.',
        },
        {
          title: 'Le reconditionnement volumétrique en entrepôt',
          desc: 'Notre équipe à Guangzhou déballe et réassemble vos colis pour supprimer le vide d\'air et diviser votre facture par deux.',
        },
        {
          title: 'Quand choisir l\'Aérien plutôt que le Maritime ?',
          desc: 'Pour moins de 50 kg ou des marchandises à haute valeur / urgence commerciale (téléphones, pièces détachées, échantillons).',
        }
      ],
      ctaText: 'Demander une étude volumétrique',
    }
  ];

  return (
    <section id="guides" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guides & Bonnes Pratiques</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
            {currentLang === 'zh'
              ? '中刚进出口实战指南与清关干货'
              : currentLang === 'en'
              ? 'Practical Guides: China to DR Congo Trade & Customs'
              : 'Guides Pratiques : Maîtrisez le Corridor Chine ➔ RDC'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            {currentLang === 'zh'
              ? '深入了解1688采购、FERI电子货物跟踪单办理、CBM材积计算及刚果（金）海关DGDA合规要求。'
              : currentLang === 'en'
              ? 'Everything you need to know about sourcing in China, mandatory FERI certificates, CBM freight calculations, and customs.'
              : 'Toutes les clés pour sécuriser vos approvisionnements à Guangzhou, optimiser vos volumes CBM et éviter les blocages en douane à Kinshasa.'}
          </p>
        </div>

        {/* Guides Layout: Interactive Selector + Expanded Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Horizontal Scroll on Mobile / Vertical Tab List on Desktop */}
          <div className="lg:col-span-5 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x">
            {guides.map((guide, idx) => (
              <div
                key={guide.id}
                onClick={() => setActiveGuideIndex(idx)}
                className={`p-5 rounded-3xl border transition-all duration-200 cursor-pointer snap-start min-w-[280px] lg:min-w-0 shrink-0 lg:shrink flex flex-col justify-between ${
                  activeGuideIndex === idx
                    ? 'bg-white border-orange-500 shadow-soft-lg ring-2 ring-orange-500/10'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-soft'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                      {guide.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className={`font-extrabold text-sm sm:text-base leading-snug font-display ${
                    activeGuideIndex === idx ? 'text-[#0f172a]' : 'text-slate-700'
                  }`}>
                    {guide.title}
                  </h3>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-bold">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] border ${
                    activeGuideIndex === idx
                      ? 'bg-orange-50 text-orange-700 border-orange-200'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}>
                    {guide.badge}
                  </span>
                  <span className={`flex items-center gap-1 transition-transform ${
                    activeGuideIndex === idx ? 'text-orange-600 translate-x-1' : 'text-slate-400'
                  }`}>
                    <span>Lire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Guide View */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <span>{guides[activeGuideIndex].category}</span>
              <span>•</span>
              <span className="text-slate-400">{guides[activeGuideIndex].readTime} de lecture</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] font-display mb-6 leading-tight">
              {guides[activeGuideIndex].title}
            </h3>

            {/* Steps Accordion / Explanations */}
            <div className="space-y-4 mb-8">
              {guides[activeGuideIndex].steps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-xl bg-orange-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-soft">
                      {sIdx + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#0f172a] font-display mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions for Guide */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Conseil certifié par nos experts Guangzhou & Kinshasa</span>
              </div>

              <button
                onClick={() => {
                  onOpenQuote(`Demande d'accompagnement suite au guide : ${guides[activeGuideIndex].title}`);
                }}
                className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-soft transition-colors cursor-pointer"
              >
                <span>{guides[activeGuideIndex].ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
