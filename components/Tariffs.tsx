import React from 'react';
import { Section } from './ui/Section';
import { Check, Flame, Zap } from 'lucide-react';
import { TariffsContent } from '../types';

interface TariffsProps {
  content: TariffsContent;
}

export const Tariffs: React.FC<TariffsProps> = ({ content }) => {
  return (
    <Section className="bg-bg" id="tariffs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 uppercase tracking-tighter">
            {content.h2}
          </h2>
          
          {/* FOMO BANNER */}
          <div className="mt-8 inline-block glass border-primary/50 bg-primary/10 p-6 md:p-8 rounded-3xl animate-pulse">
            <h3 className="text-primary text-xl md:text-2xl font-bold flex items-center justify-center gap-3 mb-2">
              <Flame fill="currentColor" /> {content.depositInfo.title}
            </h3>
            <p className="text-white font-medium max-w-2xl mx-auto">
              {content.depositInfo.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {content.items.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border-2 transition-all duration-500 hover:-translate-y-2 ${
                tier.isHit 
                ? 'bg-primary/5 border-primary shadow-[0_0_50px_rgba(255,77,0,0.15)] scale-105 z-10' 
                : 'bg-surface/30 border-white/5 hover:border-white/10'
              }`}
            >
              {tier.isHit && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest">
                  Самый популярный
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2 uppercase">{tier.name}</h3>
                <p className="text-textSec text-sm italic">{tier.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-display font-black text-white">{tier.price}</span>
                </div>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                {/* Обычные фичи */}
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-textSec leading-relaxed">
                      <Check className="text-primary mt-1 shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* БОНУСНЫЕ ФИЧИ */}
                {tier.bonusFeatures && tier.bonusFeatures.length > 0 && (
                  <ul className="space-y-4 pt-4 border-t border-white/10">
                    {tier.bonusFeatures.map((bonus, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-bold text-success leading-relaxed">
                        <Zap className="text-success mt-1 shrink-0" size={18} fill="currentColor" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a 
                href="https://t.me/electromom"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-display font-bold text-center transition-all ${
                  tier.isHit
                  ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]'
                  : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {tier.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
