import React, { useState } from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-bg">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
        Вопросы и ответы
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faq.items.map((item, idx) => (
          <div key={idx} className="glass rounded-xl overflow-hidden">
            <button 
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              onClick={() => toggle(idx)}
            >
              <span className="font-bold text-lg pr-8">{item.q}</span>
              {openIndex === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-gray-500 shrink-0" />}
            </button>
            
            <div 
              className={`px-6 text-textSec text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};