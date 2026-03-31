import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  content: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-bg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 gold-gradient uppercase tracking-tighter">
            ОТВЕТЫ НА <span className="text-white italic">ВОПРОСЫ</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Разбираем технические и юридические нюансы работы клуба.
          </p>
        </div>

        <div className="space-y-6">
          {content.map((item, idx) => (
            <div 
              key={idx}
              className={`glass rounded-3xl overflow-hidden border transition-all duration-500 ${
                openIndex === idx ? 'border-gold/40 bg-gold/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-10 py-8 text-left flex justify-between items-center group"
              >
                <span className={`font-display font-bold text-xl transition-colors duration-300 ${openIndex === idx ? 'text-gold' : 'text-zinc-400 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`text-gold transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={28}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10 pb-10 text-zinc-400 leading-relaxed text-lg border-t border-white/5 pt-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
