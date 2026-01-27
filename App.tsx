import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { Context } from './components/Context';
import { Technology } from './components/Technology';
import { Goals } from './components/Goals';
import { SocialProof } from './components/SocialProof';
import { Comparison } from './components/Comparison';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Founder } from './components/Founder';
import { Guarantees } from './components/Guarantees';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FadeIn } from './components/ui/FadeIn';

// Lazy load heavy components
const Showcase = lazy(() => import('./components/Showcase').then(module => ({ default: module.Showcase })));
const Cases = lazy(() => import('./components/Cases').then(module => ({ default: module.Cases })));
const Tariffs = lazy(() => import('./components/Tariffs').then(module => ({ default: module.Tariffs })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));

function App() {
  return (
    <div className="bg-bg min-h-screen text-textMain selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />
      <FadeIn delay={200}><StatsStrip /></FadeIn>
      <FadeIn><Context /></FadeIn>
      <FadeIn><Technology /></FadeIn>
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-textSec">Загрузка...</div>}>
        <Showcase />
        <FadeIn><Goals /></FadeIn>
        <div id="cases"><Cases /></div>
        <SocialProof />
        <FadeIn><Comparison /></FadeIn>
        <div id="process"><Process /></div>
        {/* <FadeIn><Team /></FadeIn> */}
        <Founder />
        <div id="tariffs"><Tariffs /></div>
        <FadeIn><Guarantees /></FadeIn>
        <div id="faq"><FAQ /></div>
      </Suspense>

      <CTA />
      <Footer />
    </div>
  );
}

export default App;