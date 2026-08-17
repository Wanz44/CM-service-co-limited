import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  Globe
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/content';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  onOpenWhatsApp: () => void;
  onOpenQuote: (details?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenWhatsApp,
  onOpenQuote,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    hub: 'both',
    service: 'fret_maritime',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Direct WhatsApp message formatting for instant conversion
    const hubText = formData.hub === 'guangzhou' 
      ? '🇨🇳 Hub Guangzhou' 
      : formData.hub === 'kinshasa' 
      ? '🇨🇩 Hub Kinshasa' 
      : '🇨🇳🇨🇩 Chine & RDC';

    const serviceLabels: Record<string, string> = {
      fret_maritime: 'Fret Maritime (Conteneur / Groupage LCL)',
      fret_aerien: 'Fret Aérien Express',
      sourcing: 'Centrale d\'achats & Négociation Usines (1688/Alibaba)',
      vehicules: 'Importation Véhicule Chinois (BYD, Chery, Sinotruk)',
      douane: 'Dédouanement DGDA & Attestation FERI',
      autre: 'Autre demande logistique'
    };

    const serviceName = serviceLabels[formData.service] || formData.service;

    const whatsappMessage = encodeURIComponent(
      `*NOUVEAU MESSAGE DE CONTACT - CM SERVICE*\n\n` +
      `👤 *Nom:* ${formData.fullName}\n` +
      `📞 *Téléphone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Non renseigné'}\n` +
      `📍 *Hub concerné:* ${hubText}\n` +
      `📦 *Service:* ${serviceName}\n` +
      `💬 *Message:* ${formData.message || 'Demande de prise de contact direct'}\n\n` +
      `_Envoyé depuis le site officiel CM Service Co._`
    );

    window.open(`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80 relative">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-orange-600" />
            <span>
              {currentLang === 'zh' ? '联系我们 • 中刚直通' : currentLang === 'en' ? 'Contact & Direct Hubs' : 'Contact & Bureaux Directs'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
            {currentLang === 'zh'
              ? '随时联系广州与金沙萨常驻团队'
              : currentLang === 'en'
              ? 'Reach Our Dedicated Teams in Guangzhou & Kinshasa'
              : 'Échangez directement avec nos équipes à Guangzhou et Kinshasa'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            {currentLang === 'zh'
              ? '无论是采购验厂、集运仓储、整柜拼箱海运，还是金沙萨清关派送，我们的中法双语专员竭诚为您服务。'
              : currentLang === 'en'
              ? 'For factory sourcing, warehouse consolidation, ocean/air shipping, or DRC customs clearance, our bilingual experts are here to assist.'
              : 'Une question sur vos expéditions, une commande d\'usine en Chine ou un dédouanement à Kinshasa ? Nos conseillers vous répondent 7j/7.'}
          </p>
        </div>

        {/* 2 Main Hubs Cards (Guangzhou 🇨🇳 & Kinshasa 🇨🇩) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* HUB 1: GUANGZHOU (CHINE) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center font-bold text-xl shadow-xs">
                    🇨🇳
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 block">
                      Centrale Opérationnelle Asie
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0f172a] font-display">
                      Hub de Guangzhou (Chine)
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Entrepôt Ouvert
                </span>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 mb-6">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block mb-0.5">Adresse de l'entrepôt & bureaux :</span>
                    <p className="text-slate-600 leading-relaxed font-body">
                      {COMPANY_CONTACT.guangzhouOffice.address}
                    </p>
                    <p className="text-slate-400 text-xs mt-1 font-mono">
                      广州市越秀区广园西路18号九龙商贸城5F08
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.guangzhouOffice.address, 'gz-addr')}
                    className="text-slate-400 hover:text-orange-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier l'adresse"
                  >
                    {copiedField === 'gz-addr' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WeChat */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block">Téléphone & WeChat :</span>
                    <a href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone}`} className="text-slate-700 font-semibold hover:text-orange-600 transition-colors">
                      {COMPANY_CONTACT.guangzhouOffice.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.guangzhouOffice.phone, 'gz-phone')}
                    className="text-slate-400 hover:text-orange-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier le numéro"
                  >
                    {copiedField === 'gz-phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block">Email Opérations & Achats :</span>
                    <a href={`mailto:${COMPANY_CONTACT.guangzhouOffice.email}`} className="text-slate-700 font-semibold hover:text-orange-600 transition-colors">
                      {COMPANY_CONTACT.guangzhouOffice.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.guangzhouOffice.email, 'gz-email')}
                    className="text-slate-400 hover:text-orange-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copiedField === 'gz-email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl bg-orange-50/50 border border-orange-100/80 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span><strong>Horaires :</strong> Lun - Sam : 08h30 - 19h00 (Heure de Pékin / UTC+8)</span>
                </div>
              </div>
            </div>

            {/* Hub footer buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-soft transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Guangzhou</span>
              </button>
              <button
                onClick={() => onOpenQuote('Demande de réception colis à l\'entrepôt de Guangzhou')}
                className="bg-slate-100 hover:bg-slate-200 text-[#0f172a] py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Envoyer un colis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* HUB 2: KINSHASA (RDC) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold text-xl shadow-xs">
                    🇨🇩
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                      Direction Générale & Guichet RDC
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0f172a] font-display">
                      Agence de Kinshasa (Gombe)
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Accueil Client 7j/7
                </span>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 mb-6">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block mb-0.5">Adresse de l'agence :</span>
                    <p className="text-slate-600 leading-relaxed font-body">
                      {COMPANY_CONTACT.kinshasaOffice.address}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Kinshasa - RDC (Proche quartier d'affaires et banques)
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.kinshasaOffice.address, 'kin-addr')}
                    className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier l'adresse"
                  >
                    {copiedField === 'kin-addr' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block">Téléphone & Assistance locale :</span>
                    <a href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone}`} className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                      {COMPANY_CONTACT.guangzhouOffice.phone} / Kinshasa Desk
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.guangzhouOffice.phone, 'kin-phone')}
                    className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier le numéro"
                  >
                    {copiedField === 'kin-phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0f172a] block">Email Relations Clients RDC :</span>
                    <a href={`mailto:${COMPANY_CONTACT.kinshasaOffice.email}`} className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                      {COMPANY_CONTACT.kinshasaOffice.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.kinshasaOffice.email, 'kin-email')}
                    className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copiedField === 'kin-email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl bg-blue-50/50 border border-blue-100/80 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Horaires :</strong> Lun - Ven : 08h00 - 17h30 | Sam : 08h30 - 13h00 (UTC+1)</span>
                </div>
              </div>
            </div>

            {/* Hub footer buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="flex-1 bg-[#0f172a] hover:bg-slate-800 text-white py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-soft transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>Prendre RDV à Gombe</span>
              </button>
              <button
                onClick={() => onOpenQuote('Demande de dédouanement et livraison à Kinshasa')}
                className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Cotation Rapide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Direct Message Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 mb-2 block">
                Formulaire de Prise de Contact Rapide
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] font-display">
                Envoyez un message direct à nos équipes
              </h3>
              <p className="text-sm text-slate-600 mt-2 font-body">
                Remplissez ce formulaire et notre équipe à Guangzhou ou Kinshasa prendra contact avec vous sous 2 heures ouvrées.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in zoom-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-[#0f172a] font-display mb-2">
                  Message Transmis avec Succès !
                </h4>
                <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
                  Votre demande a été enregistrée et transmise directement sur notre ligne WhatsApp prioritaire. Un conseiller vous répond immédiatement.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-2xl bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nom & Prénom <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Jean-Marc Mukendi"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Téléphone / WhatsApp <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: +243 81 234 5678 ou +86 177..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Adresse Email (Optionnelle)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre-email@domaine.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Hub selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Bureau / Hub concerné
                    </label>
                    <select
                      value={formData.hub}
                      onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all cursor-pointer"
                    >
                      <option value="both">🇨🇳🇨🇩 Guangzhou & Kinshasa (Global)</option>
                      <option value="guangzhou">🇨🇳 Hub Guangzhou (Sourcing, Réception & Entrepôt)</option>
                      <option value="kinshasa">🇨🇩 Hub Kinshasa (Dédouanement & Retrait Gombe)</option>
                    </select>
                  </div>
                </div>

                {/* Service selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Service ou Objet de la demande
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="fret_maritime">🚢 Fret Maritime Conteneur (FCL) ou Groupage (LCL)</option>
                    <option value="fret_aerien">✈️ Fret Aérien Express (Colis urgents & Échantillons)</option>
                    <option value="sourcing">🛍️ Centrale d'Achats & Négociation Usines Chine (1688/Alibaba)</option>
                    <option value="vehicules">🚗 Importation Véhicule Chinois (BYD, Chery, Sinotruk...)</option>
                    <option value="douane">🛡️ Dédouanement DGDA, Certificat FERI & BIVAC</option>
                    <option value="autre">📋 Autre demande ou partenariat commercial</option>
                  </select>
                </div>

                {/* Message textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Votre Message ou Description du Projet
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez votre demande : type de marchandise, poids estimé, volume CBM, ville de départ en Chine, date souhaitée..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm tracking-wide shadow-soft-lg hover:shadow-orange-600/25 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer mon message & Échanger sur WhatsApp</span>
                  </button>
                </div>

                {/* Security and reassurance badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Vos données sont strictement confidentielles. Réponse garantie sous 2h ouvrées.</span>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
