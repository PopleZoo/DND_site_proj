import React from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { getAvailableFeats } from '../../../../utils/classFeatures';
import { Check } from 'lucide-react';

interface FeatSelectionProps {
  level: number;
  classId: string;
}

export default function FeatSelection({ level, classId }: FeatSelectionProps) {
  const { selectedFeats, setSelectedFeats } = useCharacterCreationStore();
  const availableFeats = getAvailableFeats(classId, level);

  const handleFeatSelect = (featId: string) => {
    setSelectedFeats(prev => {
      if (prev.includes(featId)) {
        return prev.filter(id => id !== featId);
      }
      return [...prev, featId];
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-bold text-purple-900">Choose a Feat</h3>
        <p className="text-gray-600">
          At level {level}, you gain a feat to enhance your character's abilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableFeats.map((feat) => (
          <button
            key={feat.id}
            onClick={() => handleFeatSelect(feat.id)}
            className={`relative p-4 rounded-lg text-left transition-all ${
              selectedFeats.includes(feat.id)
                ? 'bg-purple-50 border-2 border-purple-600'
                : 'bg-white border-2 border-gray-100 hover:border-purple-200'
            }`}
          >
            {selectedFeats.includes(feat.id) && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            <h4 className="font-semibold">{feat.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{feat.description}</p>
            
            {feat.prerequisites && (
              <p className="text-sm text-gray-500 mt-2">
                Prerequisites: {feat.prerequisites}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}