import React from 'react';
import { Class } from '../../../../../types/character';
import { Dumbbell } from 'lucide-react';

interface StatsGainsProps {
  classData: Class;
  level: number;
}

export default function StatsGains({ classData, level }: StatsGainsProps) {
  const hitDiceGain = classData.hitDie;
  const proficiencyBonus = Math.floor((level - 1) / 4) + 2;

  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Dumbbell className="w-5 h-5 text-purple-600" />
        <h4 className="font-semibold">Core Stats</h4>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Hit Points</div>
          <div className="font-medium">
            +{hitDiceGain} ({hitDiceGain/2 + 1} average)
          </div>
          <div className="text-sm text-gray-500">From Hit Die (d{hitDiceGain})</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Proficiency Bonus</div>
          <div className="font-medium">+{proficiencyBonus}</div>
          <div className="text-sm text-gray-500">
            Applied to proficient skills & attacks
          </div>
        </div>

        {level % 4 === 0 && (
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <div className="text-sm text-purple-600">Ability Score Improvement</div>
            <div className="font-medium">+2 to one ability or +1 to two</div>
            <div className="text-sm text-purple-500">Or select a feat</div>
          </div>
        )}
      </div>
    </div>
  );
}