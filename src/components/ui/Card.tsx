import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass p-6 transition-all duration-300 hover:shadow-glow ${className}`}>
      {children}
    </div>
  );
}