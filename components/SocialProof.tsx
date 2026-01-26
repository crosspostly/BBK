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
            <div className="glass p-6 rounded-2xl border border-white/5 relative">
                {/* Messenger Header Mockup */}
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
                        ${review.platform === 'whatsapp' ? 'bg-green-600' : 
                          review.platform === 'telegram' ? 'bg-blue-500' : 'bg-pink-600'
                        }`}
                    >
                        {review.author[0]}
                    </div>
                    <div>
                        <div className="font-bold text-sm">{review.author}</div>
                        <div className="text-xs text-textSec opacity-70">
                            {review.platform === 'whatsapp' ? 'WhatsApp' : 
                             review.platform === 'telegram' ? 'Telegram' : 'Instagram'}
                        </div>
                    </div>
                </div>
                
                {/* Message Body */}
                <div className="bg-surface/50 p-3 rounded-lg rounded-tl-none inline-block max-w-[90%] text-sm leading-relaxed text-gray-200">
                    {review.text}
                    <div className="text-[10px] text-right opacity-40 mt-1">10:42</div>
                </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};