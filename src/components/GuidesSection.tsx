import React from 'react';
import { ARTICLES_DATA } from '../data/content';
import { ArticleItem, Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight } from 'lucide-react';

interface GuidesSectionProps {
  currentLang: Language;
  onSelectArticle: (article: ArticleItem) => void;
  onViewAllArticles: () => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({
  currentLang,
  onSelectArticle,
  onViewAllArticles,
}) => {
  const t = translations[currentLang];

  return (
    <section id="blog" className="py-16 sm:py-20 bg-[#e7eeff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#bb0019] bg-red-50 px-3 py-1 rounded uppercase tracking-wider inline-block mb-2.5 border border-red-100">
              {t.guidesSection.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#021541] tracking-tight">
              {t.guidesSection.title}
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-base max-w-2xl">
              {t.guidesSection.subtitle}
            </p>
          </div>

          <button
            onClick={onViewAllArticles}
            className="text-[#bb0019] hover:text-[#990014] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline cursor-pointer self-start md:self-auto"
          >
            <span>{t.guidesSection.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-md border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => onSelectArticle(article)}
            >
              {/* Card Thumbnail */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#021541] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                  {article.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#021541] mb-2 leading-snug group-hover:text-[#bb0019] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-6 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#021541]">
                  <span className="text-slate-500 font-normal">{article.readTime}</span>
                  <span className="text-[#bb0019] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {t.guidesSection.readMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

