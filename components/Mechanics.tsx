import React from 'react';
import { Users, MapPin, Search, MousePointer2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const steps = [
  {
    icon: <Users size={40} />,
    title: "1. Визит блогера",
    desc: "Микроблогер посещает вас, делает живой UGC-контент (Reels/Stories) и влюбляется в ваш продукт.",
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    icon: <MapPin size={40} />,
    title: "2. Точка на картах",
    desc: "Блогер оставляет живой отзыв с фото в 2ГИС/Яндекс.Картах, поднимая ваш Trust Score.",
    color: "bg-success/20 text-success"
  },
  {
    icon: <Search size={40} />,
    title: "3. Авто-SEO",
    desc: "Gemini преобразует контент блогера в SEO-статью. Вы захватываете топ поиска Google и Яндекс.",
    color: "bg-primary/20 text-primary"
  },
  {
    icon: <MousePointer2 size={40} />,
    title: "4. Лавина клиентов",
    desc: "20% блогеров становятся вашими амбассадорами, а их лояльная аудитория — вашими гостями.",
    color: "bg-purple-500/20 text-purple-400"
  }
];

export const Mechanics: React.FC = () => {
  return (
    <section className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              МЕХАНИКА <span className="text-primary">ВОРОНКИ</span>
            </h2>
            <p className="text-textSec text-xl max-w-2xl mx-auto">
              Как мы превращаем один пост в бесконечный поток клиентов. 
              Система, которая работает на автопилоте.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-success to-primary -translate-y-1/2 z-0 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all hover:-translate-y-2">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${step.color} group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-textSec text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
