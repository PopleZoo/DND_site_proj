
import React, { useState } from 'react';
import { Stats } from '../../../types/character';
import { Save } from 'lucide-react';

interface AbilityScoresProps {
  stats: Stats[];
  onSave?: (updatedStats: Stats[]) => void;
}

export default function AbilityScores({ stats = [], onSave }: AbilityScoresProps) {
  const [editableStats, setEditableStats] = useState(stats);
  const [isEditing, setIsEditing] = useState(false);

  if (!editableStats.length) {
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

  const handleStatChange = (id: number, value: string) => {
    const newValue = parseInt(value, 10);
    if (isNaN(newValue) || newValue < 1 || newValue > 30) return;

    setEditableStats(prevStats => 
      prevStats.map(stat => 
        stat.id === id ? { ...stat, value: newValue } : stat
      )
    );
  };

  const handleSave = () => {
    if (onSave) {
      onSave(editableStats);
    }
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {editableStats.map((stat) => (
          <div key={stat.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm text-center">{stat.name || 'Unknown'}</h3>
            
            {isEditing ? (
              <div className="mt-2">
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={stat.value || 0}
                  onChange={(e) => handleStatChange(stat.id, e.target.value)}
                  className="w-full text-center text-2xl font-bold border border-gray-300 rounded px-2 py-1"
                />
              </div>
            ) : (
              <div className="text-2xl font-bold text-center">{stat.value || 0}</div>
            )}
            
            <div className="text-purple-600 text-center">
              {getModifierString(stat.value || 0)}
            </div>
            
            {(stat.bonusValue || stat.overrideValue) && (
              <div className="text-sm text-gray-500 mt-1 text-center">
                {stat.bonusValue && <span>Bonus: {stat.bonusValue}</span>}
                {stat.overrideValue && <span>Override: {stat.overrideValue}</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Edit Ability Scores
          </button>
        )}
      </div>
    </div>
  );
}
