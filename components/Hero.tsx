import React from 'react';
import { content as defaultContent } from '../constants';
import { Button } from './ui/Button';
import { Check, ArrowDown } from 'lucide-react';
import { HeroContent } from '../types';

interface HeroProps {
  content?: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content: heroContent }) => {
  const hero = heroContent || defaultContent.hero;

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
                 <img 
                    src="/images/hero_bg.webp" 
                    alt="Restaurant ambiance" 
                    className="w-full h-full object-cover opacity-40 scale-105"
                  />        
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 bg-noise opacity-[0.15] brightness-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-primary/5 mix-blend-color" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-sm md:text-base font-bold tracking-widest text-textSec uppercase">
            <span className="text-primary">📍</span>
            <span>{hero.brand}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            {hero.h1}
          </h1>

          <p className="text-xl md:text-2xl text-textSec mb-8 font-light max-w-2xl border-l-4 border-primary pl-6">
            {hero.subtitle}
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {hero.description}
          </p>

          <div className="space-y-3 mb-10">
            {hero.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <Check className="text-primary mt-1 min-w-[20px]" size={20} />
                    <span className="text-gray-200">{benefit}</span>
                </div>
            ))}
          </div>

          <Button onClick={scrollToCTA}>
            {hero.btnText}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:block">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};