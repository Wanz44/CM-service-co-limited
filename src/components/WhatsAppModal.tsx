import React from 'react';
import { X, MessageSquare, Send, ExternalLink, PhoneCall, Check } from 'lucide-react';
import { COMPANY_CONTACT, COMPANY_LOGO } from '../data/content';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const preFilledMessages = [
    "Bonjour CM Service, je souhaite avoir des informations sur le fret maritime Chine ➔ Kinshasa.",
    "Bonjour CM Service, je recherche un accompagnement sourcing à Guangzhou pour acheter sur 1688 / Alibaba.",
    "Bonjour CM Service, je souhaite acheter un véhicule de marque chinoise (BYD, Chery, Geely, Sinotruk...).",
    "Bonjour CM Service, je souhaite une assistance dédouanement à Matadi / Kinshasa."
  ];

  const handleOpenWhatsApp = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-soft-xl max-w-md w-full border border-slate-200/90 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#0f172a] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto p-1 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <img
                src={COMPANY_LOGO}
                alt="CM SERVICE Logo"
                className="h-7 w-auto max-w-[80px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight font-display">WhatsApp Direct Desk</h3>
              <p className="text-[11px] text-slate-400">Guangzhou (Chine) ⇄ Kinshasa (RDC)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-slate-50 p-4 rounded border border-slate-200 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
            <div className="text-xs text-slate-700">
              <span className="font-bold text-[#021541] block">Agents commerciaux en ligne</span>
              <span>Disponibilité 7j/7 pour la RDC et la Chine.</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Choisissez un sujet de discussion rapide :
            </label>
            <div className="space-y-2">
              {preFilledMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(msg)}
                  className="w-full text-left p-3 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>"{msg}"</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#bb0019] group-hover:scale-110 transition-transform shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-center">
            <button
              onClick={() => handleOpenWhatsApp("Bonjour CM Service Co., Limited, j'ai une question générale.")}
              className="w-full bg-[#021541] hover:bg-[#1a2b56] text-white py-3 rounded font-bold text-xs uppercase flex items-center justify-center gap-2"
            >
              <span>Démarrer la discussion WhatsApp</span>
              <Send className="w-3.5 h-3.5 text-red-400" />
            </button>

            <a
              href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone}`}
              className="text-xs text-slate-500 hover:text-[#021541] font-semibold flex items-center justify-center gap-1 py-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Ou appeler directement: {COMPANY_CONTACT.guangzhouOffice.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
