import React from 'react';
import { Spell } from '../../../../types/spells';
import { Check, Wand2 } from 'lucide-react';

interface SpellCardProps {
  spell: Spell;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export default function SpellCard({
  spell,
  selected,
  onSelect,
  disabled = false
}: SpellCardProps) {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`relative p-4 rounded-lg text-left transition-all w-full ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : disabled
          ? 'bg-gray-50 border-2 border-gray-200 cursor-not-allowed'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <div className="flex items-start space-x-3">
        <Wand2 className={`w-5 h-5 mt-1 ${selected ? 'text-purple-600' : 'text-gray-400'}`} />
        <div>
          <h3 className="font-medium">{spell.name}</h3>
          <p className="text-sm text-gray-500">{spell.school}</p>
          <p className="text-sm text-gray-600 mt-2">{spell.description}</p>
        </div>
      </div>
    </button>
  );
}