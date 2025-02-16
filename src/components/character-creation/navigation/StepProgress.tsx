import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { Check } from 'lucide-react';
import { CREATION_STEPS } from '../../../constants/characterCreation';

export default function StepProgress() {
  const { currentStep, completedSteps } = useCharacterCreationStore();

  return (
    <div className="relative">
      {/* Progress Bar Background */}
      <div className="absolute top-5 w-full h-0.5 bg-dark-light" />
      
      {/* Progress Bar Fill */}
      <div
        className="absolute top-5 h-0.5 bg-accent transition-all duration-500"
        style={{ width: `${(Math.max(0, currentStep - 1) / (CREATION_STEPS.length - 1)) * 100}%` }}
      />
      
      {/* Steps */}
      <div className="relative flex justify-between">
        {CREATION_STEPS.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center ${
              step.id === currentStep
                ? 'text-accent'
                : completedSteps.includes(step.id)
                ? 'text-accent/60'
                : 'text-light/40'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                step.id === currentStep
                  ? 'bg-accent text-dark'
                  : completedSteps.includes(step.id)
                  ? 'bg-accent/20 text-accent'
                  : 'bg-dark-light text-light/40'
              }`}
            >
              {completedSteps.includes(step.id) ? (
                <Check className="h-5 w-5" />
              ) : (
                step.id
              )}
            </div>
            <span className="mt-2 text-sm font-bold uppercase tracking-wider">{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}