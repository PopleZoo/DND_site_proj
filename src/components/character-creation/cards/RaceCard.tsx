import React from 'react';
import { Race } from '../../../types/character';
import { Check } from 'lucide-react';

interface RaceCardProps {
  race: Race;
  selected: boolean;
  onSelect: () => void;
}

export default function RaceCard({ race, selected, onSelect }: RaceCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative p-6 rounded-lg text-left transition-all ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {race.isHomebrew && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
          Homebrew
        </span>
      )}

      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <h3 className="text-lg font-semibold mb-2">{race.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{race.description}</p>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Racial Traits:</h4>
        <ul className="text-sm text-gray-600">
          {race.traits.map((trait, index) => (
            <li key={index} className="flex items-center space-x-1">
              <span>•</span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}