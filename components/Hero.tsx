import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ContentConfig } from '../types';

interface HeroProps {
  content: ContentConfig['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-bg">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-ruby/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <div className="inline-block px-6 py-2 rounded-full border border-ruby/30 bg-ruby/10 text-ruby font-bold text-sm mb-10 tracking-widest uppercase ruby-glow">
            {content.badge}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-10 gold-gradient uppercase tracking-tighter">
            {content.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            {content.subheadline}
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="#audit" 
              className="bg-gold hover:bg-gold-dark text-black font-display font-black px-12 py-6 rounded-xl text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] uppercase tracking-tighter"
            >
              {content.ctaText}
            </a>
            
            <div className="flex items-center gap-6 text-left border-l border-white/10 pl-8">
              <div className="text-sm">
                <div className="text-gold font-bold text-lg uppercase tracking-widest">Безотказная формула:</div>
                <div className="text-zinc-500 italic">Блогеры + Карты + Сайт = Лавина трафика</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
