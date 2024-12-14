import React from 'react';
import { AbilityScore } from '../../../types/character';

interface AbilityScoreCardProps {
  abilityScore: AbilityScore;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export default function AbilityScoreCard({
  abilityScore,
  value,
  onChange,
  min = 8,
  max = 15,
  disabled = false
}: AbilityScoreCardProps) {
  const modifier = Math.floor((value - 10) / 2);
  const modifierText = modifier >= 0 ? `+${modifier}` : modifier.toString();

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{abilityScore.name}</h3>
        <div className="text-sm text-gray-500">
          Modifier: <span className="font-medium">{modifierText}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{abilityScore.description}</p>

      <div className="flex items-center space-x-4">
        <select
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          disabled={disabled}
          className="w-20 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((score) => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </select>

        {abilityScore.skills.length > 0 && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Skills:</span>{' '}
            {abilityScore.skills.join(', ')}
          </div>
        )}
      </div>

      <div className="mt-3 text-sm text-gray-500">
        <span className="font-medium">Saving Throws:</span>{' '}
        {abilityScore.savingThrowDescription}
      </div>
    </div>
  );
}