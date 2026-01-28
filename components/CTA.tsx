import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { content } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { LegalModal } from './LegalModal';

export const CTA: React.FC = () => {
  const { cta, settings, legal } = content;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Добавляем технические данные для доказательства согласия (ФЗ-152)
    formData.append('consent_timestamp', new Date().toISOString());
    formData.append('consent_url', window.location.href);
    formData.append('policy_version', 'v1.0 (Jan 2026)');

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${settings.notifications.email}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <Section id="cta" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="/images/cta_bg.webp" 
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
            {status === 'success' ? (
                 <div className="glass p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl border-success/20 animate-fade-in-up">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-300">Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
                    <Button 
                        variant="outline" 
                        className="mt-6"
                        onClick={() => setStatus('idle')}
                    >
                        Отправить еще одну
                    </Button>
                 </div>
            ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="glass p-6 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl border-primary/20"
                >
                  <input type="hidden" name="_subject" value="🔥 Новая заявка: ББК Лендинг" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="privacy_policy_agreed" value={agreed ? "yes" : "no"} />

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

                  <div className="flex items-start gap-3 mb-8 text-left group cursor-pointer" onClick={() => setAgreed(!agreed)}>
                    <div className={`mt-1 shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${agreed ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-primary'}`}>
                      {agreed && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-textSec leading-tight">
                      Я даю согласие на <button type="button" onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }} className="underline hover:text-white transition-colors">обработку персональных данных</button> и получение информационных и рекламных сообщений.
                    </p>
                  </div>
                  
                  {status === 'error' && (
                      <p className="text-red-500 mb-4">Ошибка отправки. Попробуйте еще раз или напишите нам в Telegram.</p>
                  )}

                  <Button 
                    fullWidth 
                    type="submit" 
                    className="text-lg uppercase"
                    disabled={status === 'loading' || !agreed}
                  >
                    {status === 'loading' ? 'Отправка...' : cta.btnText}
                  </Button>
                  <p className="mt-4 text-xs text-textSec opacity-60">
                    {cta.disclaimer}
                  </p>
                </form>
            )}
        </FadeIn>
      </div>

      <LegalModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          content={legal.policyText} 
      />
    </Section>
  );
};