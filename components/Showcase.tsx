import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

export const Showcase: React.FC = () => {
  const { showcase } = content;

  return (
    <Section className="bg-bg">
      <FadeIn>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {showcase.h2}
            </h2>
            <p className="text-xl text-textSec">
                {showcase.subtitle}
            </p>
        </div>
      </FadeIn>

      {/* Grid wrapper for horizontal scroll on mobile, grid on desktop */}
      <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-4 pb-8 md:pb-0 no-scrollbar snap-x">
        {showcase.items.map((item, idx) => (
          <FadeIn key={item.id} delay={idx * 100} className="min-w-[260px] md:min-w-0 snap-center">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group bg-surface shadow-2xl">
                <iframe 
                    src={item.embedUrl} 
                    title={item.title}
                    className="absolute inset-0 w-full h-full z-10"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                    allowFullScreen
                ></iframe>
                
                {/* Fallback/Loading background */}
                <div className="absolute inset-0 bg-surface flex items-center justify-center -z-0">
                   <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};