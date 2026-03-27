import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { ContentConfig } from '../types';
import { Sparkles, MapPin, Search, Users } from 'lucide-react';

const iconMap = [
  <Sparkles className="text-ruby" size={32} />,
  <MapPin className="text-ruby" size={32} />,
  <Search className="text-ruby" size={32} />,
  <Users className="text-ruby" size={32} />
];

interface SystemFeaturesProps {
  content: ContentConfig['systemFeatures'];
}

export const SystemFeatures: React.FC<SystemFeaturesProps> = ({ content }) => {
  return (
    <Section className="bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 gold-gradient uppercase tracking-tighter">
            КАК РАБОТАЕТ <span className="text-white italic">СИСТЕМА</span>
          </h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto">
            Мы объединили силу влияния, географическую репутацию и IT-автоматизацию в единый цикл.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {content.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-ruby/30 transition-all">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-ruby/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {iconMap[idx] || iconMap[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Accent Decor */}
                <div className="absolute top-4 right-8 text-white/5 font-display font-black text-6xl group-hover:text-ruby/10 transition-colors">
                  0{idx + 1}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};
