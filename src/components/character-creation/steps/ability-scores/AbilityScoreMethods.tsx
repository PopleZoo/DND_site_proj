import React from 'react';
import { Dice6 } from 'lucide-react';
import { ABILITY_SCORE_METHODS } from '../../../../constants/characterCreation';

interface AbilityScoreMethodsProps {
  selectedMethod: 'standard' | 'pointbuy' | 'roll';
  onMethodChange: (method: 'standard' | 'pointbuy' | 'roll') => void;
}

export default function AbilityScoreMethods({
  selectedMethod,
  onMethodChange
}: AbilityScoreMethodsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {ABILITY_SCORE_METHODS.map((method) => (
        <button
          key={method.id}
          onClick={() => onMethodChange(method.id as 'standard' | 'pointbuy' | 'roll')}
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