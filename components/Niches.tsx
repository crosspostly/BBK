import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { ContentConfig } from '../types';
import { Check } from 'lucide-react';

interface NichesProps {
  content: ContentConfig['niches'];
}

export const Niches: React.FC<NichesProps> = ({ content }) => {
  return (
    <Section className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 gold-gradient uppercase tracking-tighter">
            ЦЕЛЕВЫЕ <span className="text-white italic">НИШИ</span>
          </h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto font-medium">
            Отрасли, где наш подход "малой крови" и живых рекомендаций дает максимальный ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {content.map((niche) => (
            <FadeIn key={niche.id}>
              <div className="glass p-12 md:p-16 rounded-[3rem] border-gold/10 hover:border-gold/30 transition-all group">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 uppercase tracking-tighter group-hover:text-gold transition-colors">
                  {niche.title}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {niche.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-4 text-zinc-400 font-medium group-hover:text-zinc-200 transition-colors">
                      <Check className="text-gold shrink-0" size={20} />
                      <span className="text-sm md:text-base leading-tight">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};
