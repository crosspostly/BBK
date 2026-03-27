export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  stats: {
    invested: string;
    roi?: string;
    result: string;
    revenue?: string;
    cpa?: string;
  };
  image: string;
  videoEmbedUrl?: string;
}

export interface Tariff {
  id: string | number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SystemFeature {
  title: string;
  description: string;
}

export interface Niche {
  id: string;
  title: string;
  services: string[];
}

export interface FooterData {
  brand: string;
  location: string;
  phone: string;
  telegram: string;
  legal: {
    name: string;
    inn: string;
    taxType: string;
  };
}

export interface CTAContent {
  h2: string;
  text: string;
  btnText: string;
  disclaimer: string;
}

export interface LegalInfo {
    inn: string;
    email: string;
    phone: string;
    name: string;
    policyText: string;
}

export interface SettingsContent {
    notifications: {
      email: string;
      telegram: {
        botToken: string;
        chatId: string;
      };
    };
}

// Заглушки для старых компонентов, чтобы не падал билд
export type BusinessValuesContent = any;
export type CasesContent = any;
export type ComparisonContent = any;
export type ContactsContent = any;
export type ContextContent = any;
export type FounderContent = any;
export type GoalsContent = any;
export type GuaranteesContent = any;
export type ProcessContent = any;
export type ShowcaseContent = any;
export type StatsStripContent = any;
export type TechnologyContent = any;
export type TeamContent = any;
export type LegalContent = LegalInfo;

export interface ContentConfig {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  advantages: Advantage[];
  systemFeatures: SystemFeature[];
  niches: Niche[];
  promoOffer: {
    title: string;
    deadlineText: string;
    bonuses: string[];
  };
  pricing: Tariff[];
  faq: FAQItem[];
  footer: FooterData;
  cta: CTAContent;
  legal: LegalInfo;
  settings: SettingsContent;
  
  // Добавляем старые поля как опциональные, чтобы старые компоненты не ругались
  businessValues?: any;
  cases?: any;
  comparison?: any;
  contacts?: any;
  context?: any;
  founder?: any;
  goals?: any;
  guarantees?: any;
  process?: any;
  showcase?: any;
  statsStrip?: any;
  technology?: any;
  team?: any;
  socialProof?: any;
}
