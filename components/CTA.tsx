import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { content } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const CTA: React.FC = () => {
  const { cta } = content;

  return (
    <Section id="cta" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="/images/cta_bg.jpg" 
            alt="Busy restaurant" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {cta.h2}
            </h2>
            <p className="text-xl text-gray-300 mb-12">
            {cta.text}
            </p>
        </FadeIn>

        <FadeIn delay={200}>
            <form 
              action="https://formsubmit.co/shekhovpavel@gmail.com" 
              method="POST" 
              className="glass p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl border-primary/20"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="🔥 Новая заявка: ББК Лендинг" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Redirect back to site after submission (optional, works better without specific URL if unknown deploy) */}
              {/* <input type="hidden" name="_next" value="https://your-site.com/thanks" /> */}

              <div className="space-y-4 mb-8">
                <input 
                  name="name"
                  type="text" 
                  placeholder="Ваше Имя" 
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />

                <input 
                  name="social"
                  type="text" 
                  placeholder="Ссылка на соцсеть (необязательно)" 
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <Button fullWidth type="submit" className="text-lg uppercase">
                {cta.btnText}
              </Button>
              <p className="mt-4 text-xs text-textSec opacity-60">
                {cta.disclaimer}
              </p>
            </form>
        </FadeIn>
      </div>
    </Section>
  );
};