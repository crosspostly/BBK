import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './ui/Section';
import { articles } from '../data/articles';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const BlogPreview: React.FC = () => {
  return (
    <Section className="bg-bg" id="blog">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Блог о маркетинге в Кемерово
        </h2>
        <p className="text-xl text-textSec max-w-2xl mx-auto">
            Честно рассказываем, как привлекать гостей, а не сливать бюджет.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <FadeIn key={article.id} delay={idx * 100}>
            <Link to={`/blog/${article.slug}`} className="group block h-full">
              <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-textSec mb-4">
                        <span className="flex items-center gap-1"><Calendar size={14}/> {article.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14}/> {article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    
                    <p className="text-textSec text-sm mb-6 line-clamp-3 flex-grow">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-bold text-sm mt-auto">
                        Читать статью <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};