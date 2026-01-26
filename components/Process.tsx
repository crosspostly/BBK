import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';

export const Process: React.FC = () => {
  const { process } = content;

  return (
    <Section className="bg-surface/30">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 max-w-2xl">
            {process.h2}
        </h2>
        <p className="text-textSec text-lg">
            {process.subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Line for Desktop */}
        <div className="hidden md:block absolute top-20 left-0 w-full h-1 bg-white/10 rounded-full" />
        
        <div className="grid md:grid-cols-5 gap-8">
            {process.steps.map((step, idx) => (
                <div key={idx} className="relative group pt-0 md:pt-14">
                    {/* Circle */}
                    <div className="w-12 h-12 rounded-full bg-surface border-2 border-white/20 text-textSec font-bold flex items-center justify-center mb-6 relative z-10 group-hover:border-primary group-hover:text-primary transition-colors mx-auto md:mx-0 md:absolute md:top-0 md:left-0 md:-translate-y-1/2">
                        {idx + 1}
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-textSec mb-2 h-auto md:h-20">{step.desc}</p>
                        {step.note && (
                            <div className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 py-1 px-2 rounded inline-block">
                                {step.note}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};