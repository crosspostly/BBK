import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { Zap, Calendar, MessageCircle } from 'lucide-react';

interface MidPageCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const MidPageCTA: React.FC<MidPageCTAProps> = ({
  title = "Готовы заполнить зал в будни?",
  subtitle = "Осталось 3 свободных места для новых клиентов в этом месяце. Запуск кампании через 48 часов после аудита.",
  buttonText = "Забронировать бесплатный аудит"
}) => {
  return (
    <Section id="mid-cta" className="py-20">
      <FadeIn>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ruby/90 to-ruby-dark/90 border border-ruby/50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Осталось 3 места в этом месяце</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-3 text-white/90">
                <Calendar className="w-5 h-5 text-gold" />
                <span className="font-bold">Запуск за 48 часов</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/90">
                <MessageCircle className="w-5 h-5 text-gold" />
                <span className="font-bold">Первые клиенты через 3-7 дней</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/90">
                <Zap className="w-5 h-5 text-gold" />
                <span className="font-bold">ROI 400-800%</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#cta"
              className="inline-block bg-gold hover:bg-gold-dark text-black font-display font-black px-12 py-6 rounded-xl text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] uppercase tracking-tighter"
            >
              {buttonText}
            </a>

            {/* Trust Text */}
            <p className="mt-6 text-sm text-white/60">
              Это бесплатно и ни к чему не обязывает. Персональный план трафика за 30 минут.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
