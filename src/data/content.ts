import { ServiceItem, ArticleItem, TrackingShipment } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sourcing',
    title: "Centrale d'achats",
    shortDescription: "Sourcing international, négociation commerciale et contrôle qualité pour fournir des approvisionnements fiables et rentables.",
    fullDescription: "Notre centrale d'achats basée à Guangzhou (Chine) identifie pour vous les meilleurs fabricants et grossistes certifiés. Nous négocions directement les tarifs usine, effectuons une inspection rigoureuse avant expédition (contrôle conformité, test produit, emballage renforcé) et gérons vos règlements en toute sécurité.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Prospection & vérification d'usines en Chine",
      "Négociation directe au meilleur prix de gros",
      "Inspection et contrôle qualité pré-embarquement",
      "Paiements sécurisés (RMB / USD / FC)"
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'vehicules_chinois',
    title: "Achat & Vente de Véhicules (Marques Chinoises)",
    shortDescription: "Importation directe, achat et vente de véhicules et engins de toutes marques chinoises (BYD, Geely, Chery, Changan, Haval, Sinotruk...).",
    fullDescription: "Accédez directement au marché automobile chinois. Nous assurons l'achat, l'inspection technique pré-embarquement, le fret maritime (Ro-Ro ou conteneur), le dédouanement et la livraison clé en main de véhicules neufs ou d'occasion de toutes marques chinoises certifiées (BYD, Chery, Geely, Changan, Haval, Great Wall, Dongfeng, Jetour, Sinotruk, etc.).",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    features: [
      "Véhicules électriques, hybrides & thermiques (BYD, Chery, Geely, Changan...)",
      "Camions, engins de chantier & utilitaires (Sinotruk, Shacman, Foton...)",
      "Inspection mécanique & pièces de rechange d'origine en Chine",
      "Fret Ro-Ro / Conteneur, dédouanement Matadi & immatriculation RDC"
    ],
    iconName: 'Car'
  },
  {
    id: 'conseil',
    title: "Conseil en commerce",
    shortDescription: "Accompagnement stratégique sur les formalités douanières et l'optimisation des processus pour des transactions sécurisées en RDC.",
    fullDescription: "Bénéficiez d'un accompagnement sur-mesure pour naviguer sereinement dans la réglementation du commerce extérieur en RDC. Nos experts analysent les nomenclatures douanières (HS Code), prévoient l'impact fiscal et optimisent le schéma logistique de votre entreprise.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Audit des coûts d'importation et taxes douanières",
      "Assistance aux licences d'import/export",
      "Conseil juridique et conformité fiscale en RDC",
      "Optimisation des coûts de transport de marchandises"
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'facilities',
    title: "Business Facilities",
    shortDescription: "Mise en relation fournisseurs-clients et appui opérationnel pour accélérer vos projets et sécuriser vos échanges.",
    fullDescription: "Nous vous ouvrons les portes du marché asiatique grâce à notre réseau de bureaux à Guangzhou. Nous organisons vos missions d'affaires en Chine (traduction, accompagnement foires de Canton, réservations) et offrons un service de domiciliation commerciale et stockage temporaire.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    features: [
      "Accompagnement pour missions d'affaires et foires (Canton Fair)",
      "Interprétation simultanée Français / Lingala / Chinois Mandarin",
      "Entreposage temporaire gratuit à Guangzhou (15 jours)",
      "Gestion de commandes groupées multi-fournisseurs"
    ],
    iconName: 'Users'
  },
  {
    id: 'expedition',
    title: "Service d'expédition",
    shortDescription: "Transport maritime, aérien et terrestre vers Kinshasa et le Kongo Central avec un suivi rigoureux en temps réel.",
    fullDescription: "Acheminement fiable et flexible depuis la Chine (Guangzhou, Shenzhen, Ningbo, Shanghai) vers la RDC. Nous proposons du groupage (LCL), des conteneurs complets (FCL 20ft / 40ft) ainsi que du fret aérien express (4 à 7 jours) et cargo régulier.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    features: [
      "Fret Maritime FCL (20ft, 40ft High Cube) & LCL Groupage",
      "Fret Aérien Express (4-7j) et Cargo Lourd (7-12j)",
      "Assurance maritime Tous Risques incluse",
      "Suivi GPS / Tracking en temps réel 24/7"
    ],
    iconName: 'Ship'
  },
  {
    id: 'dedouanement',
    title: "Dédouanement",
    shortDescription: "Expertise en conformité documentaire pour un passage en douane rapide, sécurisé et conforme aux normes en vigueur.",
    fullDescription: "Prise en charge intégrale des démarches douanières aux ports de Matadi, Boma et à l'aéroport international de N'djili (Kinshasa). Traitement accéléré des déclarations DGDA, obtention des AV (Attestations de Vérification BIVAC/FERI) et dédouanement express sans retard.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Déclarations en douane DGDA rapides & légales",
      "Gestion des certificats FERI / BIVAC / OCC / PVI",
      "Exonérations et régimes douaniers spéciaux",
      "Enlèvement d'urgence des conteneurs sous douane"
    ],
    iconName: 'FileCheck'
  },
  {
    id: 'fret_national',
    title: "Fret national",
    shortDescription: "Réseau logistique étendu couvrant l'ensemble du territoire congolais par voie terrestre, fluviale et aérienne.",
    fullDescription: "Une fois la marchandise arrivée à Kinshasa ou Matadi, nous assurons son dispatching sécurisé vers Lubumbashi, Goma, Kisangani, Mbuji-Mayi, Kananga et Kikwit via notre flotte de camions semi-remorques et barges fluviales.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Livraison dernier km à Kinshasa (Gombe, Limete, Ngaliema, Masina...)",
      "Transport multimodal Matadi-Kinshasa (Route/Rail)",
      "Acheminement intérieur RDC (Katanga, Kivu, Grand Kasaï)",
      "Stockage sécurisé en entrepôt sous surveillance à Kinshasa"
    ],
    iconName: 'Truck'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'guide-import-chine',
    category: "GUIDE IMPORT",
    title: "Importer depuis la Chine vers Kinshasa : guide complet Alibaba & 1688",
    summary: "Découvrez les secrets pour sécuriser vos achats sur les plus grandes plateformes chinoises et éviter les pièges courants d'importation.",
    content: `L'importation de marchandises depuis les plateformes e-commerce chinoises comme Alibaba, 1688, et Taobao est devenue une opportunité majeure pour les commerçants et entrepreneurs de Kinshasa et de la RDC. Cependant, plusieurs défis peuvent survenir : barrière de la langue, risques de contrefaçon, fraudes de paiement, et blocages douaniers.

### 1. Comprendre la différence entre Alibaba et 1688
- **Alibaba.com** est orienté vers l'international. Les fournisseurs y parlent anglais et acceptent les cartes de crédit/virements bancaires internationaux.
- **1688.com** est la plateforme chinoise locale de vente directe d'usine. Les prix y sont 20% à 40% moins chers qu'Alibaba, mais le site est entièrement en chinois et requiert un compte bancaire chinois ou un agent intermédiaire comme **CM Service Co., Limited**.

### 2. Comment vérifier la fiabilité d'un fournisseur
Exigez toujours un échantillon avant de passer une commande volumineuse. Vérifiez l'ancienneté du fournisseur (Gold Plus Supplier), les avis des acheteurs et demandez les licences d'exportation.

### 3. La gestion des envois avec CM Service Co.
En confiant vos achats à notre centrale à Guangzhou :
1. Vous faites livrer vos colis à notre entrepôt de Guangzhou.
2. Notre équipe inspecte le contenu et pèse/mesure chaque colis.
3. Nous combinons vos achats pour optimiser l'espace et diminuer vos frais de transport.
4. Nous gérons l'expédition (Air ou Mer) et le dédouanement direct jusqu'à Kinshasa.`,
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=800&q=80",
    date: "18 Juillet 2026",
    readTime: "6 min de lecture",
    author: "Équipe Logistique CM Service"
  },
  {
    id: 'incubateurs-rdc',
    category: "INNOVATION",
    title: "Aviculture en RDC : pourquoi la nouvelle génération d'incubateurs change la donne",
    summary: "L'impact technologique sur la production locale et comment CM Service facilite l'importation de ces équipements de pointe.",
    content: `La demande en œufs et en poulets de chair à Kinshasa et dans les grandes villes de la RDC explose. Longtemps dépendante des importations de volaille surgelée, la filière avicole congolaise connaît une révolution grâce à l'importation d'incubateurs automatiques solaires et hybrides fabriqués en Chine.

### Les avantages des couveuses de nouvelle génération :
- **Taux d'éclosion supérieur à 92%** grâce au contrôle numérique de la température et du taux d'humidité.
- **Retournement automatique des œufs** toutes les 2 heures.
- **Système hybride (Solaire + Groupe Électrogène)** adapté aux défis d'alimentation électrique locale.

### Comment CM Service vous accompagne :
Nous faisons le sourcing des usines certifiées ISO en Chine, organisons l'emballage renforcé en caisses bois contre les chocs du transport maritime, et gérons l'exonération douanière pour le matériel agricole.`,
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
    date: "10 Juin 2026",
    readTime: "4 min de lecture",
    author: "Ing. Jean-Luc Mbaki"
  },
  {
    id: 'immobilier-diaspora',
    category: "IMMOBILIER",
    title: "Gestion immobilière à Kinshasa : solution de confiance pour la diaspora",
    summary: "Comment sécuriser vos investissements immobiliers au pays tout en vivant à l'étranger grâce à notre expertise locale.",
    content: `Pour les entrepreneurs et investisseurs congolais en relation avec la Chine, investir dans la construction ou l'équipement à Kinshasa représente un projet majeur qui requiert un sourcing direct d'usine et une logistique maîtrisée.

### Les clés d'un projet réussi à Kinshasa :
1. **Importation directe des matériaux de finition depuis la Chine** : Carrelage, Sanitaires, Luminaires LED, Menuiserie Aluminium, Panneaux solaires. En achetant directement à l'usine en Chine avec CM Service, vous économisez jusqu'à 50% par rapport au marché local.
2. **Suivi logistique transparent** : Reception sécurisée au port de Matadi et acheminement sur votre chantier à Gombe, Ngaliema, Macampagne ou N'sele.
3. **Supervision locale** : Nos équipes sur place assurent le contrôle des livraisons et la conformité des lots reçus.`,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    date: "28 Mai 2026",
    readTime: "5 min de lecture",
    author: "Cabinet Conseil CM Service"
  }
];

