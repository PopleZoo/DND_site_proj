import { useMemo } from 'react';
import { useCharacterCreationStore } from '../store/characterCreationStore';
import { getAllFeats, getFeatById } from '../data/feats/utils';
import { getClassFeatures } from '../utils/classFeatures';
import { classes } from '../data/classes';
import { Feat } from '../types/character';

export function useFeats(classId: string, level: number) {
  const {
    abilityScores,
    selectedFeats: selectedFeatIds = [],
    setSelectedFeats,
  } = useCharacterCreationStore();

  const classData = useMemo(() => 
    classes.find(c => c.id === classId),
    [classId]
  );

  const features = useMemo(() => 
    getClassFeatures(classId, level).map(f => f.name),
    [classId, level]
  );

  const availableFeats = useMemo(() => 
    getAllFeats().filter(feat => {
      if (!feat.prerequisites) return true;
      
      const { requiredClass, requiredLevel, requiredAbilityScore, requiredFeature } = feat.prerequisites;
      
      if (requiredClass && requiredClass !== classId) return false;
      if (requiredLevel && requiredLevel > level) return false;
      
      if (requiredAbilityScore) {
        for (const [ability, score] of Object.entries(requiredAbilityScore)) {
          if ((abilityScores[ability] || 0) < score) return false;
        }
      }
      
      if (requiredFeature && !features.includes(requiredFeature)) return false;
      
      return true;
    }),
    [classId, level, abilityScores, features]
  );

  const selectedFeats = useMemo(() => 
    (selectedFeatIds || [])
      .map(id => getFeatById(id))
      .filter((feat): feat is Feat => feat !== undefined),
    [selectedFeatIds]
  );

  const handleFeatSelect = (featId: string) => {
    setSelectedFeats((prev: string[] = []) => {
      if (prev.includes(featId)) {
        return prev.filter(id => id !== featId);
      }
      
      if (prev.length >= 1) {
        return prev;
      }
      
      return [...prev, featId];
    });
  };

  return {
    availableFeats,
    selectedFeats,
    handleFeatSelect
  };
}