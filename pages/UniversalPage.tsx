import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { regions } from '../constants_universal';

// --- UI Components ---
import { FadeIn } from '../components/ui/FadeIn';
import { Section } from '../components/ui/Section';

// --- Page Section Components ---
import { Hero } from '../components/Hero';
const Context = lazy(() => import('../components/Context').then(module => ({ default: module.Context })));
const Technology = lazy(() => import('../components/Technology').then(module => ({ default: module.Technology })));
const Cases = lazy(() => import('../components/Cases').then(module => ({ default: module.Cases })));
const Tariffs = lazy(() => import('../components/Tariffs').then(module => ({ default: module.Tariffs })));
const Founder = lazy(() => import('../components/Founder').then(module => ({ default: module.Founder })));
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const CTA = lazy(() => import('../components/CTA').then(module => ({ default: module.CTA })));
import { ContactMap } from '../components/ContactMap';

// --- NEW Universal Components ---

// 1. Niches Icons Block
const NichesBlock: React.FC<{ content: any }> = ({ content }) => {
    const iconMap: { [key: string]: string } = {
        utensils: '🍽️',
        dumbbell: '💪',
        sparkles: '💅',
        shoppingBag: '🛍️',
        briefcase: '🛠️',
    };

    return (
        <Section>
            <FadeIn>
                <h2 className="text-center text-xl font-bold mb-12">{content.h2}</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {content.items.map((item: any) => (
                        <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                            <div className="text-4xl">{iconMap[item.icon] || '❓'}</div>
                            <span className="font-semibold text-sm">{item.title}</span>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
};

// 2. Niche Solutions Block (Tabs)
const NicheSolutionsBlock: React.FC<{ content: any }> = ({ content }) => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Section className="bg-surface/30">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">{content.h2}</h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex md:flex-col overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 no-scrollbar">
                        {content.items.map((item: any, index: number) => (
                            <button
                                key={item.niche}
                                onClick={() => setActiveTab(index)}
                                className={`text-left text-lg font-bold p-4 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                                    activeTab === index ? 'bg-primary text-white' : 'text-textSec hover:bg-white/5'
                                }`}
                            >
                                {item.niche}
                            </button>
                        ))}
                    </div>
                    <div className="w-full">
                        <div className="glass p-8 rounded-2xl">
                            <ul className="space-y-4">
                                {content.items[activeTab].tasks.map((task: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-primary mt-1">✔</span>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};


// --- The Main Universal Page Component ---
export const UniversalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Default to kuzbass if slug is not provided or not found
  const citySlug = slug && regions[slug] ? slug : null;
  
  if (!slug) {
      return <Navigate to="/kuzbass" replace />;
  }

  if (!citySlug) {
      return <Navigate to="/kuzbass" replace />;
  }

  const content = regions[citySlug];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": `ББК - Банда Блогеров ${content.hero.city}`,
    "image": "/images/hero_bg.webp",
    "description": content.hero.description,
    "address": { "@type": "PostalAddress", "addressLocality": content.hero.city, "addressCountry": "RU" },
    "url": `https://bbk-alpha.vercel.app/${citySlug}`,
  };

  return (
    <>
      <Helmet>
        <title>{content.hero.h1} | BBK Agency</title>
        <meta name="description" content={content.hero.description} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      
      <Hero content={content.hero} />
      <NichesBlock content={content.niches} />
      
      <Suspense fallback={<div className="h-96" />}>
        <FadeIn><Context content={content.context} /></FadeIn>
        <FadeIn><Technology content={content.technology} /></FadeIn>
        <Cases content={content.cases} />
        <NicheSolutionsBlock content={content.nicheSolutions} />
        <Tariffs content={content.tariffs} />
        {citySlug === 'kuzbass' && <Founder content={content.founder} />}
        <FAQ content={content.faq} />
        <CTA content={{ cta: content.cta, settings: content.settings, legal: content.legal }} />
      </Suspense>

      <ContactMap content={content.contacts} />
    </>
  );
};