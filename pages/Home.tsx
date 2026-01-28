import React, { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { FadeIn } from '../components/ui/FadeIn';

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
  return (
    <>
      <Hero />
      <FadeIn delay={200}><StatsStrip /></FadeIn>
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-textSec">Загрузка...</div>}>
        <FadeIn><Context /></FadeIn>
        <FadeIn><Technology /></FadeIn>
        <Showcase />
        <FadeIn><Goals /></FadeIn>
        <FadeIn><BusinessValues /></FadeIn>
        <div id="cases"><Cases /></div>
        <FadeIn><Comparison /></FadeIn>
        <div id="process"><Process /></div>
        <Founder />
        <div id="tariffs"><Tariffs /></div>
        <FadeIn><Guarantees /></FadeIn>
        <div id="faq"><FAQ /></div>
        <CTA />
        <ContactMap />
      </Suspense>
    </>
  );
};