import { Class, ClassFeature } from '../../../types/character';

interface RawClassData {
  name: string;
  description: string;
  hitDie: string;
  proficiencies: string[];
  features: string[];
}

export function convertToClassData(rawData: RawClassData): Class {
  return {
    id: rawData.name.toLowerCase().replace(/\s+/g, '-'),
    name: rawData.name,
    description: rawData.description,
    hitDie: parseInt(rawData.hitDie.match(/\d+/)?.[0] || '8'),
    primaryAbility: extractPrimaryAbility(rawData.description),
    savingThrows: extractSavingThrows(rawData.proficiencies),
    proficiencies: rawData.proficiencies,
    features: convertFeatures(rawData.features),
    spellcasting: rawData.features.some(f => f.toLowerCase().includes('spellcasting')),
    subclassLevel: determineSubclassLevel(rawData.features),
    isHomebrew: false
  };
}

function extractPrimaryAbility(description: string): string {
  // Implementation would parse the class description to find primary ability
  const abilityMatches = description.match(/primary ability (?:score )?is (\w+)/i);
  return abilityMatches?.[1] || 'Strength';
}

function extractSavingThrows(proficiencies: string[]): string[] {
  return proficiencies
    .filter(p => p.toLowerCase().includes('saving throw'))
    .map(p => p.replace(/saving throw/i, '').trim());
}

function convertFeatures(rawFeatures: string[]): ClassFeature[] {
  return rawFeatures.map((feature, index) => {
    const levelMatch = feature.match(/\((\d+)(?:st|nd|rd|th) level\)/i);
    return {
      id: `feature-${index}`,
      name: feature.split(':')[0].trim(),
      description: feature.split(':')[1]?.trim() || '',
      level: levelMatch ? parseInt(levelMatch[1]) : 1
    };
  });
}

function determineSubclassLevel(features: string[]): number {
  const subclassFeature = features.find(f => 
    f.toLowerCase().includes('subclass') || 
    f.toLowerCase().includes('archetype')
  );
  
  if (subclassFeature) {
    const levelMatch = subclassFeature.match(/\d+/);
    return levelMatch ? parseInt(levelMatch[0]) : 3;
  }
  
  return 3; // Default subclass level
}