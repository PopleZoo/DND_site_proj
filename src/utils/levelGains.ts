import { Class, LevelGains, SpellcastingProgression } from '../types/character';
import { getFeaturesByLevel } from './classFeatures';

export function calculateProficiencyBonus(level: number): number {
  return Math.floor((level - 1) / 4) + 2;
}

export function calculateHitPoints(classData: Class, level: number, isFirstLevel: boolean): number {
  if (isFirstLevel) {
    return classData.hitDie; // Maximum at first level
  }
  return Math.floor(classData.hitDie / 2) + 1; // Average for subsequent levels
}

export function calculateSpellProgression(classData: Class, level: number): SpellcastingProgression | undefined {
  if (!classData.spellcasting) return undefined;

  // This is a simplified example - adjust based on your game's rules
  const cantripsKnown = Math.min(4, Math.floor(level / 4) + 2);
  const spellsKnown = Math.floor(level * 1.5) + 1;
  
  // Calculate spell slots based on level
  const spellSlots: Record<number, number> = {};
  const maxSpellLevel = Math.min(Math.ceil(level / 2), 9);
  
  for (let i = 1; i <= maxSpellLevel; i++) {
    spellSlots[i] = Math.min(4, Math.ceil((level + 1) / 3));
  }

  return {
    spellcastingAbility: classData.spellcastingAbility || '',
    cantripsKnown,
    spellsKnown,
    spellSlots
  };
}

export function getLevelGains(classData: Class, level: number, isFirstLevel = false): LevelGains {
  return {
    hitPoints: calculateHitPoints(classData, level, isFirstLevel),
    proficiencyBonus: calculateProficiencyBonus(level),
    features: getFeaturesByLevel(classData.id, level),
    spellcasting: calculateSpellProgression(classData, level),
    abilityScoreImprovement: level % 4 === 0
  };
}

export function getAllLevelGains(classData: Class, currentLevel: number): Record<number, LevelGains> {
  const gains: Record<number, LevelGains> = {};
  
  for (let level = 1; level <= currentLevel; level++) {
    gains[level] = getLevelGains(classData, level, level === 1);
  }
  
  return gains;
}