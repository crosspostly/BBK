import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Clock, Users, Eye, TrendingUp, MessageCircle, Phone } from 'lucide-react';
import { content as defaultContent } from '../constants';
import { GuaranteesContent } from '../types';

interface GuaranteesProps {
  content?: GuaranteesContent;
}

// Enhanced guarantees from archive docs
const enhancedGuarantees = [
  {
    icon: Users,
    title: "Настоящие блогеры",
    desc: "Только локальные инфлюенсеры с реальной, а не накрученной аудиторией. Тщательная проверка через софт."
  },
  {
    icon: Eye,
    title: "100% контроль контента",
    desc: "Вы видите и согласовываете все видео до их публикации. Не нравится? Переснимаем бесплатно."
  },
  {
    icon: Clock,
    title: "Результаты за 14 дней",
    desc: "Если за две недели нет измеримого результата — работаем над проектом повторно за наш счет."
  },
  {
    icon: TrendingUp,
    title: "Долгосрочный эффект",
    desc: "Отзывы на Картах и SEO-материалы остаются навсегда и продолжают приводить гостей месяцами."
  },
  {
    icon: ShieldCheck,
    title: "Прозрачная экономика",
    desc: "Никаких скрытых платежей. В стоимость тарифа уже заложены выплаты блогерам и налоги."
  },
  {
    icon: Phone,
    title: "Поддержка 24/7",
    desc: "Персональный менеджер всегда на связи в Telegram. Ответ на любой вопрос в течение 15 минут."
  }
];

export const Guarantees: React.FC<GuaranteesProps> = ({ content }) => {
  const guarantees = content || defaultContent.guarantees;

  return (
    <Section id="guarantees" className="bg-surface/30 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {guarantees.h2}
          </h2>
          <p className="text-textSec text-lg max-w-2xl mx-auto">
            Мы берем на себя все риски. Вы получаете результат без стресса.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedGuarantees.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-bg border border-white/10 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-zinc-100">
                {item.title}
              </h3>
              
              <p className="text-textSec text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm mb-4">
            Более 150 успешных кампаний подтверждают наши гарантии
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>150+ кампаний</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>82% доверие аудитории</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>600% средний ROI</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};