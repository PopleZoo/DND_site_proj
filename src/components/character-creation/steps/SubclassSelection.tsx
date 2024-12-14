import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { subclasses } from '../../../data/subclasses';
import SubclassCard from '../cards/SubclassCard';

interface SubclassSelectionProps {
  classId: string;
}

export default function SubclassSelection({ classId }: SubclassSelectionProps) {
  const { homebrewEnabled, selectedSubclass, setSelectedSubclass } = useCharacterCreationStore();

  const availableSubclasses = homebrewEnabled
    ? subclasses[classId]
    : subclasses[classId]?.filter(subclass => !subclass.isHomebrew) || [];

  if (!availableSubclasses.length) return null;

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h3 className="text-xl font-bold text-purple-900 mb-2">Choose Your Subclass</h3>
        <p className="text-gray-600">
          Subclasses define your character's specialized path within their chosen class.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableSubclasses.map((subclass) => (
          <SubclassCard
            key={subclass.id}
            subclass={subclass}
            selected={selectedSubclass === subclass.id}
            onSelect={() => setSelectedSubclass(subclass.id)}
          />
        ))}
      </div>
    </div>
  );
}