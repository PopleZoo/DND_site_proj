import React from 'react';
import { Background } from '../../../types/character';
import { Check } from 'lucide-react';

interface BackgroundCardProps {
  background: Background;
  selected: boolean;
  onSelect: () => void;
}

export default function BackgroundCard({ background, selected, onSelect }: BackgroundCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative p-6 rounded-lg text-left transition-all ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {background.isHomebrew && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
          Homebrew
        </span>
      )}

      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <h3 className="text-lg font-semibold mb-2">{background.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{background.description}</p>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium">Skill Proficiencies</h4>
          <p className="text-sm text-gray-600">{background.skillProficiencies.join(', ')}</p>
        </div>
        
        {background.toolProficiencies.length > 0 && (
          <div>
            <h4 className="text-sm font-medium">Tool Proficiencies</h4>
            <p className="text-sm text-gray-600">{background.toolProficiencies.join(', ')}</p>
          </div>
        )}

        {background.languages > 0 && (
          <div>
            <h4 className="text-sm font-medium">Languages</h4>
            <p className="text-sm text-gray-600">Choose {background.languages}</p>
          </div>
        )}

        <div>
          <h4 className="text-sm font-medium">{background.feature.name}</h4>
          <p className="text-sm text-gray-600">{background.feature.description}</p>
        </div>
      </div>
    </button>
  );
}