import { Feat, FeatPrerequisites } from '../../types/character';
import { FeatCategory } from './constants';
import { generalFeats } from './categories/general';
import { combatFeats } from './categories/combat';
import { magicFeats } from './categories/magic';
import { epicFeats } from './categories/epic';

const allFeats = [...generalFeats, ...combatFeats, ...magicFeats, ...epicFeats];

export function getFeatsByCategory(category: FeatCategory): Feat[] {
  return allFeats.filter(feat => feat.category === category);
}

export function getFeatById(id: string): Feat | undefined {
  return allFeats.find(feat => feat.id === id);
}

export function getAllFeats(): Feat[] {
  return allFeats;
}

export function checkPrerequisites(
  prerequisites: FeatPrerequisites | null,
  context: {
    classId: string;
    level: number;
    abilityScores: Record<string, number>;
    features?: string[];
    proficiencies?: string[];
  }
): boolean {
  if (!prerequisites) return true;

  const { classId, level, abilityScores, features = [], proficiencies = [] } = context;
  const { requiredClass, requiredLevel, requiredAbilityScore, requiredFeature, requiredProficiency } = prerequisites;

  if (requiredClass && requiredClass !== classId) return false;
  if (requiredLevel && requiredLevel > level) return false;

  if (requiredAbilityScore) {
    for (const [ability, score] of Object.entries(requiredAbilityScore)) {
      if ((abilityScores[ability] || 0) < score) return false;
    }
  }

  if (requiredFeature && !features.some(f => f.toLowerCase().includes(requiredFeature.toLowerCase()))) {
    return false;
  }

  if (requiredProficiency && !proficiencies.includes(requiredProficiency)) {
    return false;
  }

  return true;
}