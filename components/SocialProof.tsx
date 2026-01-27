import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

export const SocialProof: React.FC = () => {
  const { socialProof } = content;

  return (
    <Section className="bg-surface/20">
      <FadeIn>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {socialProof.h2}
            </h2>
            <p className="text-xl text-textSec">
                {socialProof.subtitle}
            </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {socialProof.reviews.map((review, idx) => (
          <FadeIn key={review.id} delay={idx * 150}>
            <div className="glass p-2 rounded-2xl border border-white/5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <img 
                    src={`/images/reviews/${review.id}.jpg`} 
                    alt={`Review by ${review.author}`} 
                    className="w-full h-auto rounded-xl shadow-lg border border-white/5"
                />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};