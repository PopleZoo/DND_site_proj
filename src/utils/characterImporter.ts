import { Character } from '../types/character';

function calculateArmorClass(data: any): number {
  let ac = 10;
  const equippedArmor = data.inventory.find((item: any) => 
    item.equipped && item.definition.armorClass
  );
  
  if (equippedArmor) {
    ac = equippedArmor.definition.armorClass;
  }
  
  return ac;
}

function calculateInitiative(data: any): number {
  const dexMod = Math.floor((data.stats[1].value - 10) / 2);
  return dexMod;
}

function calculateSpeed(data: any): number {
  return data.race?.weightSpeeds?.normal?.walk || 30;
}
class DndBeyondImporter {
  static importCharacter(jsonData: string): Character {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const characterData = data.data;

      // Map all character data for comprehensive storage
      const mappedCharacter: Character = {
        id: characterData.id.toString(),
        name: characterData.name,
        level: characterData.classes.reduce((total: number, cls: any) => total + cls.level, 0),
        race: {
          baseRaceName: characterData.race.baseRaceName,
          subRaceName: characterData.race.subRaceName || undefined,
          isHomebrew: characterData.race.isHomebrew,
          racialTraits: [],
        },
        classes: characterData.classes.map((cls: any) => ({
          id: cls.id,
          name: cls.definition.name,
          level: cls.level,
          hitDice: cls.definition.hitDice,
          isStartingClass: true,
          definition: {
            name: cls.definition.name,
            description: cls.definition.description,
            hitDice: cls.definition.hitDice,
            classFeatures: [],
          },
          subclass: cls.subclassDefinition
            ? {
                name: cls.subclassDefinition.name,
                description: cls.subclassDefinition.description || '',
                features: [],
              }
            : undefined,
          isHomebrew: cls.definition.isHomebrew,
        })),
        stats: [
          { id: 0, name: 'Strength', value: characterData.stats[0], modifier: Math.floor((characterData.stats[0] - 10) / 2), bonusValue: null, overrideValue: null },
          { id: 1, name: 'Dexterity', value: characterData.stats[1], modifier: Math.floor((characterData.stats[1] - 10) / 2), bonusValue: null, overrideValue: null },
          { id: 2, name: 'Constitution', value: characterData.stats[2], modifier: Math.floor((characterData.stats[2] - 10) / 2), bonusValue: null, overrideValue: null },
          { id: 3, name: 'Intelligence', value: characterData.stats[3], modifier: Math.floor((characterData.stats[3] - 10) / 2), bonusValue: null, overrideValue: null },
          { id: 4, name: 'Wisdom', value: characterData.stats[4], modifier: Math.floor((characterData.stats[4] - 10) / 2), bonusValue: null, overrideValue: null },
          { id: 5, name: 'Charisma', value: characterData.stats[5], modifier: Math.floor((characterData.stats[5] - 10) / 2), bonusValue: null, overrideValue: null },
        ],
        hitPoints: {
          current: characterData.baseHitPoints - (characterData.removedHitPoints || 0),
          max: characterData.baseHitPoints,
          temp: characterData.temporaryHitPoints || 0,
          bonusHitPoints: characterData.bonusHitPoints || 0,
          overrideHitPoints: characterData.overrideHitPoints || null,
        },
        armorClass: calculateArmorClass(characterData),
        initiative: calculateInitiative(characterData),
        speed: calculateSpeed(characterData),
        background: characterData.background,
        notes: characterData.notes,
        traits: characterData.traits,
        preferences: characterData.preferences,
        configuration: characterData.configuration,
        currencies: characterData.currencies,
        feats: characterData.feats,
        features: characterData.features,
        customAdjustments: {
          defense: characterData.customDefenseAdjustments,
          senses: characterData.customSenses,
          speeds: characterData.customSpeeds,
          proficiencies: characterData.customProficiencies,
          actions: characterData.customActions,
        },
        characterValues: characterData.characterValues,
        conditions: characterData.conditions,
        deathSaves: characterData.deathSaves,
        spellSlots: characterData.spellSlots,
        pactMagic: characterData.pactMagic,
        sourceCategories: characterData.activeSourceCategories,
        spells: characterData.spells,
        options: characterData.options,
        choices: characterData.choices,
        actions: characterData.actions,
        modifiers: characterData.modifiers,
        classSpells: characterData.classSpells,
        customItems: characterData.customItems,
        campaign: characterData.campaign,
        creatures: characterData.creatures,
        optionalFeatures: {
          origins: characterData.optionalOrigins,
          classFeatures: characterData.optionalClassFeatures,
        },
        meta: {
          dateModified: characterData.dateModified,
          providedFrom: characterData.providedFrom,
          canEdit: characterData.canEdit,
          status: characterData.status,
          statusSlug: characterData.statusSlug,
          campaignSetting: characterData.campaignSetting,
        },
        inventory: characterData.inventory || [],
      };
      
      

      return mappedCharacter;
    } catch (error) {
      console.error('Failed to process character data:', error);
      throw new Error('Invalid character data format');
    }
  }
}

export default DndBeyondImporter;
