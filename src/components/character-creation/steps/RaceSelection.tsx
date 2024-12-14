import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import RaceCard from '../cards/RaceCard';
import { races } from '../../../data/races';
import Button from '../../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function RaceSelection() {
  const { 
    homebrewEnabled, 
    selectedRace, 
    setSelectedRace, 
    nextStep,
    completeStep 
  } = useCharacterCreationStore();

  const handleContinue = () => {
    if (selectedRace) {
      completeStep(1);
      nextStep();
    }
  };

  const availableRaces = homebrewEnabled 
    ? races 
    : races.filter(race => !race.isHomebrew);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Choose Your Race</h2>
        <p className="text-gray-600">
          Your race determines your character's ancestral traits and natural abilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableRaces.map((race) => (
          <RaceCard
            key={race.id}
            race={race}
            selected={selectedRace === race.id}
            onSelect={() => setSelectedRace(race.id)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={handleContinue}
          disabled={!selectedRace}
          icon={ArrowRight}
        >
          Continue to Class Selection
        </Button>
      </div>
    </div>
  );
}