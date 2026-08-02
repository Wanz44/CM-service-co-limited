export type Language = 'fr' | 'zh' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  iconName: string;
}

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}

export interface TrackingStep {
  status: string;
  location: string;
  timestamp: string;
  completed: boolean;
  active?: boolean;
}

export interface TrackingShipment {
  trackingNumber: string;
  sender: string;
  destination: string;
  carrier: string;
  mode: 'Aérien Express' | 'Fret Maritime 20FT' | 'Fret Maritime 40FT' | 'Fret Aérien Standard';
  weightKg: number;
  volumeCbm: number;
  statusText: string;
  estimatedDelivery: string;
  timeline: TrackingStep[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  type: 'sourcing' | 'maritime' | 'aerien' | 'douane' | 'autre';
  origin: string;
  destination: string;
  weight?: string;
  volume?: string;
  description: string;
}
