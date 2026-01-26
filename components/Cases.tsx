import React, { useState } from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export const Cases: React.FC = () => {
  const { cases } = content;
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % cases.items.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + cases.items.length) % cases.items.length);

  const activeCase = cases.items[activeIdx];

  return (
    <Section className="bg-bg">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
        {cases.h2}
      </h2>

      <div className="relative glass rounded-3xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
        
        {/* Text Content */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative z-10 bg-surface/90">
          <div className="mb-2 text-primary text-sm font-bold tracking-widest uppercase">
            CASE STUDY 0{activeCase.id}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">{activeCase.title}</h3>
          <p className="text-textSec mb-8">{activeCase.subtitle}</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-textSec text-xs uppercase mb-1">Вложения</div>
              <div className="text-xl font-bold">{activeCase.stats.invested}</div>
            </div>
            {activeCase.stats.roi && (
              <div>
                <div className="text-textSec text-xs uppercase mb-1">ROI</div>
                <div className="text-xl font-bold text-success">{activeCase.stats.roi}</div>
              </div>
            )}
             <div>
              <div className="text-textSec text-xs uppercase mb-1">Результат</div>
              <div className="text-xl font-bold">{activeCase.stats.result}</div>
            </div>
             {activeCase.stats.revenue && (
              <div>
                <div className="text-textSec text-xs uppercase mb-1">Выручка</div>
                <div className="text-xl font-bold">{activeCase.stats.revenue}</div>
              </div>
            )}
             {activeCase.stats.cpa && (
              <div>
                <div className="text-textSec text-xs uppercase mb-1">CPA</div>
                <div className="text-xl font-bold text-success">{activeCase.stats.cpa}</div>
              </div>
            )}
          </div>

          <blockquote className="border-l-2 border-primary pl-4 italic text-gray-300">
            "{activeCase.review}"
          </blockquote>

          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Image/Video Area */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <img 
              src={activeCase.image} 
              alt={activeCase.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="fill-white ml-1" />
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};