import { characterSchema } from '../schemas/character.js';

export class CharacterImporter {
  static validateSchema(data) {
    try {
      // Basic validation of required fields
      const requiredFields = ['name', 'stats', 'race', 'classes'];
      for (const field of requiredFields) {
        if (!data[field]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      // Validate stats
      if (!Array.isArray(data.stats) || data.stats.length !== 6) {
        throw new Error('Character must have exactly 6 ability scores');
      }

      // Validate classes
      if (!Array.isArray(data.classes) || data.classes.length === 0) {
        throw new Error('Character must have at least one class');
      }

      return true;
    } catch (error) {
      console.error('Character validation failed:', error);
      return false;
    }
  }

  static importFromDndBeyond(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      
      if (!this.validateSchema(data)) {
        throw new Error('Invalid character data format');
      }

      // Transform D&D Beyond data to our schema
      return {
        id: data.id,
        name: data.name,
        readonlyUrl: data.readonlyUrl,
        avatarUrl: data.decorations?.avatarUrl,
        stats: data.stats.map(stat => ({
          id: stat.id,
          value: stat.value,
          bonusValue: 0,
          overrideValue: null
        })),
        baseHitPoints: data.baseHitPoints,
        bonusHitPoints: data.bonusHitPoints,
        temporaryHitPoints: data.temporaryHitPoints,
        removedHitPoints: data.removedHitPoints,
        currentXp: data.currentXp,
        race: {
          isSubRace: data.race.isSubRace,
          baseRaceName: data.race.baseRaceName,
          fullName: data.race.fullName,
          description: data.race.description,
          avatarUrl: data.race.avatarUrl,
          isHomebrew: data.race.isHomebrew,
          racialTraits: data.race.racialTraits
        },
        classes: data.classes.map(cls => ({
          id: cls.id,
          level: cls.level,
          isStartingClass: cls.isStartingClass,
          hitDiceUsed: cls.hitDiceUsed,
          definition: {
            name: cls.definition.name,
            description: cls.definition.description,
            hitDice: cls.definition.hitDice,
            classFeatures: cls.definition.classFeatures
          },
          subclassDefinition: cls.subclassDefinition
        })),
        inventory: data.inventory || [],
        currencies: data.currencies || {
          cp: 0, sp: 0, gp: 0, ep: 0, pp: 0
        },
        spells: {
          race: data.spells?.race || [],
          class: data.spells?.class || [],
          item: data.spells?.item || []
        },
        preferences: data.preferences || {
          useHomebrewContent: true,
          showUnarmedStrike: true,
          showScaledSpells: true,
          abilityScoreDisplayType: 1
        }
      };
    } catch (error) {
      console.error('Failed to import character:', error);
      throw error;
    }
  }

  static exportToDndBeyond(character) {
    // Transform our schema back to D&D Beyond format
    // This would be the inverse of the import transformation
    try {
      return {
        id: character.id,
        name: character.name,
        readonlyUrl: character.readonlyUrl,
        decorations: {
          avatarUrl: character.avatarUrl
        },
        stats: character.stats,
        baseHitPoints: character.baseHitPoints,
        bonusHitPoints: character.bonusHitPoints,
        temporaryHitPoints: character.temporaryHitPoints,
        removedHitPoints: character.removedHitPoints,
        currentXp: character.currentXp,
        race: character.race,
        classes: character.classes,
        inventory: character.inventory,
        currencies: character.currencies,
        spells: character.spells,
        preferences: character.preferences
      };
    } catch (error) {
      console.error('Failed to export character:', error);
      throw error;
    }
  }
}