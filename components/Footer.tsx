import React from 'react';
import { content } from '../constants';
import { Send } from 'lucide-react';

import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { legal, founder } = content;

  return (
    <>
        <footer className="py-12 border-t border-white/5 bg-surface/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div>
                        <Link to="/" className="font-display font-bold text-xl mb-2 flex items-center gap-2 justify-center md:justify-start">
                            <img src="/bbk-logo.svg" alt="Logo" className="h-6 w-auto" />
                            <span>ББК.</span>
                        </Link>
                        <p className="text-xs text-textSec opacity-50 max-w-xs">
                            {legal.name}<br/>
                            ИНН {legal.inn}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-textSec">
                        <Link to="/blog" className="hover:text-primary transition-colors">База знаний (Блог)</Link>
                        <a href={founder.profile.telegramUrl || `https://${legal.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                           <Send size={14} />
                           {legal.email}
                        </a>
                    </div>

                    <div className="flex flex-col gap-2 text-xs text-textSec opacity-50">
                        <Link to="/privacy" className="hover:text-white transition-colors underline decoration-dotted">
                            Политика конфиденциальности
                        </Link>
                        <span>© 2026 Все права защищены.</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};