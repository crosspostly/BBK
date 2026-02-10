import React from 'react';
import { content as defaultContent } from '../constants';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { BusinessValuesContent } from '../types';

interface BusinessValuesProps {
  content?: BusinessValuesContent;
}

export const BusinessValues: React.FC<BusinessValuesProps> = ({ content }) => {
  const businessValues = content || defaultContent.businessValues;

  return (
    <Section className="bg-bg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 max-w-4xl mx-auto">
          {businessValues.h2}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {businessValues.items.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="glass p-8 rounded-3xl h-full border border-white/5 hover:border-primary/30 transition-colors group">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <div className="text-red-400 font-bold mb-1 uppercase text-xs tracking-wider">Проблема:</div>
                  <p className="text-textSec">{item.problem}</p>
                </div>
                
                <div>
                  <div className="text-primary font-bold mb-1 uppercase text-xs tracking-wider">Решение:</div>
                  <p className="text-white">{item.solution}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                   <div className="text-success font-bold mb-1 uppercase text-xs tracking-wider">Результат:</div>
                   <p className="text-white font-medium">{item.result}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};