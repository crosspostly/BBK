import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { TrendingUp, Target, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-bg">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-ruby/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <div className="inline-block px-6 py-2 rounded-full border border-ruby/30 bg-ruby/10 text-ruby font-bold text-sm mb-10 tracking-widest uppercase ruby-glow">
            Клуб локального маркетинга
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-zinc-100">
            Приводим <span className="text-ruby">клиентов из вашего района</span> без переплат за рекламу
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Помогаем офлайн-бизнесу получать постоянных клиентов. Мы не просто приводим блогеров, мы создаем инфраструктуру, которая окупается.
          </p>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-surface/50 p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-display font-black mb-2 gold-gradient uppercase tracking-tighter">Взлом Яндекс Карт</div>
              <p className="text-zinc-400 text-sm">Выводим заведение в Топ через систему сбора отзывов и умный Яндекс.Директ.</p>
            </div>
            <div className="bg-surface/50 p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-display font-black mb-2 gold-gradient uppercase tracking-tighter">Авто-SEO продвижение</div>
              <p className="text-zinc-400 text-sm">Наш скрипт пишет оптимизированные гео-статьи для поисковиков на основе текущих трендов.</p>
            </div>
            <div className="bg-surface/50 p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-display font-black mb-2 gold-gradient uppercase tracking-tighter">Микроблогеры</div>
              <p className="text-zinc-400 text-sm">Выстраиваем систему привлечения через микроблогеров. Делаем работу с ними предсказуемой и прибыльной!</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <a
              href="#cta"
              className="bg-gold hover:bg-gold-dark text-black font-display font-black px-12 py-6 rounded-xl text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] uppercase tracking-tighter"
            >
              Получить стратегию трафика
            </a>

            <div className="flex items-center gap-6 text-left border-l border-white/10 pl-8">
              <div className="text-sm">
                <div className="text-gold font-bold text-lg uppercase tracking-widest">Безотказная формула:</div>
                <div className="text-zinc-500 italic">Блогеры + Карты + Сайт = Лавина трафика</div>
              </div>
            </div>
          </div>

          {/* NEW: Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-gold mr-2" />
                <span className="text-3xl md:text-4xl font-display font-black text-gold">150+</span>
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Кампаний проведено</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-gold mr-2" />
                <span className="text-3xl md:text-4xl font-display font-black text-gold">82%</span>
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Доверие аудитории</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-gold mr-2" />
                <span className="text-3xl md:text-4xl font-display font-black text-gold">600%</span>
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Средний ROI</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
