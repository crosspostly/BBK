import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Helmet } from 'react-helmet-async';
import { articles as featuredArticles } from '../data/articles';
import { seoArticles } from '../data/seo/articles_100';
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react';

// Маппинг типов картинок на качественные фото с Unsplash
const imageMapping = {
  interior: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
  people: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
  tech: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  marketing: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // 1. Ищем в основных статьях
  let article: any = featuredArticles.find(a => a.slug === slug);
  let isSeo = false;

  // 2. Если не нашли, ищем в SEO статьях
  if (!article) {
    const seoArticle = seoArticles.find(a => a.slug === slug);
    if (seoArticle) {
      isSeo = true;
      article = {
        ...seoArticle,
        date: '28 Января 2026', // Дата обновления для актуальности
        readTime: '5 мин',
        image: imageMapping[seoArticle.imageType] || imageMapping.marketing,
        // Генерация контента для SEO-заглушки
        content: `
          <p class="lead text-xl text-textMain mb-6">${seoArticle.description}</p>
          
          <h2>Почему это важно в 2026 году?</h2>
          <p>Рынок общепита Кемерово меняется стремительно. То, что работало год назад (например, просто выкладывать фото еды), сегодня уже не приносит гостей. Конкуренция растет, и выигрывает тот, кто использует системный подход.</p>
          
          <h2>Основные проблемы, с которыми сталкиваются владельцы:</h2>
          <ul>
            <li>Бюджет на рекламу сливается, а гостей нет.</li>
            <li>SMM-специалисты не понимают специфику кухни.</li>
            <li>Акции привлекают только халявщиков, а не платежеспособную аудиторию.</li>
          </ul>

          <h2>Наше решение</h2>
          <p>В ББК мы разработали уникальную методику работы именно с этой задачей. Мы не просто настраиваем рекламу, мы выстраиваем путь гостя от "увидел в телефоне" до "заказал столик".</p>
          
          <div class="bg-surface/50 p-6 rounded-xl border border-white/5 my-8">
            <h3 class="text-xl font-bold mb-4 text-white">Что вы получите после аудита?</h3>
            <p>Мы разберем вашу ситуацию и предложим 3 конкретных шага для роста выручки уже в этом месяце.</p>
          </div>
        `
      };
    }
  }

  // Скролл наверх при открытии
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <Section className="min-h-screen pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
        <Link to="/" className="text-primary hover:underline">Вернуться на главную</Link>
      </Section>
    );
  }

  return (
    <Section className="min-h-screen pt-32 pb-20">
       <Helmet>
         <title>{article.title} | Блог ББК</title>
         <meta name="description" content={article.description || article.excerpt} />
         {/* Open Graph для красивого шеринга в соцсетях */}
         <meta property="og:title" content={article.title} />
         <meta property="og:description" content={article.description || article.excerpt} />
         <meta property="og:image" content={article.image} />
       </Helmet>

       <div className="max-w-3xl mx-auto">
          {/* Навигация */}
          <Link to="/" className="inline-flex items-center gap-2 text-textSec hover:text-primary transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Назад на главную
          </Link>

          {/* Мета-инфо */}
          <div className="flex items-center gap-4 text-sm text-textSec mb-6">
            <span className="flex items-center gap-1"><Calendar size={16}/> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={16}/> {article.readTime}</span>
            {isSeo && <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs">Гайд</span>}
          </div>

          {/* Заголовок */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Обложка */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl relative group">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Контент */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-16
              prose-headings:font-display prose-headings:font-bold prose-headings:text-white
              prose-p:text-textSec prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-textSec prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: article.content || '' }} 
          />

          {/* CTA Блок */}
          <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
             
             <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
               Хотите внедрить это в своём заведении?
             </h3>
             <p className="text-textSec mb-8 max-w-xl mx-auto">
               Запишитесь на бесплатный аудит маркетинга. Мы разберем ваши точки роста и подскажем, как применить советы из статьи.
             </p>
             
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }), 100)} 
               className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/80 transition-all hover:scale-105 shadow-lg shadow-primary/20"
             >
                <CheckCircle2 size={20} />
                Записаться на аудит
             </Link>
          </div>
       </div>
    </Section>
  );
};
