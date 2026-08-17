import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT, COMPANY_LOGO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: string;
  onOpenWhatsApp: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialDetails = '',
  onOpenWhatsApp,
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState('maritime');
  const [message, setMessage] = useState(initialDetails);
  const [consent, setConsent] = useState(true);

  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    { value: 'maritime', label: 'Fret Maritime (Conteneur FCL / Groupage LCL)' },
    { value: 'aerien', label: 'Fret Aérien Express (Chine ➔ Kinshasa)' },
    { value: 'vehicules', label: 'Achat & Importation Véhicules Chinois' },
    { value: 'sourcing', label: 'Centrale d\'achats & Sourcing Usines (1688/Canton)' },
    { value: 'douane', label: 'Dédouanement DGDA & Certificat FERI' },
  ];

  const validate = () => {
    const errs: { name?: string; whatsapp?: string } = {};
    if (!name.trim()) {
      errs.name = 'Veuillez renseigner votre nom complet';
    }
    if (!whatsapp.trim()) {
      errs.whatsapp = 'Veuillez saisir votre numéro WhatsApp';
    } else if (whatsapp.trim().length < 6) {
      errs.whatsapp = 'Numéro de téléphone trop court';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getServiceLabel = (val: string) => {
    const found = serviceOptions.find(opt => opt.value === val);
    return found ? found.label : val;
  };

  const buildWhatsAppUrl = () => {
    const text = `Bonjour CM SERVICE CO., LIMITED,

Je souhaite faire une demande de cotation :
👤 *Nom:* ${name}
📞 *WhatsApp:* ${whatsapp}
📦 *Service souhaité:* ${getServiceLabel(service)}
${message ? `📝 *Message:* ${message}` : ''}`;

    return `https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Open WhatsApp directly in a new tab
    const url = buildWhatsAppUrl();
    window.open(url, '_blank');

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setWhatsapp('');
    setMessage('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-soft-xl max-w-lg w-full border border-slate-200/80 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 relative">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Ecran de Succès & Pont WhatsApp */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-in zoom-in-50 duration-300">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#0f172a] font-display">
                Demande Transmise !
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Merci <strong className="text-[#0f172a]">{name}</strong>. Votre demande a été enregistrée avec succès.
              </p>
            </div>

            {/* Pont WhatsApp direct */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>Conseiller en ligne immédiatement disponible</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pour recevoir votre cotation chiffrée sous 15 minutes, poursuivez l'échange sur WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-soft active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Continuer la conversation sur WhatsApp</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          /* Formulaire de Cotation (4 champs max avec floating labels) */
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Réponse en moins de 2h</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] tracking-tight font-display">
                  Demander un Devis
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-body">
                  Remplissez ce formulaire en 30 secondes pour obtenir une étude chiffrée.
                </p>
              </div>
              <div className="h-10 w-auto p-1 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_LOGO}
                  alt="CM SERVICE Logo"
                  className="h-8 w-auto max-w-[70px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Champ 1: Nom complet (Floating Label Effect) */}
              <div className="relative">
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-sm text-[#0f172a] bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all duration-150"
                />
                <label
                  htmlFor="quote-name"
                  className="absolute text-xs text-slate-500 duration-150 transform -translate-y-2.5 scale-75 top-4 z-10 origin-left left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-orange-600 font-medium pointer-events-none"
                >
                  Nom complet *
                </label>
                {errors.name && (
                  <p className="text-[11px] font-semibold text-rose-600 mt-1 pl-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Champ 2: Numéro WhatsApp (Clavier numérique auto) */}
              <div className="relative">
                <input
                  id="quote-whatsapp"
                  type="tel"
                  inputMode="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                  }}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-sm text-[#0f172a] bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all duration-150"
                />
                <label
                  htmlFor="quote-whatsapp"
                  className="absolute text-xs text-slate-500 duration-150 transform -translate-y-2.5 scale-75 top-4 z-10 origin-left left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-orange-600 font-medium pointer-events-none"
                >
                  Numéro WhatsApp (avec indicatif ex: +243...) *
                </label>
                {errors.whatsapp && (
                  <p className="text-[11px] font-semibold text-rose-600 mt-1 pl-1">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Champ 3: Service souhaité (Menu déroulant) */}
              <div>
                <label htmlFor="quote-service" className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                  Service souhaité *
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-[#0f172a] bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all duration-150 font-medium cursor-pointer"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Champ 4: Message (Facultatif) */}
              <div className="relative">
                <textarea
                  id="quote-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-sm text-[#0f172a] bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all duration-150 resize-none"
                />
                <label
                  htmlFor="quote-message"
                  className="absolute text-xs text-slate-500 duration-150 transform -translate-y-2.5 scale-75 top-4 z-10 origin-left left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-orange-600 font-medium pointer-events-none"
                >
                  Votre message ou détails de marchandises (facultatif)
                </label>
              </div>

              {/* Case de consentement discrète */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="quote-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-slate-300"
                />
                <label htmlFor="quote-consent" className="text-[11px] text-slate-500 leading-snug cursor-pointer select-none">
                  J'accepte que mes données soient utilisées pour le traitement de ma cotation par CM Service Co., Ltd.
                </label>
              </div>

              {/* Bouton CTA d'envoi en Orange Cuivré */}
              <button
                type="submit"
                disabled={!consent}
                className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-lg active:scale-98 transition-all cursor-pointer mt-3"
              >
                <span>Envoyer ma demande</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Données protégées • Devis gratuit sans engagement</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
