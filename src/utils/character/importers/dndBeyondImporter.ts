import { Character, Race, Class, Stats, HitPoints, Inventory, Spells } from '../../../types/character';
import { mapStats } from '../mappers/statsMapper';
import { mapClasses } from '../mappers/classMapper';
import { mapInventory } from '../mappers/inventoryMapper';
import { mapSpells } from '../mappers/spellMapper';

export class DndBeyondImporter {
  static importCharacter(jsonData: string): Character {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const characterData = data.data;

      return {
        id: characterData.id.toString(),
        name: characterData.name,
        level: this.calculateLevel(characterData.classes),
        race: this.mapRace(characterData.race),
        classes: mapClasses(characterData.classes),
        stats: mapStats(characterData.stats),
        hitPoints: this.mapHitPoints(characterData),
        armorClass: this.calculateArmorClass(characterData),
        initiative: this.calculateInitiative(characterData),
        speed: this.calculateSpeed(characterData),
        inventory: mapInventory(characterData.inventory),
        spells: mapSpells(characterData.classSpells),
        features: this.mapFeatures(characterData),
        conditions: characterData.conditions || [],
        notes: characterData.notes?.personalNotes || [],
        background: this.mapBackground(characterData.background),
        currencies: characterData.currencies || {},
        preferences: characterData.preferences || {},
        proficiencyBonus: characterData.proficiencyBonus || 0
      };
    } catch (error) {
      console.error('Failed to parse character data:', error);
      throw new Error('Invalid character data format');
    }
  }

  private static calculateLevel(classes: any[]): number {
    return classes.reduce((total: number, cls: any) => total + cls.level, 0);
  }

  private static mapRace(raceData: any): Race {
    return {
      baseRaceName: raceData.baseRaceName,
      subRaceName: raceData.subRaceName || undefined,
      isHomebrew: raceData.isHomebrew,
      racialTraits: raceData.racialTraits?.map((trait: any) => ({
        name: trait.definition.name,
        description: trait.definition.description,
        snippet: trait.definition.snippet
      })) || []
    };
  }

  private static mapHitPoints(data: any): HitPoints {
    return {
      current: data.baseHitPoints - (data.removedHitPoints || 0),
      max: data.baseHitPoints,
      temp: data.temporaryHitPoints || 0,
      bonusHitPoints: data.bonusHitPoints || 0,
      overrideHitPoints: data.overrideHitPoints || null
    };
  }

  private static calculateArmorClass(data: any): number {
    let ac = 10;
    const equippedArmor = data.inventory.find((item: any) => 
      item.equipped && item.definition.armorClass
    );
    
    if (equippedArmor) {
      ac = equippedArmor.definition.armorClass;
    }
    
    return ac;
  }

  private static calculateInitiative(data: any): number {
    const dexMod = Math.floor((data.stats[1].value - 10) / 2);
    return dexMod;
  }

  private static calculateSpeed(data: any): number {
    return data.race?.weightSpeeds?.normal?.walk || 30;
  }

  private static mapFeatures(data: any): any[] {
    const features: any[] = [];
    
    // Map class features
    data.classes?.forEach((cls: any) => {
      cls.classFeatures?.forEach((feature: any) => {
        features.push({
          name: feature.definition.name,
          description: feature.definition.description,
          source: 'Class',
          level: feature.requiredLevel
        });
      });
    });

    // Map racial features
    data.race?.racialTraits?.forEach((trait: any) => {
      features.push({
        name: trait.definition.name,
        description: trait.definition.description,
        source: 'Race'
      });
    });

    return features;
  }

  private static mapBackground(background: any): any {
    if (!background) return null;

    return {
      name: background.definition?.name || background.customBackground?.name,
      description: background.definition?.description || background.customBackground?.description,
      feature: {
        name: background.definition?.featureName || background.customBackground?.featureName,
        description: background.definition?.featureDescription || background.customBackground?.featureDescription
      },
      isCustom: background.hasCustomBackground || false
    };
  }
}