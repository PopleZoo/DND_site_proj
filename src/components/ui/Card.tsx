import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-dark-light border border-dark p-6 rounded-lg shadow-lg text-light ${className}`}>
      {children}
    </div>
  );
}