import React from 'react';
import { AbilityScoreMethod } from '../../../types/character';
import { Dice6 } from 'lucide-react';

const methods: AbilityScoreMethod[] = [
  {
    id: 'standard',
    name: 'Standard Array',
    description: 'Use the standard set of scores: 15, 14, 13, 12, 10, 8'
  },
  {
    id: 'pointbuy',
    name: 'Point Buy',
    description: 'Spend points to customize your ability scores'
  },
  {
    id: 'roll',
    name: 'Roll Scores',
    description: 'Roll 4d6, drop the lowest die for each ability score'
  }
];

interface AbilityScoreMethodsProps {
  selectedMethod: AbilityScoreMethod['id'];
  onMethodChange: (method: AbilityScoreMethod['id']) => void;
}

export default function AbilityScoreMethods({
  selectedMethod,
  onMethodChange
}: AbilityScoreMethodsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onMethodChange(method.id)}
          className={`p-4 rounded-lg text-left transition-all ${
            selectedMethod === method.id
              ? 'bg-purple-50 border-2 border-purple-600'
              : 'bg-white border-2 border-gray-100 hover:border-purple-200'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {method.id === 'roll' && <Dice6 className="w-5 h-5 text-purple-600" />}
            <h3 className="font-semibold">{method.name}</h3>
          </div>
          <p className="text-sm text-gray-600">{method.description}</p>
        </button>
      ))}
    </div>
  );
}