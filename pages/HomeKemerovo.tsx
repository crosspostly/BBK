import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { FadeIn } from '../components/ui/FadeIn';
import { content } from '../constants';

// Lazy load heavy components
const Context = lazy(() => import('../components/Context').then(module => ({ default: module.Context })));
const Technology = lazy(() => import('../components/Technology').then(module => ({ default: module.Technology })));
const Showcase = lazy(() => import('../components/Showcase').then(module => ({ default: module.Showcase })));
const Goals = lazy(() => import('../components/Goals').then(module => ({ default: module.Goals })));
const BusinessValues = lazy(() => import('../components/BusinessValues').then(module => ({ default: module.BusinessValues })));
const Cases = lazy(() => import('../components/Cases').then(module => ({ default: module.Cases })));
const Comparison = lazy(() => import('../components/Comparison').then(module => ({ default: module.Comparison })));
const Process = lazy(() => import('../components/Process').then(module => ({ default: module.Process })));
const Founder = lazy(() => import('../components/Founder').then(module => ({ default: module.Founder })));
const Tariffs = lazy(() => import('../components/Tariffs').then(module => ({ default: module.Tariffs })));
const Guarantees = lazy(() => import('../components/Guarantees').then(module => ({ default: module.Guarantees })));
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const CTA = lazy(() => import('../components/CTA').then(module => ({ default: module.CTA })));
import { ContactMap } from '../components/ContactMap';

export const Home: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": `ББК - Банда Блогеров ${content.hero.city}`,
    "image": "/images/hero_bg.webp",
    "description": `Продвижение ресторанов и кафе в ${content.hero.city} через микроблогеров. Организация рекламных кампаний под ключ.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": content.contacts.address.replace('г. ', ''),
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.354727, // Kemerovo latitude
      "longitude": 86.087234 // Kemerovo longitude
    },
    "url": "https://bbk-alpha.vercel.app/kuzbass",
    "priceRange": "7900 - 39000 RUB",
    "founder": {
        "@type": "Person",
        "name": content.founder.profile.name
    }
  };

  return (
    <>
      <Helmet>
        <title>Продвижение ресторанов и кафе в {content.hero.city} | Реклама у блогеров BBK</title>
        <meta name="description" content={`Привлечем гостей в ваше заведение за 3 дня. База из 33+ локальных фуд-блогеров ${content.hero.city}. Оплата за результат, кейсы с ROI 400%. Бесплатный аудит.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Hero content={content.hero} />
      <FadeIn delay={200}><StatsStrip content={content.statsStrip} /></FadeIn>
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-textSec">Загрузка...</div>}>
        <FadeIn><Context content={content.context} /></FadeIn>
        <FadeIn><Technology content={content.technology} /></FadeIn>
        <Showcase content={content.showcase} />
        <FadeIn><Goals content={content.goals} /></FadeIn>
        <FadeIn><BusinessValues content={content.businessValues} /></FadeIn>
        <div id="cases"><Cases content={content.cases} /></div>
        <FadeIn><Comparison content={content.comparison} /></FadeIn>
        <div id="process"><Process content={content.process} /></div>
        <Founder content={content.founder} />
        <div id="tariffs"><Tariffs content={content.tariffs} /></div>
        <FadeIn><Guarantees content={content.guarantees} /></FadeIn>
        <div id="faq"><FAQ content={content.faq} /></div>
        <CTA content={{ cta: content.cta, settings: content.settings, legal: content.legal }} />
        <ContactMap content={content.contacts} />
      </Suspense>
    </>
  );
};