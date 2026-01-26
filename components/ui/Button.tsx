import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:bg-primaryHover hover:scale-105 hover:shadow-[0_0_30px_rgba(255,77,0,0.6)]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};