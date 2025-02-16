import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  icon: Icon,
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-light shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5',
    secondary: 'bg-dark-light hover:bg-dark text-light border border-white/10 shadow-lg hover:shadow-white/5 hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </button>
  );
}