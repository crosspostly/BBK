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
  instagramUrl?: string;
  review?: string;
}

export interface Tariff {
  id: number;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  isHit?: boolean;
  btnText: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  audience: string;
  image: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface VideoItem {
    id: number;
    title: string;
    embedUrl: string; // URL for iframe src (VK Video, YouTube Shorts embed)
    thumbnail?: string;
}

export interface ReviewScreenshot {
    id: number;
    author: string;
    text: string; // Used if image not loaded or for SEO
    platform: 'whatsapp' | 'telegram' | 'instagram';
    image?: string; // Optional real screenshot URL
}

export interface FounderProfile {
    name: string;
    role: string;
    image: string;
    quote: string;
    text: string[];
    signatureImage?: string;
    contactEmail: string;
    instagramUrl?: string;
    telegramUrl?: string;
}

export interface LegalInfo {
    inn: string;
    ogrnip?: string; // Optional for self-employed
    email: string;
    phone: string;
    name: string;
    policyText: string; // Full HTML/Markdown text
}

export type HeroContent = ContentConfig['hero'];
export type StatsStripContent = ContentConfig['statsStrip'];
export type ContextContent = ContentConfig['context'];
export type TechnologyContent = ContentConfig['technology'];
export type ShowcaseContent = ContentConfig['showcase'];
export type GoalsContent = ContentConfig['goals'];
export type BusinessValuesContent = ContentConfig['businessValues'];
export type CasesContent = ContentConfig['cases'];
export type SocialProofContent = ContentConfig['socialProof'];
export type ComparisonContent = ContentConfig['comparison'];
export type ProcessContent = ContentConfig['process'];
export type TeamContent = ContentConfig['team'];
export type FounderContent = ContentConfig['founder'];
export type TariffsContent = ContentConfig['tariffs'];
export type GuaranteesContent = ContentConfig['guarantees'];
export type FAQContent = ContentConfig['faq'];
export type CTAContent = ContentConfig['cta'];
export type ContactsContent = ContentConfig['contacts'];
export type LegalContent = ContentConfig['legal'];
export type SettingsContent = ContentConfig['settings'];

export interface ContentConfig {
  hero: {
    city: string;
    brand: string;
    h1: string;
    subtitle: string;
    description: string;
    benefits: string[];
    btnText: string;
  };
  statsStrip: {
    title: string;
    items: Array<{ value: string; label: string; subLabel: string; color: string }>;
  };
  context: {
    h2: string;
    subH2: string;
    problems: Array<{ title: string; desc: string }>;
    solution: {
        text: string;
        stats: {
            influencers: number;
            ads: number;
        };
        conclusion: string;
    }
  };
  technology: {
    h2: string;
    steps: Array<{ title: string; desc: string; icon: string }>;
  };
  showcase: {
    h2: string;
    subtitle: string;
    items: VideoItem[];
  };
  goals: {
    h2: string;
    subtitle: string;
    items: Array<{ title: string; subtitle: string; desc: string; btn: string; icon: string }>;
  };
  businessValues: {
    h2: string;
    items: Array<{ title: string; problem: string; solution: string; result: string }>;
  };
  cases: {
    h2: string;
    items: CaseStudy[];
  };
  socialProof: {
    h2: string;
    subtitle: string;
    reviews: ReviewScreenshot[];
  };
  comparison: {
    h2: string;
    headers: string[];
    rows: Array<{ param: string; target: string; self: string; band: string }>;
  };
  process: {
    h2: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string; note?: string }>;
  };
  team: {
    h2: string;
    subtitle: string;
    members: TeamMember[];
  };
  founder: {
    profile: FounderProfile;
  };
  tariffs: {
    h2: string;
    items: Tariff[];
    depositInfo: {
        title: string;
        desc: string;
    }
  };
  guarantees: {
    h2: string;
    items: Array<{ title: string; desc: string }>;
  };
  faq: {
    items: FAQItem[];
  };
  cta: {
    h2: string;
    text: string;
    btnText: string;
    disclaimer: string;
  };
  contacts: {
    h2: string;
    subtitle: string;
    address: string;
    telegram: string;
    telegramUrl: string;
    mapIframe: string;
    phone: string;
    name: string;
  };
  legal: LegalInfo;
  settings: {
    notifications: {
      email: string;
      telegram: {
        botToken: string;
        chatId: string;
      };
    };
  };
}