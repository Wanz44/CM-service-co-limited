import { Language } from '../types';

export interface Translations {
  nav: {
    services: string;
    presentation: string;
    blog: string;
    contact: string;
    tracking: string;
    calculator: string;
    quote: string;
    whatsapp: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    btnProject: string;
    btnRates: string;
    btnCalc: string;
    tagline: string;
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    btnDetail: string;
  };
  statsBanner: {
    exp: string;
    offices: string;
    shipments: string;
    guarantee: string;
  };
  presentationSection: {
    badge: string;
    subBadge: string;
    officeTitle: string;
    awardTitle: string;
    awardDesc: string;
    title: string;
    desc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    chinaOffice: string;
    rdcOffice: string;
  };
  guidesSection: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
  };
  partnersSection: {
    badge: string;
    title: string;
    subtitle: string;
  };
  ctaSection: {
    badge: string;
    title: string;
    subtitle: string;
    btnStart: string;
    btnTariffs: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    addressGz: string;
    addressKin: string;
    rights: string;
  };
  modals: {
    trackingTitle: string;
    trackingSubtitle: string;
    trackingPlaceholder: string;
    calcTitle: string;
    calcSubtitle: string;
    quoteTitle: string;
    quoteSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    typeLabel: string;
    originLabel: string;
    destLabel: string;
    descLabel: string;
    submitQuoteWhatsapp: string;
    consultRatesWhatsapp: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      services: 'Services',
      presentation: 'Présentation',
      blog: 'Blog & Guides',
      contact: 'Contact',
      tracking: 'Suivi de Colis',
      calculator: 'Simulateur Fret',
      quote: 'Cotation & Devis',
      whatsapp: 'WhatsApp',
    },
    hero: {
      badge: 'HUB LOGISTIQUE CHINE ➔ RDC | 广州至金沙萨',
      title: 'Votre Partenaire Logistique et Sourcing Direct Chine ➔ RDC',
      subtitle: 'Fret maritime LCL/FCL, fret aérien express, centrale d\'achats à Guangzhou, achat & vente de véhicules chinois (BYD, Geely, Chery...) et transit sur-mesure vers Kinshasa et la RDC.',
      btnProject: 'Démarrer mon projet sur WhatsApp',
      btnRates: 'Consulter nos tarifs',
      btnCalc: 'Simulateur de Fret',
      tagline: 'Bureaux permanents à Guangzhou (Chine) & Kinshasa (RDC)',
    },
    servicesSection: {
      badge: 'NOS DOMAINES D\'EXPERTISE',
      title: 'Des solutions logistiques et commerciales complètes',
      subtitle: 'De l\'achat d\'usines en Chine jusqu\'à la livraison sécurisée à Kinshasa et dans toute la RDC.',
      btnDetail: 'En savoir plus & Cotation',
    },
    statsBanner: {
      exp: 'Années d\'Expérience (Depuis 2008)',
      offices: 'Bureaux Permanents (Guangzhou & Kinshasa)',
      shipments: 'Expéditions Réussies Chine ➔ RDC',
      guarantee: 'Garantie Sécurité & Dédouanement',
    },
    presentationSection: {
      badge: 'À PROPOS DE NOTRE GROUPE',
      subBadge: 'PRÉSENCE STRATÉGIQUE MULTINATIONALE',
      officeTitle: 'Bureaux Permanents à Guangzhou & Kinshasa',
      awardTitle: 'Excellence Logistique',
      awardDesc: 'Plus de 15 ans d\'expertise dans le transit maritime, aérien, l\'automobile et le sourcing industriel en Chine.',
      title: 'Votre pont de confiance entre le marché chinois et la RDC.',
      desc: 'CM SERVICE CO., LIMITED (Arco Iris RDC) est une société internationale de logistique, d\'ingénierie d\'achat et de facilitation douanière. Nous sommes physiquement implantés à la fois dans le hub commercial mondial de Guangzhou (Chine) et au cœur des affaires à Kinshasa (RDC).',
      feature1Title: 'Contrôle Qualité Pré-embarquement',
      feature1Desc: 'Inspection physique de vos commandes dans nos entrepôts de Guangzhou avant chargement.',
      feature2Title: 'Gestion Documentaire & Douane',
      feature2Desc: 'Maîtrise complète des exigences FERI, BIVAC, OCC et des démarches douanières à Matadi et N\'djili.',
      feature3Title: 'Transparence des Coûts',
      feature3Desc: 'Facturation claire sans frais cachés, devis garanti et suivi en temps réel de vos marchandises.',
      chinaOffice: 'Bureau Chine: Yuexiu District, Guangzhou',
      rdcOffice: 'Bureau RDC: Commune de la Gombe, Kinshasa',
    },
    guidesSection: {
      badge: 'CONSEILS & PRATIQUES COMMERCIALE',
      title: 'Guides & Actualités du Commerce Chine - RDC',
      subtitle: 'Tout ce que vous devez savoir pour réussir vos importations et vos achats depuis Guangzhou.',
      readMore: 'Lire l\'article complet',
      viewAll: 'Voir tous les guides',
    },
    partnersSection: {
      badge: 'NOS COMPAGNIES PARTENAIRES',
      title: 'Un réseau maritime et aérien mondial de premier ordre',
      subtitle: 'Nous collaborons directement avec les plus grands armateurs et compagnies aériennes pour vous garantir des tarifs préférentiels et des délais respectés.',
    },
    ctaSection: {
      badge: 'PRÊT À EXPÉDIER OU IMPORTER DE CHINE ?',
      title: 'Obtenez votre étude sur-mesure et votre cotation en 2 heures.',
      subtitle: 'Nos équipes à Guangzhou et Kinshasa sont à votre disposition pour concrétiser vos projets d\'importation et d\'achat de véhicules.',
      btnStart: 'Démarrer mon projet sur WhatsApp',
      btnTariffs: 'Consulter nos tarifs',
    },
    footer: {
      about: 'CM SERVICE CO., LIMITED (Arco Iris RDC) est votre partenaire de confiance pour le sourcing, le transit maritime, le fret aérien et l\'achat de véhicules chinois.',
      quickLinks: 'Navigation Rapide',
      ourServices: 'Nos Services',
      contactUs: 'Nous Contacter',
      addressGz: 'Bureau Guangzhou: Yuexiu District, Guangzhou, Guangdong, Chine',
      addressKin: 'Bureau Kinshasa: Av. Kalemie, Gombe, Kinshasa, RDC',
      rights: 'Tous droits réservés. CM SERVICE CO., LIMITED.',
    },
    modals: {
      trackingTitle: 'Suivi de Colis & Conteneur',
      trackingSubtitle: 'Entrez votre numéro de suivi (BL / Container / Tracking ID)',
      trackingPlaceholder: 'Ex: CMS-2026-8891 ou MSKU981244',
      calcTitle: 'Simulateur & Tarif de Fret Chine ➔ RDC',
      calcSubtitle: 'Estimez les coûts de transport maritime ou aérien',
      quoteTitle: 'Demande de Cotation & Projet',
      quoteSubtitle: 'Étude sur-mesure sous 2h ouvrées',
      nameLabel: 'Nom Complet',
      phoneLabel: 'Téléphone / WhatsApp',
      emailLabel: 'Email Professionnel',
      typeLabel: 'Type d\'Opération',
      originLabel: 'Ville de Départ',
      destLabel: 'Destination Finale RDC',
      descLabel: 'Description du projet / Marchandises',
      submitQuoteWhatsapp: 'Démarrer mon projet sur WhatsApp',
      consultRatesWhatsapp: 'Consulter nos tarifs sur WhatsApp',
    },
  },
  zh: {
    nav: {
      services: '服务项目',
      presentation: '公司介绍',
      blog: '资讯与指南',
      contact: '联系我们',
      tracking: '包裹追踪',
      calculator: '运费计算器',
      quote: '报价咨询',
      whatsapp: 'WhatsApp客服',
    },
    hero: {
      badge: '中国 ➔ 刚果（金）物流专线 | 广州至金沙萨',
      title: '您在中国至刚果（金）的直营物流与采购合作伙伴',
      subtitle: '散货拼箱/整柜海运、航空专线快递、广州采购中心、中国品牌汽车（比亚迪、吉利、奇瑞、重汽等）代购及金沙萨包清关专线。',
      btnProject: '通过WhatsApp启动项目',
      btnRates: '查看运费标准',
      btnCalc: '运费计算器',
      tagline: '广州（中国）与金沙萨（刚果金）设立双直营办事处',
    },
    servicesSection: {
      badge: '核心专业领域',
      title: '全面的国际物流与跨国贸易解决方案',
      subtitle: '从中国工厂直采到金沙萨及刚果（金）全境安全交付。',
      btnDetail: '了解详情与获取报价',
    },
    statsBanner: {
      exp: '行业经验（自2008年起）',
      offices: '常设办事处（广州与金沙萨）',
      shipments: '成功运输案例（中国 ➔ 刚果金）',
      guarantee: '双清包税与安全保障',
    },
    presentationSection: {
      badge: '关于我们',
      subBadge: '跨国战略布局',
      officeTitle: '广州与金沙萨双办事处',
      awardTitle: '卓越物流品质',
      awardDesc: '拥有超过15年的海运、空运、汽车出口及中国工业采购经验。',
      title: '连接中国市场与刚果（金）的信赖桥梁',
      desc: 'CM SERVICE CO., LIMITED (Arco Iris RDC) 是一家国际物流、采购工程和海关通关服务公司。我们在全球贸易中心广州和刚果（金）商业中心金沙萨均设有直营办公室。',
      feature1Title: '装船前质量检测',
      feature1Desc: '货物在广州仓库装柜前进行实物抽检与质量核验。',
      feature2Title: '单证管理与海关清关',
      feature2Desc: '全面掌握 FERI、BIVAC、OCC 认证及马塔迪与金沙萨海关手续。',
      feature3Title: '透明计费与无隐形费用',
      feature3Desc: '清晰明了的报价，无任何隐形费用，提供货物全程实时追踪。',
      chinaOffice: '中国办事处：广州市越秀区',
      rdcOffice: '刚果金办事处：金沙萨 Gombe 区',
    },
    guidesSection: {
      badge: '贸易指南与实务',
      title: '中刚贸易指南与最新资讯',
      subtitle: '成功从广州采购与进口货物所需了解的所有专业知识。',
      readMore: '阅读全文',
      viewAll: '查看所有指南',
    },
    partnersSection: {
      badge: '合作伙伴船司及航空公司',
      title: '全球一流的海运与航空运输网络',
      subtitle: '我们与全球主要船公司及航空公司直接合作，确保为您提供最具竞争力的价格与准时的时效。',
    },
    ctaSection: {
      badge: '准备从中国发货或采购？',
      title: '2小时内获取定制化方案与详细报价。',
      subtitle: '我们在广州和金沙萨的团队随时准备协助您落实进口及汽车采购项目。',
      btnStart: '通过WhatsApp启动项目',
      btnTariffs: '查看运费标准',
    },
    footer: {
      about: 'CM SERVICE CO., LIMITED (Arco Iris RDC) 是您在采购、海运、空运及中国品牌汽车出口方面值得信赖的合作伙伴。',
      quickLinks: '快速导航',
      ourServices: '我们的服务',
      contactUs: '联系我们',
      addressGz: '广州办事处：中国广东省广州市越秀区',
      addressKin: '金沙萨办事处：刚果（金）金沙萨 Gombe 区',
      rights: '版权所有 © CM SERVICE CO., LIMITED。',
    },
    modals: {
      trackingTitle: '包裹与集装箱追踪',
      trackingSubtitle: '请输入您的单号（提单号 / 柜号 / 追踪码）',
      trackingPlaceholder: '例如: CMS-2026-8891 或 MSKU981244',
      calcTitle: '中国 ➔ 刚果（金）运费试算',
      calcSubtitle: '预估海运拼箱、整柜或空运专线费用',
      quoteTitle: '项目咨询与定制报价',
      quoteSubtitle: '工作日2小时内获取专属方案',
      nameLabel: '姓名',
      phoneLabel: '电话 / WhatsApp',
      emailLabel: '电子邮箱',
      typeLabel: '业务类型',
      originLabel: '始发城市',
      destLabel: '刚果（金）目的地',
      descLabel: '项目/货物详细描述',
      submitQuoteWhatsapp: '通过WhatsApp发送报价申请',
      consultRatesWhatsapp: '通过WhatsApp咨询最新运费',
    },
  },
  en: {
    nav: {
      services: 'Services',
      presentation: 'About Us',
      blog: 'Blog & Guides',
      contact: 'Contact',
      tracking: 'Track Package',
      calculator: 'Freight Calculator',
      quote: 'Get Quote',
      whatsapp: 'WhatsApp',
    },
    hero: {
      badge: 'CHINA ➔ DRC LOGISTICS HUB | 广州至金沙萨',
      title: 'Your Direct Logistics & Sourcing Partner China ➔ DRC',
      subtitle: 'Sea freight LCL/FCL, express air freight, Guangzhou procurement hub, purchase & sales of Chinese vehicles (BYD, Geely, Chery...), and custom transit to Kinshasa and DRC.',
      btnProject: 'Start My Project on WhatsApp',
      btnRates: 'Check Our Rates',
      btnCalc: 'Freight Calculator',
      tagline: 'Permanent offices in Guangzhou (China) & Kinshasa (DRC)',
    },
    servicesSection: {
      badge: 'OUR AREAS OF EXPERTISE',
      title: 'Comprehensive Logistics & Commercial Solutions',
      subtitle: 'From factory procurement in China to secure delivery in Kinshasa and across the DRC.',
      btnDetail: 'Learn More & Get Quote',
    },
    statsBanner: {
      exp: 'Years of Experience (Since 2008)',
      offices: 'Permanent Offices (Guangzhou & Kinshasa)',
      shipments: 'Successful Shipments China ➔ DRC',
      guarantee: 'Safety & Customs Clearance Guarantee',
    },
    presentationSection: {
      badge: 'ABOUT OUR GROUP',
      subBadge: 'MULTINATIONAL STRATEGIC PRESENCE',
      officeTitle: 'Permanent Offices in Guangzhou & Kinshasa',
      awardTitle: 'Logistics Excellence',
      awardDesc: 'Over 15 years of expertise in sea transit, air freight, automotive export, and industrial sourcing in China.',
      title: 'Your Trusted Bridge Between China & DRC.',
      desc: 'CM SERVICE CO., LIMITED (Arco Iris RDC) is an international logistics, purchasing engineering, and customs clearance facilitation company with physical branches in Guangzhou (China) and Kinshasa (DRC).',
      feature1Title: 'Pre-shipment Quality Control',
      feature1Desc: 'Physical inspection of your orders in our Guangzhou warehouse prior to loading.',
      feature2Title: 'Documentation & Customs Management',
      feature2Desc: 'Full expertise in FERI, BIVAC, OCC requirements and customs processing in Matadi and N\'djili.',
      feature3Title: 'Transparent Pricing',
      feature3Desc: 'Clear invoicing with no hidden fees, guaranteed quote, and real-time cargo tracking.',
      chinaOffice: 'China Office: Yuexiu District, Guangzhou',
      rdcOffice: 'DRC Office: Gombe Municipality, Kinshasa',
    },
    guidesSection: {
      badge: 'TRADE ADVICE & GUIDES',
      title: 'China - DRC Trade Guides & News',
      subtitle: 'Everything you need to know for successful importing from Guangzhou.',
      readMore: 'Read Full Article',
      viewAll: 'View All Guides',
    },
    partnersSection: {
      badge: 'OUR PARTNER SHIPPING LINES',
      title: 'World-Class Global Shipping & Airline Network',
      subtitle: 'We collaborate directly with major shipping lines and airlines to guarantee preferential rates and respected delivery times.',
    },
    ctaSection: {
      badge: 'READY TO SHIP OR IMPORT FROM CHINA?',
      title: 'Get your custom study and quote within 2 hours.',
      subtitle: 'Our teams in Guangzhou and Kinshasa are ready to turn your import and vehicle purchasing projects into reality.',
      btnStart: 'Start My Project on WhatsApp',
      btnTariffs: 'Check Our Rates',
    },
    footer: {
      about: 'CM SERVICE CO., LIMITED (Arco Iris RDC) is your trusted partner for sourcing, sea freight, air cargo, and Chinese vehicle sales.',
      quickLinks: 'Quick Navigation',
      ourServices: 'Our Services',
      contactUs: 'Contact Us',
      addressGz: 'Guangzhou Office: Yuexiu District, Guangzhou, Guangdong, China',
      addressKin: 'Kinshasa Office: Kalemie Ave, Gombe, Kinshasa, DRC',
      rights: 'All rights reserved. CM SERVICE CO., LIMITED.',
    },
    modals: {
      trackingTitle: 'Package & Container Tracking',
      trackingSubtitle: 'Enter your tracking number (BL / Container / Tracking ID)',
      trackingPlaceholder: 'Ex: CMS-2026-8891 or MSKU981244',
      calcTitle: 'China ➔ DRC Freight Simulator & Rates',
      calcSubtitle: 'Estimate sea freight LCL/FCL or air cargo costs',
      quoteTitle: 'Quote Request & Project Study',
      quoteSubtitle: 'Tailored analysis within 2 business hours',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Business Email',
      typeLabel: 'Operation Type',
      originLabel: 'Origin City',
      destLabel: 'DRC Destination',
      descLabel: 'Project / Cargo Description',
      submitQuoteWhatsapp: 'Submit Request on WhatsApp',
      consultRatesWhatsapp: 'Consult Rates on WhatsApp',
    },
  },
};
