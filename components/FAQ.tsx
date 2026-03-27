import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { FAQContent } from '../types';

interface FAQProps {
  content: FAQContent;
}

export const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tighter">
            ОТВЕТЫ НА <span className="text-primary">ВОПРОСЫ</span>
          </h2>
          <p className="text-textSec">
            Снимаем возражения и объясняем, как работает наша лавина трафика.
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((item, idx) => (
            <div 
              key={idx}
              className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === idx ? 'border-primary/50 bg-primary/5' : 'border-white/5'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-white' : 'text-textSec group-hover:text-white'}`}>
                  {item.q}
                </span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={24}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-8 text-textSec leading-relaxed border-t border-white/5 pt-6">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
