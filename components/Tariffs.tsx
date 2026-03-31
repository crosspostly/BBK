import React from 'react';
import { Section } from './ui/Section';
import { Check, Flame, Star, Clock, Users } from 'lucide-react';
import { ContentConfig, Tariff } from '../types';
import { getDynamicDeadline } from '../constants_universal';

interface TariffsProps {
  content: Tariff[];
  offer: ContentConfig['promoOffer'];
}

export const Tariffs: React.FC<TariffsProps> = ({ content, offer }) => {
  return (
    <Section className="bg-bg" id="tariffs">
      <div className="max-w-7xl mx-auto px-4">
        {/* URGENCY BANNER */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ruby/20 border border-ruby/40 text-ruby font-bold text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>Осталось 3 места для новых клиентов в этом месяце</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Запуск кампании через 48 часов после аудита
          </p>
        </div>

        {/* PROMO BANNER */}
        <div className="mb-24 relative overflow-hidden bg-ruby/5 border border-ruby/30 p-8 md:p-12 rounded-[3rem] ruby-glow">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Flame size={120} />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-4 justify-center md:justify-start">
              <span className="text-ruby"><Flame fill="currentColor" /></span> {offer.title}
            </h3>
            <p className="text-zinc-300 text-xl md:text-2xl mb-8 font-medium">
              {offer.deadlineText} <span className="text-ruby font-black underline decoration-ruby/50 underline-offset-8">{getDynamicDeadline()}!</span>
            </p>
            <ul className="space-y-4">
              {offer.bonuses.map((bonus, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400 text-lg">
                  <span className="w-2 h-2 rounded-full bg-ruby"></span>
                  {bonus}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {content.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${
                tier.isPopular 
                ? 'bg-gold/5 border-gold shadow-[0_0_60px_rgba(212,175,55,0.15)] scale-105 z-10' 
                : 'bg-zinc-900/30 border-white/5 hover:border-white/10'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-black px-8 py-2 rounded-full uppercase tracking-[0.3em] flex items-center gap-2">
                  <Star size={12} fill="currentColor" /> Хит продаж
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight text-white">{tier.name}</h3>
                <p className="text-zinc-500 text-sm italic leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-display font-black text-gold">{tier.price}</span>
                  <span className="text-zinc-600 text-sm font-bold uppercase tracking-widest">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-zinc-400 leading-relaxed font-medium">
                    <Check className="text-gold mt-1 shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://t.me/daoqub`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-6 rounded-2xl font-display font-black text-center transition-all uppercase tracking-widest text-sm ${
                  tier.isPopular
                  ? 'bg-gold text-black hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
