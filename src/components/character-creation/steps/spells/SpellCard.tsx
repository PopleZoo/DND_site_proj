import React from 'react';
import { Check, Wand2 } from 'lucide-react';

interface SpellCardProps {
  spell: {
    'Spell Name': string;
    Level: string;
    School: string;
    'Casting Time': string;
    Range: string;
    Components: string;
  };
  selected: boolean;
  onSelect: () => void;
}

export default function SpellCard({ spell, selected, onSelect }: SpellCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative p-4 rounded-lg text-left transition-all w-full ${
        selected
          ? 'bg-[#F09D51]/20 border-2 border-[#F09D51]'
          : 'bg-[#4a4f52] border-2 border-[#313638] hover:border-[#F09D51]/50'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-[#F09D51] rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-[#313638]" />
        </div>
      )}

      <div className="flex items-start space-x-3">
        <Wand2 className={`w-5 h-5 mt-1 ${selected ? 'text-[#F09D51]' : 'text-[#E0DFD5]'}`} />
        <div>
          <h3 className="font-medium text-[#E0DFD5]">{spell['Spell Name']}</h3>
          <p className="text-sm text-[#E0DFD5]/70">{spell.School}</p>
          <div className="mt-2 space-y-1 text-sm text-[#E0DFD5]/60">
            <p>Casting Time: {spell['Casting Time']}</p>
            <p>Range: {spell.Range}</p>
            <p>Components: {spell.Components}</p>
          </div>
        </div>
      </div>
    </button>
  );
}