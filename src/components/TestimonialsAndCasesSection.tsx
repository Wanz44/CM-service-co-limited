import React, { useState } from 'react';
import { Star, CheckCircle, Building2, Car, Factory, Package, Quote, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsAndCasesSectionProps {
  currentLang: Language;
  onOpenQuote: (details?: string) => void;
}

export const TestimonialsAndCasesSection: React.FC<TestimonialsAndCasesSectionProps> = ({
  currentLang,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'cases' | 'reviews'>('cases');

  const caseStudies = [
    {
      id: 'case-btp',
      category: 'BTP & Immobilier',
      icon: Building2,
      client: 'Groupe Immobilier Kalubwe - Kinshasa Gombe',
      title: currentLang === 'zh'
        ? '佛山直采：4个40尺高柜陶瓷与卫浴清关'
        : currentLang === 'en'
        ? 'Foshan Direct: 4x 40HQ Containers of Tiles & Sanitaryware'
        : 'Importation de 4 conteneurs 40FT de Carrelage & Sanitaires (Foshan ➔ Matadi)',
      description: currentLang === 'zh'
        ? '为金沙萨高端住宅项目直接从佛山瓷砖工厂直采，实施仓库全面打托加固、海运直航及马塔迪港口加急清关。'
        : currentLang === 'en'
        ? 'Direct factory sourcing in Foshan for luxury apartments in Kinshasa. Full palletization, direct maritime freight, and fast-track clearance in Matadi.'
        : 'Sourcing direct usine à Foshan pour un ensemble résidentiel à la Gombe. Palettisation renforcée, fret maritime direct et dédouanement complet DGDA sans casse.',
      metrics: [
        { label: 'Économie vs local', value: '-38%' },
        { label: 'Délai usine ➔ Kin', value: '42 jours' },
        { label: 'Taux de casse', value: '0.0%' },
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-auto',
      category: 'Automobile & Flotte',
      icon: Car,
      client: 'Société Minière & Logistique Katanga / Kinshasa',
      title: currentLang === 'zh'
        ? '采购出口 6 台比亚迪新能源 SUV 与重汽自卸车'
        : currentLang === 'en'
        ? 'Procurement & Export of 6 BYD EV SUVs & Sinotruk Trucks'
        : 'Achat & Livraison de 6 Véhicules Chinois Neufs (BYD & Sinotruk)',
      description: currentLang === 'zh'
        ? '协助客户完成车厂订购、中刚合规出口许可证办理、滚装船（RoRo）运输及金沙萨上牌交钥匙交付。'
        : currentLang === 'en'
        ? 'Complete management of vehicle procurement, RoRo sea freight, DRC customs clearance, and turn-key registration delivery in Kinshasa.'
        : 'Sélection chez le constructeur en Chine, inspection mécanique, transport sécurisé navire RORO, paiement des droits de douane et immatriculation complète.',
      metrics: [
        { label: 'Véhicules livrés', value: '6 unités' },
        { label: 'Gain de coût', value: '-25%' },
        { label: 'Statut', value: 'Clé en main' },
      ],
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-agro',
      category: 'Agro-Industrie',
      icon: Factory,
      client: 'Ferme Avicole Moderne - Kongo Central',
      title: currentLang === 'zh'
        ? '光伏全自动大型孵化机生产线引进'
        : currentLang === 'en'
        ? 'Solar Hybrid Industrial Incubators Supply'
        : 'Importation de 8 Incubateurs Industriels Solaires Grande Capacité',
      description: currentLang === 'zh'
        ? '为刚果中央省养殖基地引进高产智能孵化设备，包含中方厂家远程安装指导及原厂备件常备。'
        : currentLang === 'en'
        ? 'Procurement and delivery of smart solar-powered hatchery equipment with factory warranty and spare parts supply.'
        : 'Sourcing usine d\'incubateurs hybrides à haute éclosion avec fourniture de pièces détachées et accompagnement technique.',
      metrics: [
        { label: 'Capacité totale', value: '50 000 œufs' },
        { label: 'Fret combiné', value: 'Maritime LCL' },
        { label: 'Garantie usine', value: '24 mois' },
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const reviews = [
    {
      name: 'Patrick Mwamba',
      role: 'Directeur Général, Entreprise BTP Kinshasa',
      location: 'Kinshasa (Gombe)',
      rating: 5,
      comment: '« Travailler avec CM Service a complètement sécurisé nos approvisionnements en Chine. Le fait d\'avoir une équipe physique à Guangzhou qui vérifie les marchandises avant le chargement nous évite toutes les mauvaises surprises. Le dédouanement à Matadi a été fluide et rapide. »',
      date: 'Février 2026',
    },
    {
      name: 'Chen Weidong (陈总)',
      role: 'Directeur Commercial, Société d\'Export Guangdong',
      location: 'Guangzhou',
      rating: 5,
      comment: '« CM Service est notre transitaire exclusif pour toutes les livraisons vers la RDC. Leur maîtrise des exigences douanières locales (FERI, OCC, DGDA) et leur réactivité en font le partenaire le plus fiable du corridor Guangzhou-Kinshasa. »',
      date: 'Janvier 2026',
    },
    {
      name: 'Élodie Tshilombo',
      role: 'Gérante de Boutiques Prêt-à-porter & Cosmétiques',
      location: 'Kinshasa (Marché Central)',
      rating: 5,
      comment: '« Le groupage maritime LCL de CM Service est parfait pour les commerçants. Mes colis arrivent intacts, bien étiquetés et je n\'ai aucun souci de douane. Les tarifs au CBM sont très transparents et sans frais cachés. »',
      date: 'Mars 2026',
    },
  ];

  return (
    <section id="cases" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>{currentLang === 'zh' ? '成功案例与客户信赖' : currentLang === 'en' ? 'CASE STUDIES & VERIFIED REVIEWS' : 'RÉALISATIONS & ÉTUDES DE CAS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display">
              {currentLang === 'zh' 
                ? '中刚跨境物流实战成果' 
                : currentLang === 'en' 
                ? 'Proven Cross-Border Results for Enterprises' 
                : 'La preuve par les faits : nos opérations réussies'}
            </h2>
            <p className="mt-3 text-slate-600 text-base font-body leading-[1.7]">
              {currentLang === 'zh'
                ? '无论大型工程采购还是常规散货拼箱，我们始终保持严谨的品控与高效交付标准。'
                : currentLang === 'en'
                ? 'From major infrastructure procurement to commercial cargo consolidation, we deliver excellence.'
                : 'Découvrez comment nous aidons entreprises, industriels et importateurs à sécuriser leurs flux Chine-RDC.'}
            </p>
          </div>

          {/* Minimalist Switcher Pills */}
          <div className="flex items-center bg-slate-200/70 p-1.5 rounded-2xl self-start">
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'cases'
                  ? 'bg-white text-[#0f172a] shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'zh' ? '实操案例' : currentLang === 'en' ? 'Case Studies' : 'Études de Cas'}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'reviews'
                  ? 'bg-white text-[#0f172a] shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'zh' ? '客户评价' : currentLang === 'en' ? 'Client Reviews' : 'Avis Vérifiés'}
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'cases' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image header with soft cool grading */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale-[25%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0f172a] backdrop-blur-xs shadow-soft flex items-center gap-1.5">
                          <Icon className="w-3 h-3 text-orange-600" />
                          <span>{item.category}</span>
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="text-xs font-medium text-slate-200 truncate">
                          {item.client}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0f172a] mb-2 font-display leading-snug group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-body">
                        {item.description}
                      </p>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                        {item.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <span className="block text-xs font-extrabold text-[#0f172a] font-display">
                              {m.value}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium leading-none block mt-0.5">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Projet Similaire ?</span>
                    <button
                      onClick={() => onOpenQuote(item.title)}
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Consulter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic font-body">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a] font-display">{rev.name}</h4>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                    <span className="text-[11px] text-slate-400 font-medium">{rev.location}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
