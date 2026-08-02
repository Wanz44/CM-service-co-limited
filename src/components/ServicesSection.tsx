import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, ShoppingBag, TrendingUp, Users, Ship, FileCheck, Truck, Store, Car } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#bb0019]" />;
    case 'Car': return <Car className="w-5 h-5 text-[#bb0019]" />;
    case 'Store': return <Store className="w-5 h-5 text-[#bb0019]" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#bb0019]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#bb0019]" />;
    case 'Ship': return <Ship className="w-5 h-5 text-[#bb0019]" />;
    case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#bb0019]" />;
    case 'Truck': return <Truck className="w-5 h-5 text-[#bb0019]" />;
    default: return <Ship className="w-5 h-5 text-[#bb0019]" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onSelectService }) => {
  const t = translations[currentLang];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold text-[#bb0019] bg-red-50 px-3 py-1 rounded uppercase tracking-wider inline-block mb-3 border border-red-100">
            {t.servicesSection.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#021541] tracking-tight relative inline-block pb-3 block">
            {t.servicesSection.title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#bb0019] rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-lg leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-md border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/95 p-2 rounded-full shadow-sm">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#021541] mb-2.5 group-hover:text-[#bb0019] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#bb0019] text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  <span>{t.servicesSection.btnDetail}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

