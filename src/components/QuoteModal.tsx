import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { QuoteFormData } from '../types';
import { COMPANY_CONTACT } from '../data/content';

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
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    type: 'maritime',
    origin: 'Guangzhou (Chine)',
    destination: 'Kinshasa (Gombe, RDC)',
    weight: '',
    volume: '',
    description: initialDetails,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'sourcing': return "Centrale d'achats / Sourcing Chine";
      case 'vehicules_chinois': return "Achat & Vente de Véhicules (BYD, Geely, Chery, Sinotruk...)";
      case 'marques_chinoises': return "Achat & Vente de Marques Chinoises";
      case 'maritime': return "Fret Maritime (LCL / FCL)";
      case 'aerien': return "Fret Aérien Express";
      case 'douane': return "Transit & Dédouanement Matadi/Kinshasa";
      case 'autre': return "Business Facilities & Autres";
      default: return type;
    }
  };

  const buildWhatsAppMessage = () => {
    return `Bonjour CM SERVICE CO., LIMITED,

Je souhaite vous soumettre une demande de cotation & projet :

👤 *Nom complet:* ${formData.name || 'Non précisé'}
📞 *Téléphone / WhatsApp:* ${formData.phone || 'Non précisé'}
📧 *Email:* ${formData.email || 'Non renseigné'}
📂 *Type d'Opération:* ${getTypeLabel(formData.type)}
🛫 *Ville de Départ:* ${formData.origin || 'Guangzhou (Chine)'}
🛬 *Destination RDC:* ${formData.destination || 'Kinshasa, RDC'}
📝 *Description du Projet / Marchandises:*
${formData.description || 'Aucune description spécifique'}`;
  };

  const sendToWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${encodedMsg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Automatically open WhatsApp with all filled form details
    sendToWhatsApp();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#021541] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#bb0019] bg-white px-2 py-0.5 rounded uppercase tracking-wider">
              ETUDE SUR-MESURE
            </span>
            <h3 className="text-xl font-bold tracking-tight mt-1">Demande de Cotation & Projet</h3>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#021541]">Demande Transmise avec Succès !</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Merci <span className="font-bold text-slate-800">{formData.name}</span>. Un agent commercial de notre bureau de Guangzhou ou Kinshasa traitera votre dossier dans un délai de 2 heures ouvrées.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={onOpenWhatsApp}
                  className="bg-[#bb0019] hover:bg-[#990014] text-white px-6 py-3 rounded font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Accélérer par WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded font-bold text-xs uppercase"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean-Marc Kabasele"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+243 81 000 0000"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Professionnel
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@entreprise.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Type d'Opération
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  >
                    <option value="sourcing">Centrale d'achats / Sourcing Chine</option>
                    <option value="vehicules_chinois">Achat & Vente de Véhicules Chinois (BYD, Geely, Chery, Sinotruk...)</option>
                    <option value="marques_chinoises">Achat & Vente de marques chinoises (Xiaomi, Huawei, etc.)</option>
                    <option value="maritime">Fret Maritime (LCL / FCL)</option>
                    <option value="aerien">Fret Aérien Express</option>
                    <option value="douane">Transit & Dédouanement Matadi/Kinshasa</option>
                    <option value="autre">Business Facilities & Autres</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Ville de Départ
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Destination Finale RDC
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Description du projet / Marchandises
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Détails des articles (ex: 20 couveuses automatiques, 500kg carrelage, cartons vêtement...)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-[#021541]"
                ></textarea>
              </div>

              <div className="bg-slate-100 p-3 rounded flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidentialité et sécurité garanties par CM Service Co.</span>
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-[#bb0019] hover:bg-[#990014] text-white px-6 py-3 rounded font-bold text-xs uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Démarrer mon projet sur WhatsApp</span>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
