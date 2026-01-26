import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-surface border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl relative z-10 p-8 shadow-2xl">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
            <X size={24} />
        </button>
        <div 
            className="prose prose-invert prose-sm max-w-none text-textSec"
            dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>
    </div>
  );
};