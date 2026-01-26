import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';

export const Team: React.FC = () => {
  const { team } = content;

  return (
    <Section className="bg-bg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {team.h2}
        </h2>
        <p className="text-xl text-textSec">
            {team.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {team.members.map((member) => (
            <div key={member.id} className="group text-center">
                <div className="relative mb-6 inline-block">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-primary transition-colors duration-300 mx-auto">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-surface text-primary text-xs font-bold px-3 py-1 rounded-full border border-white/10 shadow-lg">
                        {member.audience}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-textSec">{member.role}</p>
            </div>
        ))}
      </div>
    </Section>
  );
};