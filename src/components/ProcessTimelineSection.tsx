import React from 'react';
import { ShoppingCart, PackageCheck, Ship, ShieldCheck, Truck, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ProcessTimelineSectionProps {
  currentLang: Language;
  onOpenQuote: () => void;
}

export const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({
  currentLang,
  onOpenQuote,
}) => {
  const steps = [
    {
      number: '01',
      icon: ShoppingCart,
      title: currentLang === 'zh' ? '采购与验厂' : currentLang === 'en' ? 'Sourcing & Factory Audit' : 'Sourcing & Achat Usine',
      subtitle: currentLang === 'zh' ? '广州 / 1688 / 佛山制造基地' : currentLang === 'en' ? 'Guangzhou / 1688 / Foshan Hub' : 'Guangzhou, Yiwu, Foshan & 1688',
      desc: currentLang === 'zh'
        ? '直接对接中国源头厂家，核验资质、样品确认、商务谈判及合规外汇结算。'
        : currentLang === 'en'
        ? 'Direct connection with verified Chinese manufacturers, sample inspection, price negotiation, and secure payments.'
        : 'Recherche des meilleures usines certifiées en Chine, négociation au prix d\'usine local, vérification des échantillons et paiement sécurisé RMB/USD.',
      badge: currentLang === 'zh' ? '源头直供' : currentLang === 'en' ? 'Factory Direct' : 'Prix Usine Direct',
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      delay: currentLang === 'zh' ? '24 - 48 小时' : currentLang === 'en' ? '24 - 48 Hours' : '24h à 48h',
    },
    {
      number: '02',
      icon: PackageCheck,
      title: currentLang === 'zh' ? '仓库集货与品控' : currentLang === 'en' ? 'Warehousing & Inspection' : 'Réception & Contrôle Qualité',
      subtitle: currentLang === 'zh' ? '广州越秀专属集运仓' : currentLang === 'en' ? 'Yuexiu Secure Warehouse' : 'Entrepôt sécurisé Yuexiu (Guangzhou)',
      desc: currentLang === 'zh'
        ? '货物入库称重、拍照验货、加固打包及拼箱集货，确保货物无损且符合装箱规范。'
        : currentLang === 'en'
        ? 'Receiving, photo inspection, reinforced packing, palletizing, and container consolidation.'
        : 'Réception dans notre entrepôt de Guangzhou, déballage, contrôle qualité vidéo/photo, remballage renforcé, pesage et consolidation CBM.',
      badge: currentLang === 'zh' ? '100% 实物核验' : currentLang === 'en' ? '100% Inspected' : 'Inspection 100%',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      delay: currentLang === 'zh' ? '入库即验' : currentLang === 'en' ? 'Same Day' : 'Le jour même',
    },
    {
      number: '03',
      icon: Ship,
      title: currentLang === 'zh' ? '国际干线运输' : currentLang === 'en' ? 'International Freight' : 'Expédition Maritime ou Aérienne',
      subtitle: currentLang === 'zh' ? '整柜/拼箱海运 & 航空专线' : currentLang === 'en' ? 'FCL/LCL Sea & Air Cargo' : 'Conteneurs FCL 20\'/40\', Groupage LCL & Fret Aérien',
      desc: currentLang === 'zh'
        ? '对接马士基、达飞、埃塞俄比亚航空等顶级承运商，全程温控与集装箱封签追踪。'
        : currentLang === 'en'
        ? 'Top-tier carrier allocation (Maersk, CMA CGM, Ethiopian Airlines) with container seal tracking.'
        : 'Embarquement prioritaire sur nos lignes directes Guangzhou ➔ Port de Matadi (35-45j) ou Fret Aérien Express Guangzhou ➔ N\'djili Kinshasa (4-7j).',
      badge: currentLang === 'zh' ? '每周装柜' : currentLang === 'en' ? 'Weekly Sailings' : 'Départs Hebdo',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      delay: currentLang === 'zh' ? '海运35-45天 | 空运4-7天' : currentLang === 'en' ? 'Sea 35-45d | Air 4-7d' : 'Mer 35-45j | Air 4-7j',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: currentLang === 'zh' ? '清关与合规单证' : currentLang === 'en' ? 'Customs & FERI Compliance' : 'Dédouanement DGDA & FERI',
      subtitle: currentLang === 'zh' ? 'DGDA / FERI / BIVAC / OCC' : currentLang === 'en' ? 'Full DRC Customs Clearance' : 'Guichet unique Matadi / Kinshasa',
      desc: currentLang === 'zh'
        ? '刚果（金）常驻专业报关团队，全权办理 FERI 认证、BIVAC、OCC 检验及海关税费代缴。'
        : currentLang === 'en'
        ? 'Dedicated DRC customs brokers handling FERI certificates, BIVAC, OCC, and DGDA taxes.'
        : 'Prise en charge intégrale des formalités administratives et fiscales : obtention du certificat FERI, inspection OCC, BIVAC et déclaration douanière DGDA.',
      badge: currentLang === 'zh' ? '零扣关保障' : currentLang === 'en' ? 'Guaranteed Clearance' : '100% Conforme',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      delay: currentLang === 'zh' ? '3 - 5 个工作日' : currentLang === 'en' ? '3 - 5 Business Days' : '3 à 5 jours ouvrés',
    },
    {
      number: '05',
      icon: Truck,
      title: currentLang === 'zh' ? '金沙萨安全交付' : currentLang === 'en' ? 'Kinshasa Final Delivery' : 'Livraison Sécurisée à Kinshasa',
      subtitle: currentLang === 'zh' ? 'Gombe 总部提货或门到门派送' : currentLang === 'en' ? 'Gombe HQ Pickup or Door Delivery' : 'Bureau Gombe ou Livraison sur site',
      desc: currentLang === 'zh'
        ? '在金沙萨 Gombe 区安全提货，或直接派送至您指定的仓库、工地及各省分拨点。'
        : currentLang === 'en'
        ? 'Secure collection at our Gombe office or direct delivery to your warehouse, store, or project site.'
        : 'Retrait immédiat de vos colis et conteneurs dans nos locaux de la Gombe ou livraison directe par camion sur votre chantier, entrepôt ou magasin.',
      badge: currentLang === 'zh' ? '安全签收' : currentLang === 'en' ? 'Doorstep Handover' : 'Remise Clé en Main',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      delay: currentLang === 'zh' ? '即时提货' : currentLang === 'en' ? 'Instant Pickup' : 'Immédiat après douane',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{currentLang === 'zh' ? '中刚直营专属流程' : currentLang === 'en' ? '5-STEP SEAMLESS CORRIDOR' : 'PARCOURS OPÉRATIONNEL EN 5 ÉTAPES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
            {currentLang === 'zh' 
              ? '从中国工厂到金沙萨，全程零中间商直控' 
              : currentLang === 'en' 
              ? 'From Chinese Factories to Kinshasa, Seamlessly Controlled' 
              : 'De l\'usine en Chine à Kinshasa, un corridor logistique 100% maîtrisé'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-[1.7] font-body">
            {currentLang === 'zh'
              ? '清晰、透明且高度安全的五步标准化操作体系，保障您的每一批货物准时、完好送达。'
              : currentLang === 'en'
              ? 'A clear, transparent, and structured 5-step operational framework guaranteeing reliability and punctuality.'
              : 'Une méthodologie rigoureuse et transparente pour sécuriser vos marchandises, optimiser vos coûts et accélérer vos flux.'}
          </p>
        </div>

        {/* 5 Steps Grid (Modern Bento Stepper) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group relative"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-orange-600 transition-colors font-display">
                      {step.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-slate-50 text-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#0f172a] mb-1 font-display leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-bold text-orange-600 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                {/* Delay metric */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Délai :</span>
                  </span>
                  <span className="font-bold text-[#0f172a]">{step.delay}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Clean Reassurance Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0f172a] font-display">
                {currentLang === 'zh' ? '需要为您定制专属运输方案？' : currentLang === 'en' ? 'Need a Custom China ➔ DRC Shipping Plan?' : 'Vous avez un conteneur ou un colis à faire expédier ?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {currentLang === 'zh' ? '中法双语团队为您提供一对一精准核算与全程跟踪' : currentLang === 'en' ? 'Our bilingual team provides 1-on-1 calculations and dedicated tracking' : 'Nos agents à Guangzhou et Kinshasa vous conseillent et établissent votre cotation en moins de 2h.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-soft flex items-center justify-center gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              <span>{currentLang === 'zh' ? '获取专属报价' : currentLang === 'en' ? 'Get Instant Quote' : 'Demander une Cotation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
