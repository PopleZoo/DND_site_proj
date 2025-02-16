import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StepNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  nextLabel?: string;
  disableNext?: boolean;
  hideNext?: boolean;
}

export default function StepNavigation({
  onPrevious,
  onNext,
  nextLabel = 'Continue',
  disableNext = false,
  hideNext = false,
}: StepNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-light/95 backdrop-blur-md border-t border-white/10 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={onPrevious}
          className="button secondary"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        
        {!hideNext && (
          <button
            onClick={onNext}
            disabled={disableNext}
            className="button primary"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}