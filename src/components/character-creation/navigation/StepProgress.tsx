import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { Check } from 'lucide-react';
import { CREATION_STEPS } from '../../../constants/characterCreation';

export default function StepProgress() {
  const { currentStep, completedSteps } = useCharacterCreationStore();

  return (
    <div className="relative">
      <div className="absolute top-5 w-full h-0.5 bg-[#E8E9EB]" />
      <div
        className="absolute top-5 h-0.5 bg-[#F09D51] transition-all"
        style={{ width: `${(Math.max(0, currentStep - 1) / (CREATION_STEPS.length - 1)) * 100}%` }}
      />
      <div className="relative flex justify-between">
        {CREATION_STEPS.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center ${
              step.id === currentStep
                ? 'text-[#F09D51]'
                : completedSteps.includes(step.id)
                ? 'text-[#F06543]'
                : 'text-[#E0DFD5]'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step.id === currentStep
                  ? 'bg-[#F09D51] text-white'
                  : completedSteps.includes(step.id)
                  ? 'bg-[#F06543] text-white'
                  : 'bg-[#4a4f52]'
              }`}
            >
              {completedSteps.includes(step.id) ? (
                <Check className="w-5 h-5" />
              ) : (
                step.id
              )}
            </div>
            <span className="mt-2 text-sm font-medium">{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
