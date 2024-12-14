import React from 'react';
import { Class } from '../../../../../types/character';
import { Wand2 } from 'lucide-react';

interface SpellsGainsProps {
  classData: Class;
  level: number;
}

export default function SpellsGains({ classData, level }: SpellsGainsProps) {
  // Example spell slot progression - adjust based on your game's rules
  const getSpellSlots = (level: number) => {
    if (level < 1) return [];
    const slots = [];
    const maxSpellLevel = Math.min(Math.ceil(level / 2), 9);
    
    for (let i = 1; i <= maxSpellLevel; i++) {
      const slotsAtLevel = Math.min(4, Math.ceil((level + 1) / 3));
      slots.push(slotsAtLevel);
    }
    
    return slots;
  };

  const spellSlots = getSpellSlots(level);
  
  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Wand2 className="w-5 h-5 text-purple-600" />
        <h4 className="font-semibold">Spellcasting</h4>
      </div>

      <div className="grid gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">Spell Slots</div>
          <div className="grid grid-cols-9 gap-2">
            {spellSlots.map((slots, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-500">Level {index + 1}</div>
                <div className="font-medium">{slots}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">Spellcasting Details</div>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Spellcasting Ability:</span>{' '}
              {classData.spellcastingAbility}
            </p>
            <p>
              <span className="font-medium">Spell Save DC:</span>{' '}
              8 + Proficiency + {classData.spellcastingAbility} modifier
            </p>
            <p>
              <span className="font-medium">Spell Attack Modifier:</span>{' '}
              Proficiency + {classData.spellcastingAbility} modifier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}