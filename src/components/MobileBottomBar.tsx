import React from 'react';
import { Home, Ship, FileText, BookOpen, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomBarProps {
  currentLang: Language;
  activeSection?: string;
  onOpenServices: () => void;
  onOpenGuides: () => void;
  onOpenQuote: () => void;
  onOpenWhatsApp: () => void;
  onGoHome: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentLang,
  activeSection = 'hero',
  onOpenServices,
  onOpenGuides,
  onOpenQuote,
  onOpenWhatsApp,
  onGoHome,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        
        {/* 1. Accueil */}
        <button
          onClick={onGoHome}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl min-h-[46px] min-w-[54px] transition-colors cursor-pointer active:scale-95 ${
            activeSection === 'hero' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-[#0f172a]'
          }`}
          aria-label="Accueil"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">
            {currentLang === 'zh' ? '首页' : currentLang === 'en' ? 'Home' : 'Accueil'}
          </span>
        </button>

        {/* 2. Services */}
        <button
          onClick={onOpenServices}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl min-h-[46px] min-w-[54px] transition-colors cursor-pointer active:scale-95 ${
            activeSection === 'services' || activeSection === 'vehicules' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-[#0f172a]'
          }`}
          aria-label="Services"
        >
          <Ship className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">
            {currentLang === 'zh' ? '服务' : currentLang === 'en' ? 'Services' : 'Services'}
          </span>
        </button>

        {/* 3. Central Raised CTA: Devis (Surélevé Orange Cuivré) */}
        <div className="relative -top-3">
          <button
            onClick={onOpenQuote}
            className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 active:scale-95 text-white flex flex-col items-center justify-center shadow-soft-lg ring-4 ring-white transition-all cursor-pointer"
            aria-label="Demander un devis"
          >
            <FileText className="w-5 h-5 text-white" />
            <span className="text-[9px] font-extrabold tracking-tight mt-0.5 text-white">
              {currentLang === 'zh' ? '询价' : currentLang === 'en' ? 'Quote' : 'Devis'}
            </span>
          </button>
        </div>

        {/* 4. Guides */}
        <button
          onClick={onOpenGuides}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl min-h-[46px] min-w-[54px] transition-colors cursor-pointer active:scale-95 ${
            activeSection === 'guides' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-[#0f172a]'
          }`}
          aria-label="Guides"
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">
            {currentLang === 'zh' ? '指南' : currentLang === 'en' ? 'Guides' : 'Guides'}
          </span>
        </button>

        {/* 5. WhatsApp */}
        <button
          onClick={onOpenWhatsApp}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-2xl min-h-[46px] min-w-[54px] text-emerald-600 hover:text-emerald-700 active:scale-95 transition-colors cursor-pointer"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 fill-[#25D366] text-[#25D366]" />
          <span className="text-[10px] font-bold text-[#25D366] tracking-tight">
            WhatsApp
          </span>
        </button>

      </div>
    </div>
  );
};
