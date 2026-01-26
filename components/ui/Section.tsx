import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClass?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, containerClass = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 relative z-10 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};