export const MOCK_SHIPMENTS: Record<string, TrackingShipment> = {
  'CM-88392-ZH': {
    trackingNumber: 'CM-88392-ZH',
    sender: 'Guangzhou Sourcing Co., Ltd',
    destination: 'Kinshasa (Gombe), RDC',
    carrier: 'Maersk Line / CM Service Express',
    mode: 'Fret Maritime 20FT',
    weightKg: 1450,
    volumeCbm: 18.5,
    statusText: 'En cours de dédouanement au port de Matadi',
    estimatedDelivery: '08 Août 2026',
    timeline: [
      { status: 'Colis réceptionné à l\'entrepôt de Guangzhou', location: 'Guangzhou (Chine)', timestamp: '12 Juillet 2026 - 10:30', completed: true },
      { status: 'Inspecté et chargé dans le conteneur MSK-4920', location: 'Port de Nansha, Guangzhou', timestamp: '15 Juillet 2026 - 16:45', completed: true },
      { status: 'Navire en mer - Transit Océan Atlantique', location: 'En mer', timestamp: '20 Juillet 2026 - 08:00', completed: true },
      { status: 'Arrivée au port de Matadi - Déchargement', location: 'Port de Matadi (RDC)', timestamp: '30 Juillet 2026 - 14:20', completed: true },
      { status: 'Dédouanement DGDA & Inspection OCC', location: 'Matadi Customs Terminal', timestamp: '01 Août 2026 - 09:15', completed: true, active: true },
      { status: 'Transport terrestre vers le dépôt de Kinshasa', location: 'Autoroute Matadi-Kinshasa', timestamp: 'En attente', completed: false },
      { status: 'Livraison finale au client', location: 'Kinshasa Gombe', timestamp: 'En attente', completed: false }
    ]
  },
  'CM-99120-AIR': {
    trackingNumber: 'CM-99120-AIR',
    sender: 'Shenzhen Tech Electronics',
    destination: 'Kinshasa N\'djili Airport',
    carrier: 'Ethiopian Cargo / CM Service Air',
    mode: 'Aérien Express',
    weightKg: 85,
    volumeCbm: 0.6,
    statusText: 'Disponible pour enlèvement à l\'agence de Kinshasa',
    estimatedDelivery: 'Immédiat (Aujourd\'hui)',
    timeline: [
      { status: 'Colis reçu à l\'entrepôt de Shenzhen', location: 'Shenzhen (Chine)', timestamp: '28 Juillet 2026 - 11:00', completed: true },
      { status: 'Vol cargo décollé de Guangzhou (CAN)', location: 'Guangzhou Baiyun Int Airport', timestamp: '29 Juillet 2026 - 22:30', completed: true },
      { status: 'Arrivée Aéroport de Kinshasa N\'djili (FIH)', location: 'Kinshasa N\'djili (RDC)', timestamp: '31 Juillet 2026 - 18:00', completed: true },
      { status: 'Dédouanement Aérien Express effectué', location: 'N\'djili Cargo Terminal', timestamp: '01 Août 2026 - 11:30', completed: true },
      { status: 'Prêt au comptoir d\'enlèvement', location: 'CM Service Office - Gombe Kinshasa', timestamp: '02 Août 2026 - 09:00', completed: true, active: true }
    ]
  }
};

