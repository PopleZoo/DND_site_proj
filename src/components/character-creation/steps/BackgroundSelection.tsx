import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import BackgroundCard from '../cards/BackgroundCard';
import { backgrounds } from '../../../data/backgrounds';
import Button from '../../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BackgroundSelection() {
  const {
    homebrewEnabled,
    selectedBackground,
    setSelectedBackground,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const handleContinue = () => {
    if (selectedBackground) {
      completeStep(3);
      nextStep();
    }
  };

  const availableBackgrounds = homebrewEnabled
    ? backgrounds
    : backgrounds.filter(bg => !bg.isHomebrew);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Choose Your Background</h2>
        <p className="text-gray-600">
          Your background reveals where you came from and your place in the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableBackgrounds.map((background) => (
          <BackgroundCard
            key={background.id}
            background={background}
            selected={selectedBackground === background.id}
            onSelect={() => setSelectedBackground(background.id)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={previousStep}
          variant="outline"
          icon={ArrowLeft}
        >
          Back to Class
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedBackground}
          icon={ArrowRight}
        >
          Continue to Ability Scores
        </Button>
      </div>
    </div>
  );
}