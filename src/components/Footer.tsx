import React from 'react';
import { COMPANY_CONTACT } from '../data/content';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenTracking: () => void;
  onOpenCalculator: () => void;
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenTracking,
  onOpenCalculator,
  onOpenContact,
  onOpenWhatsApp,
}) => {
  const t = translations[currentLang];

  return (
    <footer id="contact" className="bg-[#021541] text-white pt-12 sm:pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-[#bb0019] flex items-center justify-center font-extrabold text-white text-base">
                CM
              </div>
              <h3 className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-tight">
                CM SERVICE CO., LIMITED
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              {COMPANY_CONTACT.tagline}
            </p>
            <div className="flex items-center space-x-3 text-slate-300">
              <button 
                onClick={onOpenWhatsApp} 
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#bb0019] flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </button>
              <a 
                href={`mailto:${COMPANY_CONTACT.guangzhouOffice.email}`}
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#bb0019] flex items-center justify-center transition-colors"
                title="Email Direct"
              >
                <Mail className="w-4 h-4 text-sky-400" />
              </a>
              <a 
                href={`tel:${COMPANY_CONTACT.guangzhouOffice.phone}`}
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#bb0019] flex items-center justify-center transition-colors"
                title="Téléphone"
              >
                <Phone className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#bb0019] pl-2.5">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
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
                <button onClick={onOpenCalculator} className="text-red-400 hover:text-red-300 transition-colors font-semibold text-left">
                  {t.footer.simulatorLink}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Liens Utiles */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#bb0019] pl-2.5">
              {t.footer.usefulLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={onOpenTracking} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.footer.trackingLink}</span>
                  <ArrowUpRight className="w-3 h-3 text-red-400" />
                </button>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">{t.footer.guideLink}</a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors">{t.footer.quoteLink}</button>
              </li>
              <li>
                <span className="text-slate-400">{t.footer.privacyPolicy}</span>
              </li>
              <li>
                <span className="text-slate-400">{t.footer.termsOfService}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Localisation */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#bb0019] pl-2.5">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="font-semibold text-white block mb-0.5">{t.footer.guangzhouOffice}:</span>
                <p className="text-slate-400 leading-snug">
                  {COMPANY_CONTACT.guangzhouOffice.address}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Phone: {COMPANY_CONTACT.guangzhouOffice.phone}</span>
                </p>
                <p className="flex items-center gap-1.5 mt-1">
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Email: {COMPANY_CONTACT.guangzhouOffice.email}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="font-semibold text-white block mb-0.5">{t.footer.kinshasaOffice}:</span>
                <p className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{COMPANY_CONTACT.kinshasaOffice.address}, {COMPANY_CONTACT.kinshasaOffice.city}</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2024 CM SERVICE CO., LIMITED. {t.footer.rightsReserved}</p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px]">
            <span>Arco Iris RDC</span>
            <span>•</span>
            <span>Guangzhou Yuexiu District</span>
            <span>•</span>
            <span>Gombe Kinshasa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

