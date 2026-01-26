import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { content } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const CTA: React.FC = () => {
  const { cta, settings } = content;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      social: formData.get('social') || 'Не указана',
    };

    // 1. Отправка в Telegram
    const { botToken, chatId } = settings.notifications.telegram;
    if (botToken && botToken !== 'YOUR_BOT_TOKEN') {
      const message = `🚀 *Новая заявка ББК*\n\n👤 Имя: ${data.name}\n📞 Тел: ${data.phone}\n🔗 Соцсеть: ${data.social}`;
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      } catch (err) {
        console.error('Telegram send error:', err);
      }
    }

    // 2. Отправка на Email (shekhovpavel@gmail.com) через Formspree
    try {
      await fetch(`https://formspree.io/f/${settings.notifications.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'Новая заявка ББК',
          ...data
        }),
      });
    } catch (err) {
      console.error('Email send error:', err);
    }

    setLoading(false);
    setSubmitted(true);
  };

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

        {submitted ? (
           <FadeIn>
               <div className="glass p-12 rounded-2xl border-success/50 text-center">
                 <div className="text-4xl mb-4">🎉</div>
                 <h3 className="text-2xl font-bold text-success mb-2">Заявка принята!</h3>
                 <p className="text-textSec">Мы свяжемся с вами в течение 15 минут для уточнения деталей.</p>
               </div>
           </FadeIn>
        ) : (
          <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl border-primary/20">
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
                
                <Button fullWidth type="submit" className="text-lg uppercase" disabled={loading}>
                  {loading ? 'Отправка...' : cta.btnText}
                </Button>
                <p className="mt-4 text-xs text-textSec opacity-60">
                  {cta.disclaimer}
                </p>
              </form>
          </FadeIn>
        )}
      </div>
    </Section>
  );
};