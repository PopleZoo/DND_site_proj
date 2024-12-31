import { Class, Stats } from '../../../types/character';

// Mapping Classes
interface ClassData {
  id: number;
  level: number;
  definition: {
    id: number;
    name: string;
    description: string;
    hitDice: number;
    spellCastingAbilityId: number | null;
    classFeatures: FeatureData[];
  };
  subclassDefinition?: {
    id: number;
    name: string;
    description: string;
    features: FeatureData[];
  };
  isStartingClass: boolean;
}

interface FeatureData {
  id: number;
  name: string;
  description: string;
  level: number;
  isHomebrew: boolean;
}

// Mapping Classes Function
export function mapClasses(classesData: ClassData[]): Class[] {
  return classesData.map(cls => ({
    id: cls.id,
    level: cls.level,
    definition: {
      id: cls.definition.id,
      name: cls.definition.name,
      description: cls.definition.description,
      hitDice: cls.definition.hitDice,
      spellcastingAbilityId: cls.definition.spellCastingAbilityId,
      classFeatures: mapClassFeatures(cls.definition.classFeatures)
    },
    subclassDefinition: cls.subclassDefinition ? {
      id: cls.subclassDefinition.id,
      name: cls.subclassDefinition.name,
      description: cls.subclassDefinition.description,
      features: mapClassFeatures(cls.subclassDefinition.features) // Corrected to 'features'
    } : undefined,
    isStartingClass: cls.isStartingClass
  }));
}

// Mapping Class Features Function
function mapClassFeatures(features: FeatureData[]): FeatureData[] {
  return features.map(feature => ({
    id: feature.id,
    name: feature.name,
    description: feature.description,
    level: feature.level,
    isHomebrew: feature.isHomebrew
  }));
}

// Stats Data Interface
export interface StatsData {
  strength?: { value?: number; bonusValue?: number; overrideValue?: number | null };
  dexterity?: { value?: number; bonusValue?: number; overrideValue?: number | null };
  constitution?: { value?: number; bonusValue?: number; overrideValue?: number | null };
  intelligence?: { value?: number; bonusValue?: number; overrideValue?: number | null };
  wisdom?: { value?: number; bonusValue?: number; overrideValue?: number | null };
  charisma?: { value?: number; bonusValue?: number; overrideValue?: number | null };
}

// Mapping Stats Function
export function mapStats(statsData: StatsData): Stats {
  return {
    base: {
      strength: statsData.strength?.value || 10,
      dexterity: statsData.dexterity?.value || 10,
      constitution: statsData.constitution?.value || 10,
      intelligence: statsData.intelligence?.value || 10,
      wisdom: statsData.wisdom?.value || 10,
      charisma: statsData.charisma?.value || 10
    },
    bonus: {
      strength: statsData.strength?.bonusValue || 0,
      dexterity: statsData.dexterity?.bonusValue || 0,
      constitution: statsData.constitution?.bonusValue || 0,
      intelligence: statsData.intelligence?.bonusValue || 0,
      wisdom: statsData.wisdom?.bonusValue || 0,
      charisma: statsData.charisma?.bonusValue || 0
    },
    override: {
      strength: statsData.strength?.overrideValue || null,
      dexterity: statsData.dexterity?.overrideValue || null,
      constitution: statsData.constitution?.overrideValue || null,
      intelligence: statsData.intelligence?.overrideValue || null,
      wisdom: statsData.wisdom?.overrideValue || null,
      charisma: statsData.charisma?.overrideValue || null
    }
  };
}
