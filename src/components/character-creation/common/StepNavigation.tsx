import React from 'react';
import Button from '../../ui/Button';
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <Button
          onClick={onPrevious}
          variant="outline"
          icon={ArrowLeft}
        >
          Back
        </Button>
        {!hideNext && (
          <Button
            onClick={onNext}
            disabled={disableNext}
            icon={ArrowRight}
          >
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}