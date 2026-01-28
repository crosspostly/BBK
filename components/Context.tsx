import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const Context: React.FC = () => {
  const { context } = content;

  return (
    <Section className="bg-bg">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {context.h2}
        </h2>
        <p className="text-xl text-textSec">
            {context.subH2}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Problems */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-8 border-l-4 border-red-500/50 h-full">
            <h3 className="text-xl font-bold text-red-500 mb-8 flex items-center gap-2">
              <AlertCircle /> Проблемы рынка
            </h3>
            <div className="space-y-8">
              {context.problems.map((prob, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-white text-lg mb-2">{prob.title}</h4>
                  <p className="text-textSec text-base leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution & Stats */}
        <div className="flex flex-col gap-6">
            <div className="p-8 border-l-4 border-success/50 bg-success/5 rounded-r-2xl">
                <h3 className="text-xl font-bold text-success mb-2 flex items-center gap-2">
                <CheckCircle2 /> Наш подход
                </h3>
                <p className="text-gray-300 leading-relaxed">
                {context.solution.text}
                </p>
            </div>

            <div className="glass rounded-2xl p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Edelman Trust Barometer</h3>
                <p className="text-textSec text-sm mb-6">Уровень доверия аудитории к источникам</p>
                
                <div className="space-y-6 my-4">
                  {/* Bar 1: Influencers */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-bold">Блогеры / Рекомендации</span>
                      <span className="text-success font-bold">{context.solution.stats.influencers}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-success h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${context.solution.stats.influencers}%` }}
                      />
                    </div>
                  </div>

                  {/* Bar 2: Ads */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Прямая реклама (Таргет)</span>
                      <span className="text-gray-400">{context.solution.stats.ads}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gray-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${context.solution.stats.ads}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="font-bold text-white mb-2">{context.solution.conclusion}</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};