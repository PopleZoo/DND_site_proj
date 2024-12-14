import React, { useMemo } from 'react';
import { Class } from '../../../../../types/character';
import { getFeaturesByLevel, getPreviousFeatures } from '../../../../../utils/classFeatures';
import ClassFeatureList from './ClassFeatureList';

interface ClassFeaturesProps {
  classData: Class;
  level: number;
}

export default function ClassFeatures({ classData, level }: ClassFeaturesProps) {
  const currentLevelFeatures = useMemo(() => 
    getFeaturesByLevel(classData.id, level),
    [classData.id, level]
  );

  const previousFeatures = useMemo(() => 
    getPreviousFeatures(classData.id, level),
    [classData.id, level]
  );

  return (
    <div className="space-y-8">
      {currentLevelFeatures.length > 0 && (
        <ClassFeatureList 
          features={currentLevelFeatures} 
          level={level} 
          isNew={true}
        />
      )}
      
      {previousFeatures.length > 0 && (
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Previous Features</h3>
          {Array.from({ length: level - 1 }, (_, i) => i + 1)
            .reverse()
            .map(lvl => {
              const features = getFeaturesByLevel(classData.id, lvl);
              return features.length > 0 && (
                <ClassFeatureList 
                  key={lvl}
                  features={features} 
                  level={lvl}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}