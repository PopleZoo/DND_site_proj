import React from 'react';

interface StepHeaderProps {
  title: string;
  description: string;
}

export default function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-8">
      <h2 className="text-3xl font-black text-light mb-4">{title}</h2>
      <p className="text-light/60">{description}</p>
    </div>
  );
}