import React, { useState } from 'react';
import { Car, ShieldCheck, Truck, CheckCircle2, ArrowRight, Sparkles, Fuel, Zap, FileCheck, Layers } from 'lucide-react';
import { Language } from '../types';

interface VehiclesSectionProps {
  currentLang: Language;
  onOpenQuote: (details?: string) => void;
  onOpenWhatsApp: () => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({
  currentLang,
  onOpenQuote,
  onOpenWhatsApp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'suv' | 'trucks' | 'electric'>('all');

  const vehicleModels = [
    {
      id: 'byd-song',
      name: 'BYD Song Plus EV / DM-i',
      brand: 'BYD',
      category: 'electric',
      type: 'SUV Électrique & Hybride',
      badge: 'Bestseller 2026',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      specs: 'Autonomie 520 km • Caméra 360° • Climatisation tropicalisée',
      delivery: 'Transit Ro-Ro Matadi (35-45j)',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'sinotruk-howo',
      name: 'Sinotruk HOWO 371 / 420 HP',
      brand: 'Sinotruk',
      category: 'trucks',
      type: 'Camion Benne BTP & Minier (8x4 / 6x4)',
      badge: 'Robustesse RDC',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      specs: 'Charge utile 30-40T • Moteur Weichai Euro 2/3 • Suspension renforcée',
      delivery: 'Livraison clé en main Matadi / Kinshasa',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'geely-monjaro',
      name: 'Geely Monjaro / Coolray 4WD',
      brand: 'Geely',
      category: 'suv',
      type: 'SUV Haut de Gamme Essence / Hybride',
      badge: 'Prestige & Confort',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      specs: 'Moteur 2.0 Turbo 238ch • Sellerie Cuir • Écrans panoramiques',
      delivery: 'Conteneur 40\' HQ sécurisé',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'chery-tiggo',
      name: 'Chery Tiggo 8 Pro Max',
      brand: 'Chery',
      category: 'suv',
      type: 'SUV 7 Places Familial & VIP',
      badge: 'Rapport Qualité/Prix',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      specs: '7 places spacieuses • Transmission intégrale • Aide à la conduite ADAS',
      delivery: 'Dédouanement DGDA & Plaque RDC',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicleModels 
    : vehicleModels.filter(v => v.category === selectedCategory);

  return (
    <section id="vehicules" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Car className="w-3.5 h-3.5" />
              <span>Pôle Automobile & Engins Chinois</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
              {currentLang === 'zh' 
                ? '中国品牌汽车与工程机械直供刚果（金）' 
                : currentLang === 'en'
                ? 'Chinese Vehicles & Heavy Machinery to DR Congo'
                : 'Importation Directe de Véhicules & Engins Chinois'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              {currentLang === 'zh'
                ? '直连比亚迪、吉利、奇瑞、重汽等一线中国主机厂，为您提供采购、验车、滚装/集装箱海运及金沙萨一站式清关上牌服务。'
                : currentLang === 'en'
                ? 'Direct access to leading Chinese manufacturers (BYD, Geely, Chery, Sinotruk). We handle purchase, inspection, maritime shipping and DRC customs clearance.'
                : 'Accédez directement aux constructeurs automobiles chinois (BYD, Geely, Chery, Changan, Sinotruk). Nous gérons l\'achat usine, l\'inspection mécanique, le fret maritime Ro-Ro/conteneur et le dédouanement complet.'}
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200 text-xs font-bold shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#0f172a] shadow-soft font-extrabold'
                  : 'text-slate-600 hover:text-[#0f172a]'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setSelectedCategory('electric')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                selectedCategory === 'electric'
                  ? 'bg-white text-[#0f172a] shadow-soft font-extrabold'
                  : 'text-slate-600 hover:text-[#0f172a]'
              }`}
            >
              <Zap className="w-3 h-3 text-emerald-500" />
              <span>Électriques / Hybrides</span>
            </button>
            <button
              onClick={() => setSelectedCategory('suv')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'suv'
                  ? 'bg-white text-[#0f172a] shadow-soft font-extrabold'
                  : 'text-slate-600 hover:text-[#0f172a]'
              }`}
            >
              SUV & Berlines
            </button>
            <button
              onClick={() => setSelectedCategory('trucks')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'trucks'
                  ? 'bg-white text-[#0f172a] shadow-soft font-extrabold'
                  : 'text-slate-600 hover:text-[#0f172a]'
              }`}
            >
              Camions BTP
            </button>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#f8fafc] rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${vehicle.badgeColor}`}>
                    {vehicle.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-xl">
                  {vehicle.brand}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-[#0f172a] font-display mb-1 group-hover:text-orange-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    {vehicle.type}
                  </p>
                  <div className="text-xs text-slate-600 space-y-1.5 mb-4 bg-white p-3 rounded-2xl border border-slate-200/60">
                    <p className="leading-relaxed font-medium">
                      {vehicle.specs}
                    </p>
                    <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{vehicle.delivery}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(`Demande de cotation véhicule : ${vehicle.name} (${vehicle.brand}) - Port Matadi / Kinshasa`)}
                  className="w-full py-2.5 px-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-soft transition-colors cursor-pointer"
                >
                  <span>Demander une Cotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner for Vehicle Import */}
        <div className="bg-[#0f172a] text-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-base sm:text-lg font-display text-white">
                Besoin d'un modèle spécifique ou d'une flotte d'engins miniers ?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-body">
                Nous recherchons directement en concession officielle à Guangzhou et Shenzhen selon votre cahier des charges avec rapport d'expertise vidéo.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenQuote("Recherche spécifique de véhicule ou flotte d'engins")}
              className="flex-1 sm:flex-none py-3 px-5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-soft transition-colors cursor-pointer whitespace-nowrap"
            >
              Devis Véhicule Spécifique
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="flex-1 sm:flex-none py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              WhatsApp Auto
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
