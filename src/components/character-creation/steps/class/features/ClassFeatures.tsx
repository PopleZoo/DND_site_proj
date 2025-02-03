import React, { useMemo, useState } from 'react';
import { Class, Subclass } from '../../../../../types/character';
import { getFeaturesByLevel, getPreviousFeatures } from '../../../../../utils/classFeatures';
import ClassFeatureList from './ClassFeatureList';
import SubclassSelection from './SubclassSelection';
import { useCharacterCreationStore } from '../../../../../store/characterCreationStore';

interface ClassFeaturesProps {
  classData: Class;
  level: number;
}

export default function ClassFeatures({ classData, level }: ClassFeaturesProps) {
  const setSelectedSubclass = useCharacterCreationStore(state => state.setSelectedSubclass);
  const [selectedSubclass, setSelectedSubclassState] = useState<Subclass | null>(null);
  const currentLevelFeatures = useMemo(() => 
    getFeaturesByLevel(classData.id, level),
    [classData.id, level]
  );

  const previousFeatures = useMemo(() => 
    getPreviousFeatures(classData.id, level),
    [classData.id, level]
  );

  const handleSubclassSelect = (subclass: Subclass) => {
    setSelectedSubclass(subclass.id);
    setSelectedSubclassState(subclass);
  };

  return (
    <div className="space-y-8">
      {level >= 3 && classData.definition.subclasses && classData.definition.subclasses.length > 0 && (
        <SubclassSelection 
          subclasses={classData.definition.subclasses || []}
          onSelect={handleSubclassSelect}
        />
      )}
      {currentLevelFeatures.length > 0 && (
        <ClassFeatureList 
          features={currentLevelFeatures} 
          level={level} 
          isNew={true}
        />
      )}
      
      {previousFeatures.length > 0 && (
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-light mb-4">Previous Features</h3> {/* Updated color */}
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
