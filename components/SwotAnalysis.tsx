import React from 'react';
import { ShieldCheck, TrendingUp, AlertTriangle, Target } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const swotData = [
  {
    title: "Сильные стороны (Strengths)",
    icon: <ShieldCheck className="text-success" size={32} />,
    color: "border-success/50 bg-success/5",
    items: [
      "UGC-контент без маркировки рекламы",
      "Живые отзывы на картах (Trust Score)",
      "Прямой контакт с микроинфлюенсерами"
    ]
  },
  {
    title: "Возможности (Opportunities)",
    icon: <TrendingUp className="text-primary" size={32} />,
    color: "border-primary/50 bg-primary/5",
    items: [
      "Лавина органического трафика через Авто-SEO",
      "Конверсия 20% блогеров в платных клиентов",
      "Масштабирование в Бьюти и HoReCa"
    ]
  },
  {
    title: "Слабые стороны (Weaknesses)",
    icon: <AlertTriangle className="text-yellow-500" size={32} />,
    color: "border-yellow-500/50 bg-yellow-500/5",
    items: [
      "Зависимость от локальной базы блогеров",
      "Требует регулярного обновления офферов",
      "Человеческий фактор при визитах"
    ]
  },
  {
    title: "Угрозы (Threats)",
    icon: <Target className="text-red-500" size={32} />,
    color: "border-red-500/50 bg-red-500/5",
    items: [
      "Изменение алгоритмов соцсетей",
      "Ужесточение правил модерации карт",
      "Демпинг со стороны агентств-пустышек"
    ]
  }
];

export const SwotAnalysis: React.FC = () => {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase">
              SWOT-анализ <span className="text-primary">Клуба локального маркетинга</span>
            </h2>
            <p className="text-textSec text-xl max-w-2xl mx-auto">
              Честный взгляд на систему маркетинга нового поколения. 
              Разбираем, почему наша формула работает безотказно.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {swotData.map((box, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`h-full p-8 rounded-3xl border-2 transition-all hover:scale-105 ${box.color}`}>
                <div className="mb-6">{box.icon}</div>
                <h3 className="font-display font-bold text-lg mb-6 leading-tight">{box.title}</h3>
                <ul className="space-y-4">
                  {box.items.map((item, i) => (
                    <li key={i} className="text-sm text-textSec flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
