import { Class } from '../../../types/character';

export function mapClasses(classesData: any[]): Class[] {
  return classesData.map(cls => ({
    id: cls.id,
    name: cls.definition.name,
    level: cls.level,
    hitDice: cls.definition.hitDice,
    isStartingClass: cls.isStartingClass,
    definition: {
      name: cls.definition.name,
      description: cls.definition.description,
      hitDice: cls.definition.hitDice,
      primaryAbility: cls.definition.primaryAbility || 'Strength', // Default to Strength if not provided
      savingThrows: cls.definition.savingThrows || ['Strength', 'Dexterity'], // Default to common saving throws
      spellcastingAbility: cls.definition.spellCastingAbilityId,
      classFeatures: mapClassFeatures(cls.classFeatures)
    },
    subclass: cls.subclassDefinition ? {
      id: cls.subclassDefinition.id || cls.subclassDefinition.name.toLowerCase().replace(/\s+/g, '-'),
      name: cls.subclassDefinition.name,
      description: cls.subclassDefinition.description,
      features: mapClassFeatures(cls.subclassDefinition.features || [])
    } : undefined,
    isHomebrew: cls.definition.isHomebrew
  }));
}

function mapClassFeatures(features: any[]): any[] {
  return features.map(feature => ({
    name: feature.definition?.name || feature.name,
    description: feature.definition?.description || feature.description,
    level: feature.requiredLevel || feature.level,
    isHomebrew: feature.definition?.isHomebrew || false
  }));
}