import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const Context: React.FC = () => {
  const { context } = content;

  const chartData = [
    { name: 'Реклама', value: context.solution.stats.ads, color: '#1E1E24' },
    { name: 'Блогеры', value: context.solution.stats.influencers, color: '#FF4D00' },
  ];

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

        {/* Solution & Chart */}
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
                
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 40 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                        dataKey="name" 
                        type="category" 
                        tick={{ fill: '#9CA3AF', fontSize: 14 }} 
                        width={80}
                        axisLine={false}
                        tickLine={false}
                        />
                        <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ backgroundColor: '#1E1E24', borderColor: '#333', color: '#fff' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                             <Cell fill="#3F3F46" />
                             <Cell fill="#00E096" />
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="font-bold text-white mb-2">{context.solution.conclusion}</p>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-success font-bold">{context.solution.stats.influencers}% Доверие блогерам</span>
                        <span className="text-gray-500">{context.solution.stats.ads}% Прямая реклама</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};