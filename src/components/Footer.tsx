import React from 'react';
import { COMPANY_CONTACT } from '../data/content';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenTracking: () => void;
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
  onOpenLegal: (tab: 'legal' | 'cgv' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenTracking,
  onOpenContact,
  onOpenWhatsApp,
  onOpenLegal,
}) => {
  const t = translations[currentLang];

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-16 sm:pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto bg-white/10 p-1.5 rounded-2xl flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_CONTACT.logo}
                  alt="CM SERVICE Logo"
                  className="h-9 w-auto max-w-[130px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-white font-display leading-tight">
                  CM SERVICE CO., LTD
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">Guangzhou ⇄ Kinshasa</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-body">
              {COMPANY_CONTACT.tagline}
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <button 
                onClick={onOpenWhatsApp} 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors cursor-pointer text-slate-300 hover:text-white"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <a 
                href={`mailto:${COMPANY_CONTACT.guangzhouOffice.email}`}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-orange-600 flex items-center justify-center transition-colors cursor-pointer text-slate-300 hover:text-white"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone}`}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors cursor-pointer text-slate-300 hover:text-white"
                title="Téléphone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-display">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-body">
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.footer.sourcingLink}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.footer.transitLink}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.footer.freightLink}</a>
              </li>
              <li>
                <button onClick={onOpenContact} className="text-orange-400 hover:text-orange-300 transition-colors font-medium text-left cursor-pointer">
                  Demande de Devis Direct
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Liens Utiles */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-display">
              {t.footer.usefulLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-body">
              <li>
                <button onClick={onOpenTracking} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                  <span>{t.footer.trackingLink}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('legal')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.footer.legalLink}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('cgv')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.footer.cgvLink}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.footer.privacyLink}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubs & Contacts Directs */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-display">
              Bureaux & Hubs Physiques
            </h4>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 text-orange-400 font-bold mb-1">
                <span>🇨🇳</span>
                <span>Guangzhou (Yuexiu)</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {COMPANY_CONTACT.guangzhouOffice.address}
              </p>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold mb-1">
                <span>🇨🇩</span>
                <span>Kinshasa (Gombe)</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {COMPANY_CONTACT.kinshasaOffice.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CM SERVICE CO., LIMITED. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenLegal('legal')} className="hover:text-slate-300 cursor-pointer">Mentions Légales</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('cgv')} className="hover:text-slate-300 cursor-pointer">Conditions de Transport</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-slate-300 cursor-pointer">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
