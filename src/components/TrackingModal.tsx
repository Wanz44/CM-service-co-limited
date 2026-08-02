import React, { useState } from 'react';
import { X, Search, PackageCheck, Ship, Plane, CheckCircle2, Clock, MapPin, Truck } from 'lucide-react';
import { MOCK_SHIPMENTS } from '../data/content';
import { TrackingShipment } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [searchCode, setSearchCode] = useState('CM-88392-ZH');
  const [activeShipment, setActiveShipment] = useState<TrackingShipment | null>(MOCK_SHIPMENTS['CM-88392-ZH']);
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    if (MOCK_SHIPMENTS[cleanCode]) {
      setActiveShipment(MOCK_SHIPMENTS[cleanCode]);
    } else if (cleanCode.length > 3) {
      // Dynamic generated tracking for custom codes
      setActiveShipment({
        trackingNumber: cleanCode,
        sender: 'Fournisseur Chine (Guangzhou)',
        destination: 'Kinshasa Dépôt CM Service',
        carrier: 'CM Service Logistique',
        mode: cleanCode.includes('AIR') ? 'Aérien Express' : 'Fret Maritime 20FT',
        weightKg: 280,
        volumeCbm: 3.2,
        statusText: 'Colis en cours de transit maritime vers la RDC',
        estimatedDelivery: '12 Août 2026',
        timeline: [
          { status: 'Réceptionné à l\'entrepôt Guangzhou', location: 'Guangzhou Yuexiu', timestamp: '24 Juillet 2026', completed: true },
          { status: 'Embarquement conteneur maritime', location: 'Port de Guangzhou', timestamp: '27 Juillet 2026', completed: true },
          { status: 'En traversée maritime (Océan)', location: 'Transit International', timestamp: '01 Août 2026', completed: true, active: true },
          { status: 'Arrivée au port de Matadi & Dédouanement', location: 'Matadi (RDC)', timestamp: 'Est. 08 Août 2026', completed: false },
          { status: 'Livraison finale Kinshasa', location: 'Gombe, Kinshasa', timestamp: 'Est. 12 Août 2026', completed: false }
        ]
      });
    } else {
      setActiveShipment(null);
    }
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#021541] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#bb0019] flex items-center justify-center text-white">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Suivi de Colis en Temps Réel</h3>
              <p className="text-xs text-slate-300">Guangzhou ⇄ Matadi ⇄ Kinshasa</p>
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
        <div className="p-6">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Entrez votre numéro de suivi (Ex: CM-88392-ZH ou CM-99120-AIR)
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  placeholder="N° de Bordereau ou Conteneur..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541] font-semibold focus:outline-hidden focus:border-[#021541]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#bb0019] hover:bg-[#990014] text-white px-6 py-3 rounded font-bold text-sm transition-all shadow-xs"
              >
                Rechercher
              </button>
            </div>
            {/* Quick Demo Code Buttons */}
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
              <span>Exemples de test :</span>
              <button
                type="button"
                onClick={() => { setSearchCode('CM-88392-ZH'); handleSearch({ preventDefault: () => {} } as any); }}
                className="text-[#021541] underline font-semibold hover:text-[#bb0019]"
              >
                CM-88392-ZH (Maritime)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => { setSearchCode('CM-99120-AIR'); handleSearch({ preventDefault: () => {} } as any); }}
                className="text-[#021541] underline font-semibold hover:text-[#bb0019]"
              >
                CM-99120-AIR (Aérien)
              </button>
            </div>
          </form>

          {/* Results Display */}
          {activeShipment ? (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-md p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold">Numéro de Suivi</span>
                    <h4 className="text-lg font-extrabold text-[#021541]">{activeShipment.trackingNumber}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 uppercase font-semibold">Mode de transport</span>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#bb0019]">
                      {activeShipment.mode.includes('Aérien') ? <Plane className="w-4 h-4" /> : <Ship className="w-4 h-4" />}
                      <span>{activeShipment.mode}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Expéditeur</span>
                    <span className="font-bold text-slate-800">{activeShipment.sender}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Destination</span>
                    <span className="font-bold text-slate-800">{activeShipment.destination}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Poids / Volume</span>
                    <span className="font-bold text-slate-800">{activeShipment.weightKg} kg / {activeShipment.volumeCbm} CBM</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Livraison Estimée</span>
                    <span className="font-bold text-emerald-700">{activeShipment.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded p-4 flex items-center gap-3 text-emerald-900">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold block">Statut Actuel:</span>
                  <span>{activeShipment.statusText}</span>
                </div>
              </div>

              {/* Timeline Steps */}
              <div>
                <h5 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-4">
                  Historique du suivi de cargaison
                </h5>
                <div className="space-y-4 relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {activeShipment.timeline.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <div className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] ${
                        step.completed 
                          ? step.active 
                            ? 'bg-[#bb0019] ring-4 ring-red-100' 
                            : 'bg-emerald-500' 
                          : 'bg-slate-300'
                      }`}>
                        {step.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </div>
                      <div className="flex-1 bg-white p-3 rounded border border-slate-100 shadow-2xs">
                        <div className="flex justify-between items-start gap-2">
                          <h6 className={`text-sm font-semibold ${step.active ? 'text-[#bb0019]' : 'text-slate-800'}`}>
                            {step.status}
                          </h6>
                          <span className="text-[11px] text-slate-400 whitespace-nowrap">{step.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{step.location}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : searched ? (
            <div className="text-center py-10 bg-slate-50 rounded border border-dashed border-slate-300">
              <PackageCheck className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">Aucune expédition trouvée pour "{searchCode}"</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Veuillez vérifier votre bordereau d'expédition ou contacter notre service client à Guangzhou par WhatsApp.
              </p>
            </div>
          ) : null}

          {/* Bottom Action */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Des questions sur ce colis ?</span>
            <button
              onClick={() => { onClose(); onOpenQuote(); }}
              className="text-xs font-bold text-[#021541] hover:text-[#bb0019] underline"
            >
              Contactez un agent de suivi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
