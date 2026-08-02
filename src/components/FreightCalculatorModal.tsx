import React, { useState } from 'react';
import { X, Calculator, Ship, Plane, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/content';

interface FreightCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteWithDetails: (details: string) => void;
}

export const FreightCalculatorModal: React.FC<FreightCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestQuoteWithDetails,
}) => {
  const [transportMode, setTransportMode] = useState<'maritime_lcl' | 'maritime_fcl20' | 'maritime_fcl40' | 'air_express' | 'air_cargo'>('maritime_lcl');
  const [weightKg, setWeightKg] = useState<number>(150);
  const [volumeCbm, setVolumeCbm] = useState<number>(1.5);
  const [cargoType, setCargoType] = useState<'general' | 'electronics' | 'clothing' | 'machinery'>('general');
  const [includeCustoms, setIncludeCustoms] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculation Logic
  const calculateEstimate = () => {
    let baseFreight = 0;
    let duration = '';
    let customsFee = 0;

    // Freight cost estimation
    switch (transportMode) {
      case 'maritime_lcl':
        // LCL: ~320$ per CBM, min 1 CBM
        const effectiveCbm = Math.max(1, volumeCbm);
        baseFreight = effectiveCbm * 320;
        duration = '45 à 60 Jours (Via Port de Matadi)';
        customsFee = effectiveCbm * 180;
        break;

      case 'maritime_fcl20':
        baseFreight = 4200;
        duration = '45 à 60 Jours (Conteneur Complet 20FT)';
        customsFee = 1600;
        break;

      case 'maritime_fcl40':
        baseFreight = 7200;
        duration = '45 à 60 Jours (Conteneur Complet 40FT HC)';
        customsFee = 2800;
        break;

      case 'air_express':
        // Express: ~10.5$ / kg
        baseFreight = weightKg * 10.5;
        duration = '4 à 7 Jours (Kinshasa N\'djili Airport)';
        customsFee = weightKg * 2.5;
        break;

      case 'air_cargo':
        // Cargo: ~7.5$ / kg
        baseFreight = weightKg * 7.5;
        duration = '7 à 12 Jours (Kinshasa N\'djili Airport)';
        customsFee = weightKg * 2.0;
        break;
    }

    // Cargo multiplier
    if (cargoType === 'electronics') {
      baseFreight *= 1.15;
    } else if (cargoType === 'machinery') {
      baseFreight *= 1.10;
    }

    const totalEstimate = baseFreight + (includeCustoms ? customsFee : 0);

    return {
      baseFreight: Math.round(baseFreight),
      customsFee: Math.round(customsFee),
      totalEstimate: Math.round(totalEstimate),
      duration,
    };
  };

  const estimate = calculateEstimate();

  const getTransportModeLabel = (mode: string) => {
    switch (mode) {
      case 'maritime_lcl': return 'Maritime LCL (Groupage $/CBM)';
      case 'maritime_fcl20': return 'Maritime Conteneur 20FT';
      case 'maritime_fcl40': return 'Maritime Conteneur 40FT HC';
      case 'air_express': return 'Aérien Express (4-7j)';
      case 'air_cargo': return 'Aérien Cargo (7-12j)';
      default: return mode;
    }
  };

  const getCargoTypeLabel = (cargo: string) => {
    switch (cargo) {
      case 'general': return 'Marchandises Générales (Textile, Chaussures, Divers)';
      case 'electronics': return 'Électronique & High-Tech (Téléphones, Pcs, Solaires)';
      case 'machinery': return 'Machines Industrielles & Couveuses';
      case 'clothing': return 'Matériaux de Construction & Finition';
      default: return cargo;
    }
  };

  const handleSendToWhatsApp = () => {
    const msg = `Bonjour CM SERVICE CO., LIMITED,

Je souhaite consulter vos tarifs officiels pour la simulation suivante :

🚢 *Mode d'Expédition:* ${getTransportModeLabel(transportMode)}
📦 *Type de Marchandise:* ${getCargoTypeLabel(cargoType)}
⚖️ *Poids Total:* ${weightKg} kg
📐 *Volume Total:* ${volumeCbm} m³ (CBM)
🛃 *Dédouanement Inclus:* ${includeCustoms ? 'Oui (DGDA / OCC)' : 'Non'}
⏱️ *Délai Estimé:* ${estimate.duration}

💵 *Frais Fret Transport:* $${estimate.baseFreight} USD
${includeCustoms ? `🏛️ *Formalités Douanières Est.:* $${estimate.customsFee} USD\n` : ''}💰 *ESTIMATION TOTALE:* $${estimate.totalEstimate} USD

Merci de me contacter pour la validation de mes tarifs et le tarif final.`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${encodedMsg}`, '_blank');
  };

  const handleApplyQuote = () => {
    handleSendToWhatsApp();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#021541] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#bb0019] flex items-center justify-center text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Simulateur & Tarif de Fret Chine ➔ RDC</h3>
              <p className="text-xs text-slate-300">Estimation instantanée Guangzhou / Matadi / Kinshasa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Mode of Transport Selection */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              1. Sélectionnez le Mode d'Expédition
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setTransportMode('maritime_lcl')}
                className={`p-3 rounded border text-left text-xs font-semibold flex flex-col gap-1 transition-all ${
                  transportMode === 'maritime_lcl'
                    ? 'border-[#bb0019] bg-red-50 text-[#021541] ring-2 ring-red-200'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-sky-700">
                  <Ship className="w-4 h-4" />
                  <span>Maritime LCL</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Groupage ($/CBM)</span>
              </button>

              <button
                type="button"
                onClick={() => setTransportMode('maritime_fcl20')}
                className={`p-3 rounded border text-left text-xs font-semibold flex flex-col gap-1 transition-all ${
                  transportMode === 'maritime_fcl20'
                    ? 'border-[#bb0019] bg-red-50 text-[#021541] ring-2 ring-red-200'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-sky-700">
                  <Ship className="w-4 h-4" />
                  <span>Conteneur 20FT</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Conteneur Dédié</span>
              </button>

              <button
                type="button"
                onClick={() => setTransportMode('maritime_fcl40')}
                className={`p-3 rounded border text-left text-xs font-semibold flex flex-col gap-1 transition-all ${
                  transportMode === 'maritime_fcl40'
                    ? 'border-[#bb0019] bg-red-50 text-[#021541] ring-2 ring-red-200'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-sky-700">
                  <Ship className="w-4 h-4" />
                  <span>Conteneur 40FT</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Grand Conteneur HC</span>
              </button>

              <button
                type="button"
                onClick={() => setTransportMode('air_express')}
                className={`p-3 rounded border text-left text-xs font-semibold flex flex-col gap-1 transition-all ${
                  transportMode === 'air_express'
                    ? 'border-[#bb0019] bg-red-50 text-[#021541] ring-2 ring-red-200'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Plane className="w-4 h-4" />
                  <span>Aérien Express</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Rapide (4-7j)</span>
              </button>

              <button
                type="button"
                onClick={() => setTransportMode('air_cargo')}
                className={`p-3 rounded border text-left text-xs font-semibold flex flex-col gap-1 transition-all ${
                  transportMode === 'air_cargo'
                    ? 'border-[#bb0019] bg-red-50 text-[#021541] ring-2 ring-red-200'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Plane className="w-4 h-4" />
                  <span>Aérien Cargo</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Économique (7-12j)</span>
              </button>
            </div>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Poids Total (kg)
              </label>
              <input
                type="number"
                min="1"
                value={weightKg}
                onChange={(e) => setWeightKg(Math.max(1, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm font-semibold text-[#021541]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Volume Total (CBM / m³)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={volumeCbm}
                onChange={(e) => setVolumeCbm(Math.max(0.1, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm font-semibold text-[#021541]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Type de Marchandise
              </label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm font-semibold text-[#021541]"
              >
                <option value="general">Marchandises Générales (Textile, Chaussures, Divers)</option>
                <option value="electronics">Électronique & High-Tech (Téléphones, Pcs, Solaires)</option>
                <option value="machinery">Machines Industrielles & Couveuses</option>
                <option value="clothing">Matériaux de Construction & Finition</option>
              </select>
            </div>

            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={includeCustoms}
                  onChange={(e) => setIncludeCustoms(e.target.checked)}
                  className="w-4 h-4 text-[#bb0019] rounded border-slate-300"
                />
                <span>Inclure l'estimation du dédouanement (DGDA / OCC)</span>
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#021541] text-white p-5 rounded-md space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
              <span>Délai d'acheminement estimé :</span>
              <span className="font-bold text-emerald-400">{estimate.duration}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div>
                <span>Frais de Transport Fret:</span>
                <span className="font-bold text-white block text-sm">${estimate.baseFreight} USD</span>
              </div>
              {includeCustoms && (
                <div>
                  <span>Formalités Douanières (Est.):</span>
                  <span className="font-bold text-white block text-sm">${estimate.customsFee} USD</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/15 flex items-end justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold block">ESTIMATION TOTALE INDICATIVE</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#bb0019]">
                  ${estimate.totalEstimate} <span className="text-xs text-slate-300 font-normal">USD</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleApplyQuote}
                className="bg-[#bb0019] hover:bg-[#990014] text-white px-5 py-3 rounded font-bold text-xs uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Consulter nos tarifs sur WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-400 leading-snug flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Les tarifs exacts dépendent de la valeur exacte déclarée et des nomenclatures douanières (HS Code) en RDC. Notre équipe à Guangzhou effectue un pesage gratuit à l'arrivée en entrepôt.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
