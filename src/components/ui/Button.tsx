import React from 'react';
import { LucideIcon } from 'lucide-react';

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
  const baseStyles = 'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors';
  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-light', // Updated to use CSS variable
    secondary: 'bg-accent hover:bg-accent-dark text-light', // Updated to use CSS variable
    outline: 'border border-primary text-primary hover:bg-primary/10' // Updated to use CSS variable
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
