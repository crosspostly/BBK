import React, { useState } from 'react';
import { content } from '../constants';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const { legal } = content;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
        <footer className="py-12 border-t border-white/5 bg-surface/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div>
                        <div className="font-display font-bold text-xl mb-2">ББК.</div>
                        <p className="text-xs text-textSec opacity-50 max-w-xs">
                            {legal.name}<br/>
                            ИНН {legal.inn}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-textSec">
                        <a href={`mailto:${legal.email}`} className="hover:text-primary transition-colors">{legal.email}</a>
                        <a href={`tel:${legal.phone}`} className="hover:text-primary transition-colors">{legal.phone}</a>
                    </div>

                    <div className="flex flex-col gap-2 text-xs text-textSec opacity-50">
                        <button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors underline decoration-dotted">
                            Политика конфиденциальности
                        </button>
                        <span>© 2026 Все права защищены.</span>
                    </div>
                </div>
            </div>
        </footer>

        <LegalModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            content={legal.policyText} 
        />
    </>
  );
};