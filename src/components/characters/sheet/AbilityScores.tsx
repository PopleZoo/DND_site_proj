import React from 'react';
import { Stats } from '../../../types/character';

interface AbilityScoresProps {
  stats: Stats[];
  isEditing?: boolean;
}

export default function AbilityScores({ stats = [], isEditing = false }: AbilityScoresProps) {
  if (!stats.length) {
    return (
      <div className="text-center py-8 text-light-darker">
        No ability scores available
      </div>
    );
  }

  const handleScoreChange = (statId: number, value: string) => {
    // This will be implemented when we add the update functionality
    console.log('Score changed:', statId, value);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-dark-light p-4 rounded-lg border border-dark">
          <h3 className="text-light text-sm text-center">{stat.name}</h3>
          
          {isEditing ? (
            <input
              type="number"
              value={stat.value}
              onChange={(e) => handleScoreChange(stat.id, e.target.value)}
              className="w-full text-center text-2xl font-bold bg-dark text-light border border-dark rounded px-2 py-1 mt-2"
              min="1"
              max="30"
            />
          ) : (
            <div className="text-2xl font-bold text-light text-center mt-2">{stat.value}</div>
          )}
          
          <div className="text-primary text-center">
            {stat.modifier >= 0 ? `+${stat.modifier}` : stat.modifier}
          </div>
          
          {(stat.bonusValue || stat.overrideValue) && (
            <div className="text-sm text-light-darker mt-1 text-center">
              {stat.bonusValue && <span>Bonus: {stat.bonusValue}</span>}
              {stat.overrideValue && <span>Override: {stat.overrideValue}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}