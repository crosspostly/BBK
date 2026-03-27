import React from 'react';
import { Target, TrendingUp, Settings } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { ContentConfig } from '../types';

const iconMap: { [key: string]: any } = {
  Target: <Target size={40} className="text-gold" />,
  TrendingUp: <TrendingUp size={40} className="text-gold" />,
  Settings: <Settings size={40} className="text-gold" />
};

interface AdvantagesProps {
  content: ContentConfig['advantages'];
}

export const Advantages: React.FC<AdvantagesProps> = ({ content }) => {
  return (
    <Section className="bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col gap-6 p-10 glass rounded-[2rem] border-gold/10 hover:border-gold/30 transition-all group">
                <div className="w-20 h-20 rounded-2xl bg-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};
