import React from 'react';
import { content as defaultContent } from '../constants';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, Info } from 'lucide-react';
import { TariffsContent } from '../types';

interface TariffsProps {
  content?: TariffsContent;
}

export const Tariffs: React.FC<TariffsProps> = ({ content }) => {
  const tariffs = content || defaultContent.tariffs;

  const scrollToCTA = () => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Section className="bg-bg" id="tariffs">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
        {tariffs.h2}
      </h2>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
        {tariffs.items.map((tariff) => (
          <div 
            key={tariff.id}
            className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full
                ${tariff.isHit 
                    ? 'glass border-primary/50 shadow-[0_0_50px_rgba(255,77,0,0.1)] scale-105 z-10' 
                    : 'bg-surface border-white/5 text-gray-400 hover:border-white/10'
                }`}
          >
            {tariff.isHit && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Хит продаж
                </div>
            )}
            
            <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${tariff.isHit ? 'text-white' : 'text-gray-200'}`}>
                    {tariff.name}
                </h3>
                <p className="text-sm text-textSec">{tariff.tagline}</p>
            </div>

            <div className="mb-8">
                <span className={`text-3xl font-bold ${tariff.isHit ? 'text-primary' : 'text-white'}`}>
                    {tariff.price}
                </span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
                {tariff.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <Check size={18} className={tariff.isHit ? 'text-success' : 'text-gray-600'} />
                        <span className="text-sm">{feat}</span>
                    </div>
                ))}
            </div>

            <Button 
                variant={tariff.isHit ? 'primary' : 'outline'} 
                fullWidth
                onClick={scrollToCTA}
            >
                {tariff.btnText}
            </Button>
          </div>
        ))}
      </div>

      {/* Deposit Info */}
      <div className="max-w-4xl mx-auto glass p-6 rounded-xl flex items-start gap-4 border-l-4 border-primary/50">
        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1 shrink-0">
            <Info size={24} />
        </div>
        <div>
            <h4 className="font-bold text-lg mb-2">{tariffs.depositInfo.title}</h4>
            <p className="text-textSec text-sm leading-relaxed">{tariffs.depositInfo.desc}</p>
        </div>
      </div>
    </Section>
  );
};