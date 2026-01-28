import React from 'react';
import { Section } from './ui/Section';
import { content } from '../constants';
import { MapPin, Send } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const ContactMap: React.FC = () => {
  const { contacts } = content;

  return (
    <Section id="contacts" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <FadeIn>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {contacts.h2}
              </h2>
              <p className="text-xl text-textSec">
                {contacts.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-textSec">Локация</div>
                  <div className="text-lg font-bold">{contacts.address}</div>
                </div>
              </div>

              <a 
                href={contacts.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Send size={24} />
                </div>
                <div>
                  <div className="text-sm text-textSec">Telegram</div>
                  <div className="text-lg font-bold group-hover:text-primary transition-colors">
                    {contacts.telegram}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Map */}
        <FadeIn delay={200} className="w-full h-[400px] md:h-[500px]">
          <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-surface">
            <iframe
              src={contacts.mapIframe}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="fullscreen"
              className="absolute inset-0 w-full h-full transition-all duration-500"
              title="Yandex Map"
            />
             {/* Overlay to catch interaction if needed or style fixes */}
             <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10"></div>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
};
