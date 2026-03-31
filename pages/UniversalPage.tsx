import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { regions } from '../constants_universal';

// --- UI Components ---
import { FadeIn } from '../components/ui/FadeIn';

// --- Page Section Components ---
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { Problems } from '../components/Problems';
import { Advantages } from '../components/Advantages';
import { Comparison } from '../components/Comparison';
import { Process } from '../components/Process';
import { SystemFeatures } from '../components/SystemFeatures';
import { Showcase } from '../components/Showcase';
import { Cases } from '../components/Cases';
import { MidPageCTA } from '../components/MidPageCTA';
import { Guarantees } from '../components/Guarantees';
import { Niches } from '../components/Niches';
import { Team } from '../components/Team';
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
        <title>Клуб локального маркетинга | Приводим клиентов без переплат за рекламу</title>
        <meta name="description" content="Помогаем офлайн-бизнесу получать постоянных клиентов через микроблогеров, Яндекс Карты и авто-SEO." />
      </Helmet>

      <Hero />

      <StatsStrip content={activeContent.statsStrip} />

      <FadeIn>
        <Problems />
      </FadeIn>

      <FadeIn>
        <Advantages content={activeContent.advantages} />
      </FadeIn>

      <FadeIn>
        <Comparison content={activeContent.comparison} />
      </FadeIn>

      <FadeIn>
        <Process content={activeContent.process} />
      </FadeIn>

      <FadeIn>
        <SystemFeatures content={activeContent.systemFeatures} />
      </FadeIn>

      <FadeIn>
        <Showcase content={activeContent.showcase} />
      </FadeIn>

      <FadeIn>
        <Cases content={activeContent.cases} />
      </FadeIn>

      <FadeIn>
        <MidPageCTA />
      </FadeIn>

      <FadeIn>
        <Guarantees content={activeContent.guarantees} />
      </FadeIn>

      <Niches content={activeContent.niches} />

      <FadeIn>
        <Team content={activeContent.team} />
      </FadeIn>

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
