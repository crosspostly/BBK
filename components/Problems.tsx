import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { AlertTriangle, TrendingDown, Users, DoorOpen } from 'lucide-react';

interface Problem {
  icon: React.ElementType;
  title: string;
  description: string;
  pain: string;
}

interface NicheData {
  name: string;
  problems: Problem[];
}

const niches: Record<string, NicheData> = {
  universal: {
    name: "Универсальные",
    problems: [
      {
        icon: AlertTriangle,
        title: "Нестабильный поток клиентов",
        description: "Сегодня густо, завтра пусто. Невозможно планировать выручку и нагрузку на персонал.",
        pain: "Cash flow под угрозой"
      },
      {
        icon: TrendingDown,
        title: "Дорогое привлечение",
        description: "Реклама в Яндекс и соцсетях съедает 20-30% бюджета, а клиенты не возвращаются.",
        pain: "Отрицательный ROI"
      },
      {
        icon: Users,
        title: "Клиенты не возвращаются",
        description: "Пришли раз, остались довольны, но не вернулись. Retention 40% вместо 75%.",
        pain: "Потеря LTV"
      },
      {
        icon: DoorOpen,
        title: "Конкуренты забирают трафик",
        description: "Новые игроки и сети переманивают ваших клиентов агрессивным маркетингом.",
        pain: "Теряете долю рынка"
      }
    ]
  },
  beauty: {
    name: "Бьюти",
    problems: [
      {
        icon: AlertTriangle,
        title: "Пустое расписание в будни",
        description: "Вторник-Четверг: 3-5 записей вместо 12-15. Мастер сидит без дела.",
        pain: "Платите зарплату впустую"
      },
      {
        icon: TrendingDown,
        title: "Клиенты уходят к конкурентам",
        description: "Открылся новый салон через дорогу — и половина базы ушла туда.",
        pain: "Потеря клиентов"
      },
      {
        icon: Users,
        title: "Нет повторных записей",
        description: "Клиент пришел раз, остался доволен, но не записался снова.",
        pain: "Retention 40% вместо 75%"
      },
      {
        icon: DoorOpen,
        title: "Низкий средний чек",
        description: "Клиенты приходят только на простые услуги, не покупают комплекс.",
        pain: "Недополучаете выручку"
      }
    ]
  },
  horeca: {
    name: "HoReCa",
    problems: [
      {
        icon: AlertTriangle,
        title: "Пустой зал в будни",
        description: "Понедельник-Среда: 15-20 гостей вместо 35-40. Аренда и зарплаты платите, а выручки нет.",
        pain: "Cash flow под угрозой"
      },
      {
        icon: TrendingDown,
        title: "Сезонные провалы",
        description: "Летом -30%, зимой -20%. Невозможно планировать бюджет и закупки.",
        pain: "Непредсказуемый доход"
      },
      {
        icon: Users,
        title: "Клиенты не возвращаются",
        description: "Пришли раз, понравилось, но не вернулись. Retention 40% вместо 75%.",
        pain: "Потеря LTV"
      },
      {
        icon: DoorOpen,
        title: "Конкуренты забирают трафик",
        description: "Сетевые рестораны и новые заведения переманивают ваших гостей.",
        pain: "Теряете долю рынка"
      }
    ]
  },
  fitness: {
    name: "Фитнес",
    problems: [
      {
        icon: AlertTriangle,
        title: "50% членов уходят за 6 месяцев",
        description: "Привлекли 100 новых в январе, к июлю осталось 50. Все усилия впустую.",
        pain: "Высокий churn rate"
      },
      {
        icon: TrendingDown,
        title: "Дорогое привлечение",
        description: "2,000₽ за нового члена через рекламу. ROI отрицательный.",
        pain: "Убыточный маркетинг"
      },
      {
        icon: Users,
        title: "Конкуренты забирают клиентов",
        description: "Новый фитнес-клуб на соседней улице переманил 30% базы.",
        pain: "Теряете рынок"
      },
      {
        icon: DoorOpen,
        title: "Нет комьюнити",
        description: "Люди ходят как на работу, не чувствуют атмосферы и уходят.",
        pain: "Низкая лояльность"
      }
    ]
  }
};

export const Problems: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<string>('universal');
  const problems = niches[activeNiche].problems;

  return (
    <Section id="problems" className="bg-surface/30 py-20">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Знакомая ситуация?
          </h2>
          <p className="text-textSec text-lg max-w-3xl mx-auto mb-8">
            Владельцы бизнеса сталкиваются с этими проблемами каждый день
          </p>
          
          {/* Niche Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(niches).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveNiche(key)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeNiche === key
                    ? 'bg-ruby text-white shadow-[0_0_20px_rgba(153,27,27,0.4)]'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-bg border border-white/10 hover:border-ruby/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)]"
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ruby/20 text-ruby text-xs font-bold uppercase tracking-wider">
                {problem.pain}
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-ruby/20 flex items-center justify-center group-hover:bg-ruby/30 transition-colors">
                  <problem.icon className="w-6 h-6 text-ruby" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-100">
                    {problem.title}
                  </h3>
                  <p className="text-textSec leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-400 mb-6">
            Если узнали хотя бы 2 проблемы — Клуб локального маркетинга поможет решить их все
          </p>
          <a
            href="#cta"
            className="inline-block bg-ruby hover:bg-ruby-dark text-white font-display font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]"
          >
            Получить план решения
          </a>
        </div>
      </FadeIn>
    </Section>
  );
};
