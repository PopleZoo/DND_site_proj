import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import ClassCard from '../cards/ClassCard';
import SubclassSelection from './SubclassSelection';
import { classes } from '../../../data/classes';
import Button from '../../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ClassSelection() {
  const {
    homebrewEnabled,
    selectedClass,
    setSelectedClass,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const handleContinue = () => {
    if (selectedClass) {
      completeStep(2);
      nextStep();
    }
  };

  const availableClasses = homebrewEnabled
    ? classes
    : classes.filter(cls => !cls.isHomebrew);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Choose Your Class</h2>
        <p className="text-gray-600">
          Your class shapes your character's capabilities and role in the party.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableClasses.map((cls) => (
          <ClassCard
            key={cls.id}
            class={cls}
            selected={selectedClass === cls.id}
            onSelect={() => setSelectedClass(cls.id)}
          />
        ))}
      </div>

      {selectedClass && <SubclassSelection classId={selectedClass} />}

      <div className="flex justify-between mt-8">
        <Button
          onClick={previousStep}
          variant="outline"
          icon={ArrowLeft}
        >
          Back to Race
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedClass}
          icon={ArrowRight}
        >
          Continue to Background
        </Button>
      </div>
    </div>
  );
}