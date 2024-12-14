import React from 'react';
import { Class } from '../../../../../types/character';
import { getAllLevelGains } from '../../../../../utils/levelGains';
import LevelGainsList from './LevelGainsList';

interface LevelOverviewProps {
  classData: Class;
  level: number;
}

export default function LevelOverview({ classData, level }: LevelOverviewProps) {
  const allGains = getAllLevelGains(classData, level);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-900">Level Progression</h2>
      
      {/* Current Level */}
      <LevelGainsList
        level={level}
        gains={allGains[level]}
        isCurrentLevel={true}
      />

      {/* Previous Levels */}
      {level > 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Previous Levels</h3>
          <div className="space-y-4">
            {Object.entries(allGains)
              .filter(([lvl]) => Number(lvl) < level)
              .reverse()
              .map(([lvl, gains]) => (
                <LevelGainsList
                  key={lvl}
                  level={Number(lvl)}
                  gains={gains}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}