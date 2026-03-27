import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { regions } from '../constants_universal';

// --- UI Components ---
import { FadeIn } from '../components/ui/FadeIn';

// --- Page Section Components ---
import { Hero } from '../components/Hero';
import { Advantages } from '../components/Advantages';
import { SystemFeatures } from '../components/SystemFeatures';
import { Niches } from '../components/Niches';
import { Tariffs } from '../components/Tariffs';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const UniversalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const citySlug = (slug && regions[slug]) ? slug : 'nn';
  const activeContent = regions[citySlug];

  return (
    <div className="bg-bg min-h-screen text-zinc-100">
      <Helmet>
        <title>{activeContent.hero.headline} | {activeContent.hero.badge}</title>
        <meta name="description" content={activeContent.hero.subheadline} />
      </Helmet>
      
      <Hero content={activeContent.hero} />
      
      <FadeIn>
        <Advantages content={activeContent.advantages} />
      </FadeIn>

      <FadeIn>
        <SystemFeatures content={activeContent.systemFeatures} />
      </FadeIn>

      <Niches content={activeContent.niches} />
      
      <Tariffs content={activeContent.pricing} offer={activeContent.promoOffer} />
      
      <FAQ content={activeContent.faq} />
      
      <CTA content={{ 
        cta: activeContent.cta, 
        settings: activeContent.settings, 
        legal: activeContent.legal 
      }} />
    </div>
  );
};
