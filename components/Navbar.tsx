import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tighter">
                      <img src="/logo.svg" alt="BBK Logo" className="h-8 w-auto" />        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textSec">
          <button onClick={() => scrollTo('cases')} className="hover:text-white transition-colors">Кейсы</button>
          <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors">Процесс</button>
          <button onClick={() => scrollTo('tariffs')} className="hover:text-white transition-colors">Тарифы</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors">FAQ</button>
        </div>

        <div className={scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100 transition-opacity'}>
             <Button 
                variant="primary" 
                className="!py-2 !px-6 text-sm"
                onClick={() => scrollTo('cta')}
             >
                Начать
             </Button>
        </div>
      </div>
    </nav>
  );
};