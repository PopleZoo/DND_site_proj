import React, { useState } from 'react';
import { useCharacterStore } from '../../store/characterStore';
import { Character } from '../../types/character';
import FileUploader from './FileUploader';

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

const JSONCharacterImport = () => {
  const { addCharacter } = useCharacterStore();
  const [characterData, setCharacterData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (data: any) => {
    try {
      console.log('Uploaded data:', data);
      console.log('Character data structure:', JSON.stringify(data, null, 2));

      if (!data?.data) {
        throw new Error('Invalid data structure');
      }

      const characterData = data.data;
      const character: Character = {
        id: characterData.id.toString(),
        name: characterData.name,
        features: [],
        currencies: {
          cp: characterData.currencies?.cp || 0,
          sp: characterData.currencies?.sp || 0,
          ep: characterData.currencies?.ep || 0,
          gp: characterData.currencies?.gp || 0,
          pp: characterData.currencies?.pp || 0,
        },
        preferences: {
          useHomebrewContent: characterData.preferences?.useHomebrewContent || false,
        },
        level: characterData.classes.reduce((total: number, cls: any) => total + cls.level, 0),
        race: {
          baseRaceName: characterData.race?.baseRaceName || 'Unknown Race',
          subRaceName: characterData.race?.subRaceName || 'No Subrace',
          isHomebrew: characterData.race?.isHomebrew || false,
          racialTraits: Array.isArray(characterData.race?.racialTraits)
            ? characterData.race.racialTraits.map((trait: any) => ({
                name: trait?.name || 'Unknown Trait',
                description: trait?.description || 'No Description',
                snippet: trait?.description || 'No Description',
              }))
            : [],
        },
        classes: characterData.classes.map((cls: any) => ({
          id: cls.id || crypto.randomUUID(),
          name: cls.definition?.name || 'Unknown Class',
          level: cls.level || 0,
          proficiencyBonus: characterData.proficiencyBonus || 2,
          definition: {
            name: cls.definition?.name || 'Unknown Class',
            spellcastingAbility: characterData.spellcastingAbility || 'intelligence',
          },
          subclass: {
            name: cls.subclassDefinition?.name || 'No Subclass',
            description: cls.subclassDefinition?.description || 'No Description',
          },
          features: cls.definition?.classFeatures?.map((feature: any) => ({
            id: feature.id || 'Unknown Feature ID',
            name: feature.name || 'Unknown Feature',
            description: feature.description || 'No Description',
          })),
        })),
        stats: characterData.stats.map((stat: any) => ({
          id: stat.id || 0,
          name: getAbilityName(stat.id),
          value: stat.value || 0,
          modifier: Math.floor((stat.value - 10) / 2),
          bonusValue: stat.bonusValue || 0,
          overrideValue: stat.overrideValue || 0,
        })),
        hitPoints: {
          current: (characterData.baseHitPoints || 0) - (characterData.removedHitPoints || 0),
          max: characterData.baseHitPoints || 0,
          temp: characterData.temporaryHitPoints || 0,
          bonusHitPoints: characterData.bonusHitPoints || 0,
          overrideHitPoints: characterData.overrideHitPoints || null,
        },
        armorClass: calculateArmorClass(characterData),
        initiative: calculateInitiative(characterData),
        speed: calculateSpeed(characterData),
        inventory: Array.isArray(characterData.inventory)
          ? characterData.inventory.map((item: any) => ({
              id: item.id || 'Unknown Item ID',
              name: item.definition.name || 'Unknown Item',
              type: item.definition.type || 'Unknown Type',
              equipped: item.equipped || false,
              description: item.definition.description || 'No Description',
              armorClass: item.definition.armorClass || 0,
              damage: item.definition.damage || 'No Damage',
              quantity: item.quantity || 1,
              weight: item.definition.weight || 0,
              isAttuned: item.isAttuned || false,
              isHomebrew: item.definition.isHomebrew || false,
            }))
          : [],
        spells: {
          class: characterData.spells?.class?.map((cls: any) => ({
            id: cls.id || 'Unknown Spell ID',
            name: cls.definition.name || 'Unknown Spell',
            level: cls.definition.level || 0,
            description: cls.definition.description || 'No Description',
          })) || [],
          race: characterData.spells?.race?.map((raceSpell: any) => ({
            id: raceSpell.id || 'Unknown Spell ID',
            name: raceSpell.definition.name || 'Unknown Spell',
            level: raceSpell.definition.level || 0,
            description: raceSpell.definition.description || 'No Description',
          })) || [],
          item: characterData.spells?.item?.map((itemSpell: any) => ({
            id: itemSpell.id || 'Unknown Spell ID',
            name: itemSpell.definition.name || 'Unknown Spell',
            level: itemSpell.definition.level || 0,
            description: itemSpell.definition.description || 'No Description',
          })) || [],
        },
        conditions: characterData.conditions?.map((condition: any) => ({
          id: condition.id || 'Unknown Condition ID',
          name: condition.name || 'Unknown Condition',
          description: condition.description || 'No Description',
        })),
        inspiration: characterData.inspiration || false,
        deathSaves: {
          successes: characterData.deathSaves?.successCount || 0,
          failures: characterData.deathSaves?.failCount || 0,
          isStable: characterData.deathSaves?.isStable || false,
        },
        notes: Array.isArray(characterData.notes?.personalNotes)
          ? characterData.notes.personalNotes
          : ['No Notes Available'],
      };

      console.log('Mapped character data:', JSON.stringify(character, null, 2));
      addCharacter(character);
      setCharacterData(character);
      setError(null);
    } catch (error) {
      console.error('Error while processing file:', error);
      setError('An error occurred while importing the character. Please check the file format.');
      setCharacterData(null);
    }
  };

  return (
    <div className="p-4">
      <FileUploader onFileUpload={handleFileUpload} />
      {error && <div className="text-red-500">{error}</div>}
      {characterData ? (
        <div>
          <h2>Character Imported Successfully</h2>
        </div>
      ) : (
        <p>No character data available</p>
      )}
    </div>
  );
};

export default JSONCharacterImport;

function getAbilityName(id: number): string {
  const abilities: { [key: number]: string } = {
    1: 'Strength',
    2: 'Dexterity',
    3: 'Constitution',
    4: 'Intelligence',
    5: 'Wisdom',
    6: 'Charisma',
  };
  return abilities[id] || 'Unknown';
}
