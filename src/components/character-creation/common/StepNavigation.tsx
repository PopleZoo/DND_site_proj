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
    <div className="fixed bottom-0 left-0 right-0 bg-[#313638] border-t border-[#F06543] shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <Button
          onClick={onPrevious}
          variant="outline"
          icon={ArrowLeft}
          className="text-[#E0DFD5]"
        >
          Back
        </Button>
        {!hideNext && (
          <Button
            onClick={onNext}
            disabled={disableNext}
            icon={ArrowRight}
            className="text-[#E0DFD5]"
          >
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
