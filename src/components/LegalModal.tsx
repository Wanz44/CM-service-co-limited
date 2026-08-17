import React, { useState } from 'react';
import { X, ShieldCheck, Scale, FileText, Building2, Lock } from 'lucide-react';
import { Language } from '../types';

export type LegalTabType = 'legal' | 'cgv' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
  currentLang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'legal',
  onClose,
  currentLang,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-200">
        {/* Header */}
        <div className="bg-[#021541] p-5 sm:p-6 text-white flex items-center justify-between relative shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Scale className="w-5 h-5 text-red-500" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                CONFORMITÉ LÉGALE & CONDITIONS GÉNÉRALES
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              CM SERVICE CO., LIMITED
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-3 gap-2 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('legal')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'legal'
                ? 'border-[#bb0019] text-[#bb0019]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Mentions Légales</span>
          </button>
          <button
            onClick={() => setActiveTab('cgv')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'cgv'
                ? 'border-[#bb0019] text-[#bb0019]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Conditions de Transit (CGV)</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'border-[#bb0019] text-[#bb0019]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Politique de Confidentialité</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {activeTab === 'legal' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">1. Identification de la Société</h3>
                <p>
                  Le présent site internet est la propriété exclusive de la société <strong>CM SERVICE CO., LIMITED</strong>, société commerciale de droit international spécialisée dans le transit, le fret maritime, le fret aérien, l'ingénierie d'achat et l'import-export.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                  <li><strong>Dénomination sociale :</strong> CM SERVICE CO., LIMITED</li>
                  <li><strong>Bureau Asie / Chine :</strong> Yuexiu District, Guangzhou City, Guangdong Province, P.R. China</li>
                  <li><strong>Bureau Afrique / RDC :</strong> Avenue Kalemie, Commune de la Gombe, Ville de Kinshasa, République Démocratique du Congo</li>
                  <li><strong>Directeur de la publication :</strong> Direction Générale CM SERVICE CO., LIMITED</li>
                  <li><strong>Contact Officiel :</strong> contact@cmservice-rdc.com | WhatsApp : +243 897 453 621</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">2. Champ d'application géographique</h3>
                <p>
                  CM SERVICE CO., LIMITED opère <strong>exclusivement dans deux pays</strong> : en République Populaire de Chine (centre d'achats, entrepôt et expédition) et en République Démocratique du Congo (dédouanement, livraison finale et représentation commerciale). Aucun tiers non mandaté n'est habilité à recevoir des paiements en notre nom.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">3. Propriété intellectuelle</h3>
                <p>
                  L'ensemble des marques, logos, graphismes, textes et éléments visuels présents sur cette plateforme sont protégés par le droit de la propriété intellectuelle et demeurent la propriété exclusive de CM SERVICE CO., LIMITED.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'cgv' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">1. Objet du Contrat de Transit et Sourcing</h3>
                <p>
                  Les présentes Conditions Générales régissent toutes les prestations d'achat, de groupage maritime (LCL), de conteneurs complets (FCL), de fret aérien express et de dédouanement exécutées par CM SERVICE CO., LIMITED au départ de la Chine vers la RDC.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">2. Tarification & Facturation</h3>
                <p>
                  Les tarifs de fret maritime sont établis sur la base du volume en mètres cubes (CBM) ou du poids taxable. Les tarifs de fret aérien sont basés sur le poids réel ou volumétrique (règle IATA : L x l x h / 6000). Les devis émis sont valables pour une durée de 14 jours ouvrés.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">3. Responsabilité & Assurance Marchandises</h3>
                <p>
                  CM SERVICE CO., LIMITED s'engage à apporter tous les soins raisonnables à la manutention et au stockage sécurisé des marchandises. Pour les marchandises de haute valeur (téléphonie, électronique, véhicules), le client est expressément invité à souscrire à l'assurance <em>Ad Valorem</em> tous risques couvrant 100% de la facture commerciale.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">4. Marchandises prohibées ou réglementées</h3>
                <p>
                  Sont formellement interdits au transport sans dérogation préalable : les armes, substances illicites, contrefaçons manifestes, matières radioactives et produits dangereux non déclarés (IMO).
                </p>
              </section>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">1. Protection du Secret Commercial</h3>
                <p>
                  CM SERVICE CO., LIMITED garantit la stricte confidentialité de l'identité de vos fournisseurs, de vos prix d'achat d'usine et de la nature de vos flux commerciaux. Aucune donnée commerciale d'un client n'est transmise à des tiers concurrents.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">2. Données personnelles collectées</h3>
                <p>
                  Les données transmises via nos formulaires de contact, de devis et de tracking (nom, email, téléphone WhatsApp, documents d'importation) sont utilisées uniquement pour le traitement logistique, l'émission des titres de transport (Bill of Lading / Airway Bill) et les formalités douanières en RDC.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#021541] mb-2">3. Exercice de vos droits</h3>
                <p>
                  Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email à l'adresse officielle de conformité : <strong>compliance@cmservice-rdc.com</strong>.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Document certifié conforme CM SERVICE CO., LIMITED (2026)</span>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#021541] hover:bg-[#bb0019] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
