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
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-surface">
                {/* 
                   Universal Iframe for VK Video / Rutube / etc.
                   Requires just the 'src' URL.
                   Permissions added for full functionality.
                */}
                <iframe 
                    src={item.embedUrl} 
                    title={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; clipboard-write" 
                ></iframe>
                
                {/* Gradient overlay for text readability */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <div className="text-white font-bold text-sm shadow-black drop-shadow-md">{item.title}</div>
                </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};