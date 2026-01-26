import React from 'react';
import { content } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const { statsStrip } = content;

  return (
    <div className="bg-surface border-y border-white/5 py-8 md:py-12 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-textSec text-sm md:text-base mb-8 uppercase tracking-widest font-semibold">
          {statsStrip.title}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          {statsStrip.items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className={`text-5xl md:text-6xl font-display font-bold ${item.color} mb-2 flex items-center gap-4`}>
                {item.value}
                {item.value.includes('+') ? <TrendingUp size={40} /> : <TrendingDown size={40} />}
              </div>
              <div className="text-white font-bold text-lg">{item.label}</div>
              <div className="text-textSec text-sm">{item.subLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};