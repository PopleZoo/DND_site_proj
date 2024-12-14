import React from 'react';
import { SpellLevel } from '../../../../types/spells';

interface SpellLevelSelectorProps {
  availableLevels: number[];
  selectedLevel: number;
  onLevelSelect: (level: number) => void;
}

export default function SpellLevelSelector({
  availableLevels,
  selectedLevel,
  onLevelSelect
}: SpellLevelSelectorProps) {
  return (
    <div className="flex space-x-2">
      {availableLevels.map((level) => (
        <button
          key={level}
          onClick={() => onLevelSelect(level)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedLevel === level
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {level === 0 ? 'Cantrips' : `Level ${level}`}
        </button>
      ))}
    </div>
  );
}