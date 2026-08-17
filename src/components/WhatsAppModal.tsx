import React from 'react';
import { X, MessageSquare, Send, ExternalLink, PhoneCall, Check } from 'lucide-react';
import { COMPANY_CONTACT, COMPANY_LOGO } from '../data/content';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedDesk, setSelectedDesk] = React.useState<'kinshasa' | 'guangzhou'>('kinshasa');

  const preFilledMessages = [
    "Bonjour CM Service, je souhaite avoir des informations sur le fret maritime Chine ➔ Kinshasa.",
    "Bonjour CM Service, je recherche un accompagnement sourcing à Guangzhou pour acheter sur 1688 / Alibaba.",
    "Bonjour CM Service, je souhaite acheter un véhicule de marque chinoise (BYD, Chery, Geely, Sinotruk...).",
    "Bonjour CM Service, je souhaite une assistance dédouanement à Matadi / Kinshasa."
  ];

  const currentWaNumber = selectedDesk === 'kinshasa' 
    ? (COMPANY_CONTACT.whatsappKinshasa || '243844584963')
    : COMPANY_CONTACT.whatsapp;

  const handleOpenWhatsApp = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${currentWaNumber}?text=${encodedMsg}`, '_blank');
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
          {/* Desk Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Sélectionnez votre guichet WhatsApp :
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedDesk('kinshasa')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  selectedDesk === 'kinshasa'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇨🇩</span>
                  <span>Kinshasa Desk</span>
                </div>
                <span className="text-[10px] text-slate-500 font-normal">{COMPANY_CONTACT.kinshasaOffice.whatsapp}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDesk('guangzhou')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  selectedDesk === 'guangzhou'
                    ? 'border-orange-600 bg-orange-50 text-orange-900 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇨🇳</span>
                  <span>Guangzhou Desk</span>
                </div>
                <span className="text-[10px] text-slate-500 font-normal">{COMPANY_CONTACT.guangzhouOffice.phone}</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0"></div>
            <div className="text-xs text-slate-700">
              <span className="font-bold text-[#0f172a] block">
                {selectedDesk === 'kinshasa' ? 'Équipe Kinshasa connectée' : 'Équipe Guangzhou connectée'}
              </span>
              <span className="text-slate-500 text-[11px]">
                {selectedDesk === 'kinshasa' ? 'Assistance locale & dédouanement 7j/7' : 'Centrale d\'achats & logistique Chine'}
              </span>
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
                  className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="leading-snug">"{msg}"</span>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-600 group-hover:scale-110 transition-transform shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5 text-center">
            <button
              onClick={() => handleOpenWhatsApp("Bonjour CM Service Co., Limited, j'ai une question générale.")}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-soft transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>
                {selectedDesk === 'kinshasa' ? 'Discuter avec Kinshasa (+243)' : 'Discuter avec Guangzhou (+86)'}
              </span>
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-semibold pt-1">
              <a
                href={`tel:${COMPANY_CONTACT.kinshasaOffice.phone.replace(/\s+/g, '')}`}
                className="hover:text-blue-600 flex items-center gap-1 transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-blue-600" />
                <span>Kinshasa: {COMPANY_CONTACT.kinshasaOffice.phone}</span>
              </a>
              <span>•</span>
              <a
                href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone.replace(/\s+/g, '')}`}
                className="hover:text-orange-600 flex items-center gap-1 transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-orange-600" />
                <span>GZ: {COMPANY_CONTACT.guangzhouOffice.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
