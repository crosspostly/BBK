import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';

export const Comparison: React.FC = () => {
  const { comparison } = content;

  return (
    <Section className="bg-bg">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
        {comparison.h2}
      </h2>

      <div className="overflow-x-auto pb-4">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              {comparison.headers.map((header, idx) => (
                <th key={idx} className={`p-6 border-b border-white/10 ${idx === 3 ? 'text-primary font-bold text-xl bg-primary/5 rounded-t-xl border-primary/30' : 'text-textSec font-normal w-1/4'}`}>
                    {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-bold">{row.param}</td>
                <td className="p-6 text-gray-400">{row.target}</td>
                <td className="p-6 text-gray-400">{row.self}</td>
                <td className="p-6 bg-primary/5 text-white font-bold border-l border-r border-primary/10 relative">
                   {row.band}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};