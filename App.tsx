import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { Context } from './components/Context';
import { Technology } from './components/Technology';
import { Showcase } from './components/Showcase';
import { Goals } from './components/Goals';
import { Cases } from './components/Cases';
import { SocialProof } from './components/SocialProof';
import { Comparison } from './components/Comparison';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Founder } from './components/Founder';
import { Tariffs } from './components/Tariffs';
import { Guarantees } from './components/Guarantees';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FadeIn } from './components/ui/FadeIn';

function App() {
  return (
    <div className="bg-bg min-h-screen text-textMain selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />
      <FadeIn delay={200}><StatsStrip /></FadeIn>
      <FadeIn><Context /></FadeIn>
      <FadeIn><Technology /></FadeIn>
      <Showcase /> {/* Showcase has internal animation */}
      <FadeIn><Goals /></FadeIn>
      <div id="cases"><Cases /></div>
      <SocialProof />
      <FadeIn><Comparison /></FadeIn>
      <div id="process"><Process /></div>
      <FadeIn><Team /></FadeIn>
      <Founder />
      <div id="tariffs"><Tariffs /></div>
      <FadeIn><Guarantees /></FadeIn>
      <div id="faq"><FAQ /></div>
      <CTA />
      
      <Footer />
    </div>
  );
}

export default App;