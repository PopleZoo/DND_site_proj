import { FeatPrerequisites } from '../../types/character';

export function checkPrerequisites(
  prerequisites: FeatPrerequisites | null,
  {
    classId,
    level,
    abilityScores,
    features = [],
    proficiencies = []
  }: {
    classId: string;
    level: number;
    abilityScores: Record<string, number>;
    features?: string[];
    proficiencies?: string[];
  }
): boolean {
  if (!prerequisites) return true;

  const {
    requiredClass,
    requiredLevel,
    requiredAbilityScore,
    requiredFeature,
    requiredProficiency
  } = prerequisites;

  if (requiredClass && requiredClass !== classId) return false;
  if (requiredLevel && requiredLevel > level) return false;

  if (requiredAbilityScore) {
    for (const [ability, score] of Object.entries(requiredAbilityScore)) {
      if (!abilityScores || (abilityScores[ability] || 0) < score) return false;
    }
  }

  if (requiredFeature && !features.some(f => 
    f.toLowerCase().includes(requiredFeature.toLowerCase())
  )) {
    return false;
  }

  if (requiredProficiency && !proficiencies.includes(requiredProficiency)) {
    return false;
  }

  return true;
}