import { Feat, FeatPrerequisites } from '../../../types/character';
import { FEAT_CATEGORIES } from '../../../data/feats/constants';

interface RawFeatData {
  name: string;
  description: string;
  prerequisites?: string;
  benefits: string[];
}

export function convertToFeatData(rawData: RawFeatData): Feat {
  return {
    id: rawData.name.toLowerCase().replace(/\s+/g, '-'),
    name: rawData.name,
    description: rawData.description,
    benefits: rawData.benefits,
    prerequisites: parsePrerequisites(rawData.prerequisites),
    category: determineFeatCategory(rawData)
  };
}

function parsePrerequisites(prereqString?: string): FeatPrerequisites | null {
  if (!prereqString) return null;

  const prerequisites: FeatPrerequisites = {};
  
  // Parse ability score requirements
  const abilityMatches = prereqString.match(/(\w+) (\d+) or higher/g);
  if (abilityMatches) {
    prerequisites.requiredAbilityScore = {};
    abilityMatches.forEach(match => {
      const [_, ability, score] = match.match(/(\w+) (\d+)/) || [];
      if (ability && score) {
        prerequisites.requiredAbilityScore![ability.toLowerCase()] = parseInt(score);
      }
    });
  }

  // Parse level requirements
  const levelMatch = prereqString.match(/level (\d+)/i);
  if (levelMatch) {
    prerequisites.requiredLevel = parseInt(levelMatch[1]);
  }

  // Parse feature requirements
  const featureMatch = prereqString.match(/feature: ([\w\s]+)/i);
  if (featureMatch) {
    prerequisites.requiredFeature = featureMatch[1];
  }

  // Parse proficiency requirements
  const profMatch = prereqString.match(/proficiency in ([\w\s]+)/i);
  if (profMatch) {
    prerequisites.requiredProficiency = profMatch[1];
  }

  return Object.keys(prerequisites).length > 0 ? prerequisites : null;
}

function determineFeatCategory(rawData: RawFeatData): typeof FEAT_CATEGORIES[keyof typeof FEAT_CATEGORIES] {
  const description = rawData.description.toLowerCase();
  const benefits = rawData.benefits.join(' ').toLowerCase();

  if (description.includes('spell') || benefits.includes('spell')) {
    return FEAT_CATEGORIES.MAGIC;
  }
  
  if (description.includes('weapon') || description.includes('armor') || 
      benefits.includes('attack') || benefits.includes('damage')) {
    return FEAT_CATEGORIES.COMBAT;
  }
  
  if (rawData.prerequisites?.includes('level 18') || 
      description.includes('legendary') || 
      description.includes('mythic')) {
    return FEAT_CATEGORIES.EPIC;
  }
  
  return FEAT_CATEGORIES.GENERAL;
}