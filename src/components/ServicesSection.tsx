import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, ShoppingBag, Ship, Plane, ShieldCheck, Car, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onSelectService }) => {
  const t = translations[currentLang];

  // Map each service to Bento attributes
  const bentoServices = [
    {
      id: 'maritime',
      colSpan: 'lg:col-span-8',
      service: SERVICES_DATA[0],
      icon: Ship,
      iconBg: 'bg-blue-50 text-blue-700',
      badge: 'Ligne Principale',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      metric: '35 - 45j',
      metricLabel: 'Transit Maritime Matadi',
      features: ['Conteneurs FCL 20\' & 40\' HQ', 'Groupage Maritime LCL sécurisé', 'Traçabilité BL & Scellés certifiés'],
    },
    {
      id: 'aerien',
      colSpan: 'lg:col-span-4',
      service: SERVICES_DATA[1] || SERVICES_DATA[0],
      icon: Plane,
      iconBg: 'bg-orange-50 text-orange-600',
      badge: 'Express',
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      metric: '4 - 7j',
      metricLabel: 'Arrivée Kinshasa N\'djili',
      features: ['Échantillons & Pièces urgentes', 'Vols hebdomadaires réguliers', 'Prise en charge aéroportuaire'],
    },
    {
      id: 'sourcing',
      colSpan: 'lg:col-span-4',
      service: SERVICES_DATA[2] || SERVICES_DATA[0],
      icon: ShoppingBag,
      iconBg: 'bg-amber-50 text-amber-700',
      badge: 'Prix Usine',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      metric: '100%',
      metricLabel: 'Contrôle Qualité Yuexiu',
      features: ['Négociation 1688 / Canton', 'Paiement sécurisé RMB / USD', 'Inspection photo & vidéo avant départ'],
    },
    {
      id: 'vehicules',
      colSpan: 'lg:col-span-4',
      service: SERVICES_DATA[3] || SERVICES_DATA[0],
      icon: Car,
      iconBg: 'bg-indigo-50 text-indigo-700',
      badge: 'Constructeurs',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      metric: 'Clé en main',
      metricLabel: 'Livraison Concessionnaire',
      features: ['Véhicules neufs (BYD, Chery)', 'Engins & Camions BTP Sinotruk', 'Certificats de conformité & Transit'],
    },
    {
      id: 'douane',
      colSpan: 'lg:col-span-4',
      service: SERVICES_DATA[4] || SERVICES_DATA[0],
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-700',
      badge: 'Conformité DGDA',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      metric: 'Guichet 100%',
      metricLabel: 'FERI, BIVAC & OCC',
      features: ['Certificat FERI obligatoire', 'Dédouanement légal sans blocage', 'Livraison directe à votre dépôt Gombe'],
    },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{t.servicesSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
            {t.servicesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-[1.7] font-body">
            {t.servicesSection.subtitle}
          </p>
        </motion.div>

        {/* Bento Box Grid with Framer Motion transitions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoServices.map((bento) => {
            const Icon = bento.icon;
            return (
              <motion.div
                key={bento.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                onClick={() => onSelectService(bento.service)}
                className={`${bento.colSpan} bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-colors flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                {/* Background subtle hover glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${bento.iconBg} flex items-center justify-center font-bold shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${bento.badgeColor}`}>
                        {bento.badge}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2.5 group-hover:text-orange-600 transition-colors font-display">
                    {bento.service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-body">
                    {bento.service.shortDescription}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {bento.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-lg font-bold text-[#0f172a] block leading-none font-display">
                      {bento.metric}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">
                      {bento.metricLabel}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-orange-600 group-hover:underline flex items-center gap-1">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
