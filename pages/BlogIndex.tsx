import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { articles as featuredArticles } from '../data/articles';
import { seoArticles } from '../data/seo/articles_100';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';

const imageMapping = {
  interior: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  food: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  people: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  tech: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  marketing: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

export const BlogIndex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Combine and normalize articles
  const allArticles = [
    ...featuredArticles.map(a => ({ ...a, type: 'featured' })),
    ...seoArticles.map(a => ({ 
      ...a, 
      type: 'seo', 
      date: '2026', 
      readTime: '5 мин', 
      image: imageMapping[a.imageType] || imageMapping.marketing 
    }))
  ];

  const filteredArticles = allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section className="min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Блог ББК | Маркетинг общепита в Кемерово</title>
        <meta name="description" content="Полезные статьи, гайды и кейсы по продвижению ресторанов, кафе и доставок еды. Тренды 2026 года." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            База знаний <span className="text-primary">ББК</span>
          </h1>
          <p className="text-textSec text-lg max-w-2xl mx-auto mb-8">
            Всё о маркетинге общепита: от настройки таргета до работы с негативом.
            Пишем честно, без воды, с примерами из Кемерово.
          </p>

          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Поиск по статьям..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary/50 focus:outline-none transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSec" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link 
              key={article.slug} 
              to={`/blog/${article.slug}`}
              className="group flex flex-col bg-surface/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {article.type === 'featured' && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Избранное
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-textSec mb-3">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span className="capitalize">{article.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-textSec text-sm line-clamp-3 mb-4 flex-1">
                  {article.description}
                </p>
                
                <div className="text-primary text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Читать статью →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center text-textSec py-20">
            Ничего не найдено. Попробуйте другой запрос.
          </div>
        )}
      </div>
    </Section>
  );
};
