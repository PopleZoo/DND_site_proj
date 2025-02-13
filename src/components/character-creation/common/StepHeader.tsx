import React from 'react';

interface StepHeaderProps {
  title: string;
  description: string;
}

export default function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-6">
      <h2 className="text-2xl font-bold text-[#F09D51] mb-2">{title}</h2>
      <p className="text-[#E0DFD5]">{description}</p>
    </div>
  );
}
