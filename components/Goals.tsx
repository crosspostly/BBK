import React from 'react';
import { content as defaultContent } from '../constants';
import { Section } from './ui/Section';
import { ArrowRight, Sparkles, Armchair, Percent, ShieldCheck, ThumbsUp, Users } from 'lucide-react';
import { GoalsContent } from '../types';

interface GoalsProps {
  content?: GoalsContent;
}

export const Goals: React.FC<GoalsProps> = ({ content }) => {
  const goals = content || defaultContent.goals;

  const iconMap: Record<string, React.ReactNode> = {
    sparkles: <Sparkles size={24} />,
    sofa: <Armchair size={24} />,
    percent: <Percent size={24} />,
    shield: <ShieldCheck size={24} />,
    thumbsUp: <ThumbsUp size={24} />,
    users: <Users size={24} />,
  };

  const scrollToCTA = () => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {goals.h2}
        </h2>
        <p className="text-xl text-textSec max-w-2xl mx-auto">
            {goals.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.items.map((item, idx) => {
          return (
            <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer flex flex-col h-full" onClick={scrollToCTA}>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-bg p-3 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                  {iconMap[item.icon]}
                </div>
                <div className="text-xs font-bold tracking-wider text-textSec uppercase bg-white/5 px-2 py-1 rounded">
                  {item.subtitle}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-textSec text-sm mb-6 flex-grow">
                {item.desc}
              </p>
              
              <div className="flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto pt-4 border-t border-white/5">
                {item.btn} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};