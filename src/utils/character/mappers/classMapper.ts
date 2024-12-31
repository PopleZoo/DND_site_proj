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
      spellcastingAbility: cls.definition.spellCastingAbilityId,
      classFeatures: mapClassFeatures(cls.classFeatures)
    },
    subclass: cls.subclassDefinition ? {
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