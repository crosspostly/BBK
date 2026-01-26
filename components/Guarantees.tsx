import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { ShieldCheck } from 'lucide-react';

export const Guarantees: React.FC = () => {
  const { guarantees } = content;

  return (
    <Section className="bg-surface/30">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
        {guarantees.h2}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guarantees.items.map((item, idx) => (
          <div key={idx} className="flex gap-4">
             <div className="mt-1 shrink-0">
                <ShieldCheck className="text-success w-6 h-6" />
             </div>
             <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-textSec text-sm leading-relaxed">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
};