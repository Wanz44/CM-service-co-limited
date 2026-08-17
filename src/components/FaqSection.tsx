import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface FaqSectionProps {
  currentLang: Language;
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  currentLang,
  onOpenContact,
  onOpenWhatsApp,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Dédouanement & FERI',
      question: currentLang === 'zh'
        ? '什么是 FERI 认证？为什么发往刚果（金）必须办理？'
        : currentLang === 'en'
        ? 'What is the FERI certificate and why is it mandatory for DRC?'
        : 'Qu\'est-ce que le certificat FERI et pourquoi est-il obligatoire en RDC ?',
      answer: currentLang === 'zh'
        ? 'FERI（电子货物跟踪单）是刚果（金）交通运输部和国家货运管理委员会（OGEFREM）强制要求的进口凭证。任何装船前往刚果（金）的货物均需在起运港签发。CM Service 在中国起运港直接为您办理 FERI，避免货物抵达马塔迪后产生巨额罚金或扣关。'
        : currentLang === 'en'
        ? 'The FERI (Fiche Électronique de Renseignement à l\'Importation) is a mandatory cargo tracking certificate required by OGEFREM for all maritime and air shipments entering the DRC. CM Service issues the FERI directly at the origin port in China prior to sailing, preventing heavy port penalties.'
        : 'Le FERI (Fiche Électronique de Renseignement à l\'Importation) est un document obligatoire exigé par l\'OGEFREM pour toute expédition à destination de la RDC. Il doit impérativement être validé avant le départ du navire en Chine. CM Service prend en charge l\'émission et la validation directe de votre FERI pour vous prémunir de toute pénalité ou blocage au port de Matadi.',
    },
    {
      category: 'Délais de Transport',
      question: currentLang === 'zh'
        ? '从广州发往金沙萨的海运和空运时效是多少？'
        : currentLang === 'en'
        ? 'What are the transit times from Guangzhou to Kinshasa for sea & air freight?'
        : 'Quels sont les délais moyens d\'acheminement entre Guangzhou et Kinshasa ?',
      answer: currentLang === 'zh'
        ? '海运（整柜/散货）：航程通常为 35 至 45 天（自广州/南沙/蛇口港至马塔迪港），加急清关及陆运至金沙萨约需 5 至 7 个工作日。\n\n航空专线：每周二、周五固定航班，自广州直飞经转，通常 4 至 7 个工作日即可在金沙萨 Gombe 办公室提货。'
        : currentLang === 'en'
        ? 'Sea Freight (FCL / LCL): Maritime transit takes 35 to 45 days from Guangzhou/Shenzhen to Matadi port, followed by 5 to 7 business days for customs clearance and road haulage to Kinshasa.\n\nExpress Air Cargo: Departures every Tuesday & Friday, delivering to our Gombe office within 4 to 7 business days.'
        : 'Fret Maritime (Conteneur complet FCL & Groupage LCL) : Le transit maritime de Guangzhou/Shenzhen vers le port de Matadi dure entre 35 et 45 jours de mer, suivi de 5 à 7 jours pour le dédouanement et le transfert vers Kinshasa.\n\nFret Aérien Express : Vols bi-hebdomadaires (départs mardi et vendredi), avec mise à disposition à notre bureau de la Gombe sous 4 à 7 jours ouvrés.',
    },
    {
      category: 'Achat de Véhicules',
      question: currentLang === 'zh'
        ? '如何通过你们采购中国品牌汽车（如比亚迪、吉利、奇瑞、重汽）？'
        : currentLang === 'en'
        ? 'How do you handle the purchase and export of Chinese vehicles to Kinshasa?'
        : 'Comment se déroule l\'achat et l\'importation d\'un véhicule chinois (BYD, Chery, Geely, Sinotruk) ?',
      answer: currentLang === 'zh'
        ? 'Nous négocions le tarif direct constructeur en Chine, effectuons le contrôle technique et assurons le transport sécurisé RORO ainsi que le dédouanement complet à Matadi.'
        : currentLang === 'en'
        ? 'We source directly from certified automotive manufacturers in China (BYD, Chery, Geely, Sinotruk, Jetour). We handle technical inspection, export licensing, RoRo ocean transit, DRC customs duties, and deliver turn-key vehicles with complete paperwork in Kinshasa.'
        : 'Nous travaillons directement avec les constructeurs et concessionnaires agréés en Chine. Nous prenons en charge la commande d\'usine, l\'inspection technique avant départ, le transport maritime sécurisé (navire RORO ou conteneur fermé), le dédouanement DGDA à Matadi et la livraison du véhicule avec tous ses documents légaux à Kinshasa.',
    },
    {
      category: 'Sourcing & Paiement Usine',
      question: currentLang === 'zh'
        ? '我不会中文，如何确保在 1688 或中国工厂采购的资金与货物安全？'
        : currentLang === 'en'
        ? 'I do not speak Chinese. How can I safely purchase and pay on 1688 or Alibaba?'
        : 'Je ne parle pas chinois : comment sécurisez-vous mes achats sur 1688 / Alibaba et le paiement aux usines ?',
      answer: currentLang === 'zh'
        ? 'Notre équipe bilingue franco-chinoise basée à Guangzhou sert d\'intermédiaire de confiance : nous contactons les usines, auditons leur solvabilité légale, négocions en RMB au cours local, effectuons le paiement sécurisé et réceptionnons la marchandise dans notre entrepôt de Yuexiu pour inspection physique avant tout chargement.'
        : currentLang === 'en'
        ? 'Our bilingual French-Chinese team in Guangzhou acts as your local representative. We verify manufacturer credentials, negotiate in local RMB currency, execute secure bank settlements, and inspect all goods in our Guangzhou warehouse before loading.'
        : 'Notre équipe binationale basée à Guangzhou prend tout en main : recherche d\'usines fiables, négociation en direct au tarif local sans surcoût intermédiaire, conversion et paiement sécurisé en RMB/USD, puis contrôle qualité physique (photos/vidéos HD) dans notre entrepôt avant l\'expédition.',
    },
    {
      category: 'Sécurité & Assurance',
      question: currentLang === 'zh'
        ? '货物在运输过程中是否享有保险保障？如何理赔？'
        : currentLang === 'en'
        ? 'Are shipments insured against loss and damage during transit?'
        : 'Mes marchandises sont-elles assurées contre la perte ou la casse pendant le voyage ?',
      answer: currentLang === 'zh'
        ? 'Toutes nos expéditions bénéficient d\'un suivi rigoureux et d\'un scellé officiel. Une assurance maritime/aérienne Ad Valorem (tous risques) peut être souscrite pour couvrir 100% de la valeur déclarée de vos marchandises contre avarie commune, vol ou détérioration.'
        : currentLang === 'en'
        ? 'All shipments are managed under strict custody seals. We provide Ad Valorem cargo insurance covering up to 100% of the declared invoice value against total loss, water damage, or maritime perils.'
        : 'Toutes les expéditions font l\'objet d\'un scellé de sécurité et d\'un inventaire précis. Nous proposons une assurance fret maritime et aérien "Tous Risques" (Ad Valorem) qui couvre l\'intégralité de la valeur déclarée de votre facture commerciale en cas de sinistre majeur, avarie ou perte.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
            <span>{currentLang === 'zh' ? '常见问题与解答' : currentLang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'QUESTIONS FRÉQUENTES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-display mb-4">
            {currentLang === 'zh' 
              ? '关于中刚物流与清关的一切解答' 
              : currentLang === 'en' 
              ? 'Clear Answers to Your Logistics Questions' 
              : 'Tout ce que vous devez savoir pour importer'}
          </h2>
          <p className="text-slate-600 text-base font-body leading-[1.7]">
            {currentLang === 'zh'
              ? '透明解答关于 FERI、海运周期、集运拼箱及外汇合规结算的常见疑问。'
              : currentLang === 'en'
              ? 'Transparent insights regarding FERI, shipping delays, LCL groupage, and factory procurement.'
              : 'Des réponses précises et transparentes pour sécuriser vos démarches d\'importation de Chine vers la RDC.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0f172a] font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50 text-orange-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0f172a] font-display">
                {currentLang === 'zh' ? '还有其他特殊问题需要咨询？' : currentLang === 'en' ? 'Have a Specific Question?' : 'Vous avez une question spécifique sur vos marchandises ?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {currentLang === 'zh' ? '我们的双语物流专员随时在线为您解答' : currentLang === 'en' ? 'Our bilingual logistics specialists are available to assist you.' : 'Nos conseillers basés à Guangzhou et Kinshasa vous répondent directement sur WhatsApp.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-soft flex items-center justify-center gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
          >
            <span>WhatsApp Direct</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
