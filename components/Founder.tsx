import React from 'react';
import { content } from '../constants';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

export const Founder: React.FC = () => {
  const { founder } = content;
  const { profile } = founder;

  return (
    <Section className="bg-bg">
      <div className="glass rounded-3xl p-8 md:p-16 border-primary/20 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            {/* Image */}
            <FadeIn direction="none" className="md:w-1/3 shrink-0">
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 mx-auto">
                        <img src={profile.image} alt={profile.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface px-6 py-2 rounded-full border border-white/10 whitespace-nowrap">
                        <span className="font-display font-bold text-primary">{profile.name}</span>
                    </div>
                </div>
            </FadeIn>

            {/* Text */}
            <div className="md:w-2/3 text-center md:text-left">
                <FadeIn delay={100}>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                        {profile.role}
                    </h2>
                    <div className="text-primary font-bold italic mb-8 text-lg">
                        "{profile.quote}"
                    </div>
                    
                    <div className="space-y-4 text-textSec leading-relaxed">
                        {profile.text.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start">
                       {profile.signatureImage && (
                           <img src={profile.signatureImage} alt="Signature" className="h-12 opacity-50 invert" />
                       )}
                       <div className="text-sm opacity-50">
                            Пишите лично:<br/>
                            <a href={`mailto:${profile.contactEmail}`} className="hover:text-primary transition-colors">{profile.contactEmail}</a>
                       </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </div>
    </Section>
  );
};