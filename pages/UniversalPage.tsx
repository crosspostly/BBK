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
    if (!content || !content.items || content.items.length === 0) return null;
    return (
        <Section className="bg-surface/30">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 uppercase tracking-tight leading-tight">
                    {content.h2}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {content.items.map((item: any) => (
                        <div key={item.niche} className="glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="text-7xl md:text-8xl shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white uppercase tracking-tighter">
                                        {item.niche}
                                    </h3>
                                    <p className="text-textSec mb-8 italic leading-relaxed text-lg">
                                        {item.desc}
                                    </p>
                                    <ul className="space-y-4">
                                        {item.tasks?.map((task: string, i: number) => (
                                            <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium">
                                                <span className="bg-primary/20 text-primary p-1 rounded-full">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </span>
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
};

// Remove the old NicheSolutionsBlock and SWOT
export const UniversalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
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
      
      <NichesBlock content={activeContent.nicheSolutions} />
      
      <FadeIn><Technology content={activeContent.technology} /></FadeIn>
      
      <Mechanics />
      
      <Tariffs content={activeContent.tariffs} />
      
      <FAQ content={activeContent.faq} />
      
      <CTA content={{ cta: activeContent.cta, settings: activeContent.settings, legal: activeContent.legal }} />

      <ContactMap content={activeContent.contacts} />
    </>
  );
};