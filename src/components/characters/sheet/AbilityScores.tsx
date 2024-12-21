import React from 'react';
import { Stats } from '../../../types/character';

interface AbilityScoresProps {
  stats: Stats[];
}

export default function AbilityScores({ stats = [] }: AbilityScoresProps) {
  if (!stats.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No ability scores available
      </div>
    );
  }

  const getModifierString = (score: number) => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : modifier.toString();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-600 text-sm">{stat.name || 'Unknown'}</h3>
          <div className="text-2xl font-bold">{stat.value || 0}</div>
          <div className="text-purple-600">{getModifierString(stat.value || 0)}</div>
          {(stat.bonusValue || stat.overrideValue) && (
            <div className="text-sm text-gray-500 mt-1">
              {stat.bonusValue && <span>Bonus: {stat.bonusValue}</span>}
              {stat.overrideValue && <span>Override: {stat.overrideValue}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}