import React from 'react';
import { Species } from '../../../types/character';
import { Check } from 'lucide-react';

interface SpeciesCardProps {
  species: Species;
  selected: boolean;
  onSelect: () => void;
}

export default function SpeciesCard({ species, selected, onSelect }: SpeciesCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative p-6 rounded-lg text-left transition-all ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {species.isHomebrew && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
          Homebrew
        </span>
      )}

      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <h3 className="text-lg font-semibold mb-2">{species.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{species.description}</p>

      <div className="space-y-3">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Size: {species.size}</span>
          <span>Speed: {species.speed} ft.</span>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-1">Ability Score Increases:</h4>
          <ul className="text-sm text-gray-600">
            {species.abilityScoreIncreases.options.map((option, index) => (
              <li key={index}>
                {option.type === 'choose'
                  ? `Choose ${option.count} scores to increase by ${option.value}`
                  : `Increase all ability scores by ${option.value}`}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-1">Traits:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {species.traits.map((trait, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}