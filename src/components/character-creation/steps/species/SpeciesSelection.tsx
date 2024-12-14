import React from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { species } from '../../../../data/species';
import SpeciesCard from '../../cards/SpeciesCard';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';

export default function SpeciesSelection() {
  const {
    homebrewEnabled,
    selectedSpecies,
    setSelectedSpecies,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const handleContinue = () => {
    if (selectedSpecies) {
      completeStep(1);
      nextStep();
    }
  };

  const availableSpecies = homebrewEnabled
    ? species
    : species.filter(s => !s.isHomebrew);

  return (
    <div className="space-y-6">
      <StepHeader
        title="Choose Your Species"
        description="Your species determines your character's ancestral traits and natural abilities."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableSpecies.map((speciesOption) => (
          <SpeciesCard
            key={speciesOption.id}
            species={speciesOption}
            selected={selectedSpecies === speciesOption.id}
            onSelect={() => setSelectedSpecies(speciesOption.id)}
          />
        ))}
      </div>

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedSpecies}
        nextLabel="Continue to Class"
      />
    </div>
  );
}