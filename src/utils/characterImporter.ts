import { Character } from '../types/character';

export class CharacterImporter {
  static importFromDndBeyond(jsonData: string): Character {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const characterData = data.data;

      return {
        id: characterData.id.toString(),
        name: characterData.name,
        level: characterData.classes.reduce((total: number, cls: any) => total + cls.level, 0),
        race: {
          baseRaceName: characterData.race.baseRaceName,
          subRaceName: characterData.race.subRaceName || undefined,
          isHomebrew: characterData.race.isHomebrew
        },
        classes: characterData.classes.map((cls: any) => ({
          name: cls.definition.name,
          level: cls.level,
          hitDice: `d${cls.definition.hitDice}`,
          definition: {
            name: cls.definition.name,
            description: cls.definition.description
          },
          subclass: cls.subclassDefinition ? {
            name: cls.subclassDefinition.name
          } : undefined,
          isHomebrew: cls.definition.isHomebrew
        })),
        stats: characterData.stats.map((stat: any) => ({
          id: stat.id,
          value: stat.value
        })),
        hitPoints: {
          current: characterData.baseHitPoints - (characterData.removedHitPoints || 0),
          max: characterData.baseHitPoints,
          temp: characterData.temporaryHitPoints || 0
        },
        armorClass: calculateArmorClass(characterData),
        initiative: calculateInitiative(characterData),
        speed: calculateSpeed(characterData),
        inventory: characterData.inventory.map((item: any) => ({
          id: item.id,
          name: item.definition.name,
          type: item.definition.type,
          equipped: item.equipped,
          definition: {
            description: item.definition.description,
            armorClass: item.definition.armorClass,
            damage: item.definition.damage?.diceString
          },
          isHomebrew: item.definition.isHomebrew
        })),
        spells: {
          class: characterData.classSpells?.[0]?.spells.map((spell: any) => ({
            id: spell.definition.id,
            name: spell.definition.name,
            level: spell.definition.level,
            description: spell.definition.description,
            prepared: spell.prepared
          })) || []
        },
        features: characterData.features || [],
        conditions: characterData.conditions || [],
        notes: characterData.notes?.personalNotes || []
      };
    } catch (error) {
      console.error('Failed to parse character data:', error);
      throw new Error('Invalid character data format');
    }
  }
}

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