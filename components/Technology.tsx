import React from 'react';
import { content as defaultContent } from '../constants';
import { Section } from './ui/Section';
import { Shield, Radio, MapPin } from 'lucide-react';
import { TechnologyContent } from '../types';

interface TechnologyProps {
  content?: TechnologyContent;
}

export const Technology: React.FC<TechnologyProps> = ({ content }) => {
  const technology = content || defaultContent.technology;

  const icons = {
    shield: <Shield className="w-8 h-8 text-primary" />,
    wave: <Radio className="w-8 h-8 text-primary" />,
    map: <MapPin className="w-8 h-8 text-primary" />,
  };

  return (
    <Section className="bg-bg">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 max-w-3xl">
        {technology.h2}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {technology.steps.map((step, idx) => (
          <div key={idx} className="group relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <div className="glass p-8 rounded-2xl relative h-full hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-transparent hover:border-t-primary flex flex-col">
              <div className="mb-6 bg-surface p-4 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                {icons[step.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-textSec leading-relaxed flex-grow">
                {step.desc}
              </p>
              <div className="absolute top-4 right-4 text-6xl font-display font-bold text-white/5 select-none">
                0{idx + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};