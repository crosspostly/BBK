import React from 'react';
import { FooterData } from '../types';

interface FooterProps {
  content: FooterData;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-bg py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-noise pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-ruby text-white font-display font-black px-3 py-1.5 rounded text-lg tracking-tighter">КЛМ</span>
              <span className="font-display font-bold tracking-widest text-sm uppercase text-zinc-300">Клуб Маркетинга</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              Закрытое сообщество локальных инфлюенсеров и владельцев бизнеса. 
              Системный трафик с гарантией качества и юридической чистотой.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-10 uppercase tracking-widest text-xs">Локация</h4>
            <div className="text-zinc-400 text-sm font-medium">
              {content.location}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-10 uppercase tracking-widest text-xs">Связь</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
              <li className="hover:text-gold transition-colors tracking-widest">{content.telegram}</li>
              <li className="hover:text-gold transition-colors tracking-widest">{content.phone}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-10 uppercase tracking-widest text-xs">Юридические данные</h4>
            <ul className="space-y-3 text-xs text-zinc-600 font-medium leading-relaxed">
              <li>{content.legal.name}</li>
              <li>{content.legal.inn}</li>
              <li className="italic">{content.legal.taxType}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-zinc-700 uppercase tracking-[0.4em] font-black">
            &copy; {new Date().getFullYear()} Клуб локального маркетинга. All rights reserved.
          </div>
          <div className="flex gap-10 text-[10px] text-zinc-700 uppercase tracking-[0.2em] font-black">
            <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
