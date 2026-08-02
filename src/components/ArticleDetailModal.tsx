import React from 'react';
import { ArticleItem } from '../types';
import { X, Calendar, Clock, User, Share2, Check } from 'lucide-react';

interface ArticleDetailModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenQuote,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Banner image */}
        <div className="relative h-64 bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="absolute bottom-4 left-6 bg-[#021541] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
            {article.category}
          </span>
        </div>

        {/* Article Details */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#021541] leading-tight">
            {article.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#bb0019]" />
              {article.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#021541] pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA inside Article */}
          <div className="bg-[#e7eeff] p-6 rounded-md border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="font-bold text-[#021541] text-base">Besoin d'aide pour vos importations ?</h4>
              <p className="text-xs text-slate-600 mt-0.5">Nos agents à Guangzhou gèrent la recherche et le transport pour vous.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="bg-[#bb0019] hover:bg-[#990014] text-white px-5 py-2.5 rounded text-xs font-bold uppercase shrink-0 transition-all shadow-xs"
            >
              Consulter nos agents
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#021541]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Lien copié !' : 'Partager cet article'}</span>
          </button>
          <button
            onClick={onClose}
            className="bg-[#021541] text-white px-4 py-2 rounded text-xs font-bold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
