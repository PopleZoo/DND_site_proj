import React from 'react';
import { useCharacterCreationStore } from '../../store/characterCreationStore';
import { Check } from 'lucide-react';

const steps = [
  { id: 1, name: 'Race' },
  { id: 2, name: 'Class' },
  { id: 3, name: 'Background' },
  { id: 4, name: 'Ability Scores' },
  { id: 5, name: 'Equipment & Spells' },
  { id: 6, name: 'Review' },
];

export default function StepProgress() {
  const { currentStep, completedSteps } = useCharacterCreationStore();

  return (
    <div className="relative">
      <div className="absolute top-5 w-full h-0.5 bg-gray-200" />
      <div
        className="absolute top-5 h-0.5 bg-purple-600 transition-all"
        style={{ width: `${(Math.max(0, currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center ${
              step.id === currentStep
                ? 'text-purple-600'
                : completedSteps.includes(step.id)
                ? 'text-green-600'
                : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step.id === currentStep
                  ? 'bg-purple-600 text-white'
                  : completedSteps.includes(step.id)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200'
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