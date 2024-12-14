import React from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { backgrounds } from '../../../../data/backgrounds';
import BackgroundCard from '../../cards/BackgroundCard';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';

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
      <StepHeader
        title="Choose Your Background"
        description="Your background reveals where you came from and your place in the world."
      />

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

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedBackground}
        nextLabel="Continue to Ability Scores"
      />
    </div>
  );
}