import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header with image */}
        <div className="relative h-60 bg-[#021541] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021541] via-[#021541]/70 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#bb0019] mb-2">
              SERVICE ARCO IRIS RDC
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">
              Engagements & Caractéristiques clés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded border border-slate-100 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#bb0019] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee badge */}
          <div className="bg-blue-50 border border-blue-200 rounded p-4 flex items-center gap-3 text-blue-900 text-xs">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Toutes nos opérations font l'objet d'un contrat écrit clair et d'une facture proforma officielle délivrée par CM Service Co., Limited (Guangzhou / Kinshasa).</span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestService(`Demande d'information: ${service.title}`);
              }}
              className="bg-[#021541] hover:bg-[#1a2b56] text-white px-6 py-3 rounded text-sm font-bold flex items-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              <span>Demander ce service</span>
              <ArrowRight className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