export const PARTNERS_LIST = [
  { name: 'MAERSK', logoText: 'MAERSK' },
  { name: 'CMA CGM', logoText: 'CMA CGM' },
  { name: 'MSC', logoText: 'MSC' },
  { name: 'COSCO', logoText: 'COSCO SHIPPING' },
  { name: 'ALIBABA', logoText: 'ALIBABA GROUP' }
];

export const COMPANY_LOGO = "https://xjllcclxkffrpdnbttmj.supabase.co/storage/v1/object/public/branding/cm_logo_v1_transparent%20(1).png";

export const COMPANY_CONTACT = {
  name: "CM SERVICE CO., LIMITED",
  tagline: "Experts en logistique internationale et facilitation commerciale entre la Chine et la République Démocratique du Congo.",
  logo: COMPANY_LOGO,
  guangzhouOffice: {
    address: "No. 5F08, Jiuzhilong Trade City, No. 18 Guangyuan West Road, Yuexiu District, Guangzhou",
    phone: "+86 17701980521",
    email: "Castrombaki@gmail.com",
    city: "Guangzhou, Chine"
  },
  kinshasaOffice: {
    address: "Boulevard du 30 Juin, Commune de la Gombe",
    phone: "+243 810 000 000",
    email: "kinshasa@cmservice-rdc.com",
    city: "Kinshasa, RDC"
  },
  whatsapp: "8617701980521"
};
