import React from 'react';
import { Class } from '../../../../types/character';
import { getLevelUnlockText } from './utils/levelUtils';

interface LevelSelectorProps {
  level: number;
  onChange: (level: number) => void;
  selectedClass: Class | undefined;
}

export default function LevelSelector({ level, onChange, selectedClass }: LevelSelectorProps) {
  const maxLevel = 20;
  const levels = Array.from({ length: maxLevel }, (_, i) => i + 1);

  return (
    <div className="bg-white p-4 rounded-lg border-2 border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="level-select" className="block text-sm font-medium text-gray-700">
            Character Level
          </label>
          <p className="text-sm text-gray-500">
            {selectedClass ? `${selectedClass.name} Level ${level}` : 'Select a class'}
          </p>
        </div>
        <select
          id="level-select"
          value={level}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="ml-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {levels.map((lvl) => {
            const unlockText = getLevelUnlockText(lvl, selectedClass);
            return (
              <option key={lvl} value={lvl}>
                Level {lvl}{unlockText ? ` - ${unlockText}` : ''}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}