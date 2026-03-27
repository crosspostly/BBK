import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { regions } from '../constants_universal';

// --- UI Components ---
import { FadeIn } from '../components/ui/FadeIn';
import { Section } from '../components/ui/Section';

// --- Page Section Components ---
import { Hero } from '../components/Hero';
import { Context } from '../components/Context';
import { Technology } from '../components/Technology';
import { Cases } from '../components/Cases';
import { Tariffs } from '../components/Tariffs';
import { Founder } from '../components/Founder';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { ContactMap } from '../components/ContactMap';
import { SwotAnalysis } from '../components/SwotAnalysis';
import { Mechanics } from '../components/Mechanics';

// --- NEW Universal Components ---

const NichesBlock: React.FC<{ content: any }> = ({ content }) => {
    const iconMap: { [key: string]: string } = {
        utensils: '🍽️',
        dumbbell: '💪',
        sparkles: '💅',
        shoppingBag: '🛍️',
        briefcase: '🛠️',
    };
    if (!content || !content.items) return null;
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

const NicheSolutionsBlock: React.FC<{ content: any }> = ({ content }) => {
    const [activeTab, setActiveTab] = React.useState(0);
    if (!content || !content.items || content.items.length === 0) return null;
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
                                {content.items[activeTab]?.tasks?.map((task: string, i: number) => (
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

export const UniversalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Приоритет: 1. slug из URL, 2. 'nn' по умолчанию (для корня /)
  const citySlug = (slug && regions[slug]) ? slug : 'nn';
  const activeContent = regions[citySlug];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": `ББК - Банда Блогеров ${activeContent.hero.city}`,
    "image": "/images/hero_bg.webp",
    "description": activeContent.hero.description,
    "address": { "@type": "PostalAddress", "addressLocality": activeContent.hero.city, "addressCountry": "RU" },
    "url": `https://bbk-alpha.vercel.app/${citySlug === 'nn' ? '' : citySlug}`,
  };

  return (
    <>
      <Helmet>
        <title>{activeContent.hero.h1} | BBK Agency</title>
        <meta name="description" content={activeContent.hero.description} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      
      <Hero content={activeContent.hero} />
      <NichesBlock content={activeContent.niches} />
      
      <FadeIn><Context content={activeContent.context} /></FadeIn>
      <FadeIn><Technology content={activeContent.technology} /></FadeIn>
      <SwotAnalysis />
      <Mechanics />
      <Cases content={activeContent.cases} />
      <NicheSolutionsBlock content={activeContent.nicheSolutions} />
      <Tariffs content={activeContent.tariffs} />
      {citySlug === 'kuzbass' && <Founder content={activeContent.founder} />}
      <FAQ content={activeContent.faq} />
      <CTA content={{ cta: activeContent.cta, settings: activeContent.settings, legal: activeContent.legal }} />

      <ContactMap content={activeContent.contacts} />
    </>
  );
};