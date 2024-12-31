import { Character } from '../../../types/character';

export class DndBeyondImporter {
  static importCharacter(jsonData: string): Character {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const characterData = data.data;

      // Map all character data for comprehensive storage
      const mappedCharacter: Character = {
      id: characterData.id,
      userId: characterData.userId,
      username: characterData.username,
      name: characterData.name,
      level: characterData.level,
        isAssignedToPlayer: characterData.isAssignedToPlayer,
        readonlyUrl: characterData.readonlyUrl,
        decorations: characterData.decorations,
        personalDetails: {
          socialName: characterData.socialName,
          gender: characterData.gender,
          faith: characterData.faith,
          age: characterData.age,
          hair: characterData.hair,
          eyes: characterData.eyes,
          skin: characterData.skin,
          height: characterData.height,
          weight: characterData.weight,
        },
        inspiration: characterData.inspiration || false,
        hitPoints: {
          base: characterData.baseHitPoints,
          current: characterData.baseHitPoints - (characterData.removedHitPoints || 0),
          temp: characterData.temporaryHitPoints || 0,
          bonus: characterData.bonusHitPoints || 0,
          override: characterData.overrideHitPoints || null,
        },
        xp: {
          current: characterData.currentXp,
          adjustment: characterData.adjustmentXp || 0,
        },
        alignmentId: characterData.alignmentId,
        lifestyleId: characterData.lifestyleId,
        stats: {
          base: characterData.stats,
          bonus: characterData.bonusStats,
          override: characterData.overrideStats,
        },
        background: characterData.background,
        race: characterData.race,
        raceDefinition: {
          id: characterData.raceDefinitionId,
          typeId: characterData.raceDefinitionTypeId,
        },
        notes: characterData.notes,
        traits: characterData.traits,
        preferences: characterData.preferences,
        configuration: characterData.configuration,
        lifestyle: characterData.lifestyle,
        inventory: characterData.inventory,
        currencies: characterData.currencies,
        classes: characterData.classes,
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
      };

      return mappedCharacter;
    } catch (error) {
      console.error('Failed to process character data:', error);
      throw new Error('Invalid character data format');
    }
  }
}