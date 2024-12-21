import React, { useState } from 'react';
import { useCharacterStore } from '../../store/characterStore';
import FileUploader from './FileUploader'; // Ensure correct import
import CharacterCard from '../characters/CharacterCard'; // Import CharacterCard

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

      const character = {
        id: data?.data?.id?.toString() || 'Unknown ID',
        name: data?.data?.name || 'Unknown Name',
        race: {
          id: data?.data?.race?.baseRaceId?.toString() || 'Unknown Race ID',
          name: data?.data?.race?.fullName || 'Unknown Race',
          baseRaceName: data?.data?.race?.baseRaceName || 'Unknown Race',
          subRaceName: data?.data?.race?.subRaceName || 'No Subrace',
          isHomebrew: data?.data?.race?.isHomebrew || false,
          traits: Array.isArray(data?.data?.race?.racialTraits)
            ? data.data.race.racialTraits.map((trait: any) => ({
                id: trait?.id?.toString() || 'Unknown Trait ID',
                name: trait?.name || 'Unknown Trait',
                description: trait?.description || 'No Description',
                isHomebrew: trait?.isHomebrew || false,
              }))
            : [],
        },
        classes: data?.data?.classes?.map((cls: any) => ({
          id: cls?.id || crypto.randomUUID(),
          name: cls?.definition?.name || 'Unknown Class',
          level: cls?.level || 0,
          subclass: {
            name: cls?.subclassDefinition?.name || 'No Subclass',
            description: cls?.subclassDefinition?.description || 'No Description',
          },
          features: Array.isArray(cls?.definition?.classFeatures)
            ? cls.definition.classFeatures.map((feature: any) => ({
                id: feature.id || 'Unknown Feature ID',
                name: feature.name || 'Unknown Feature',
                description: feature.description || 'No Description',
              }))
            : [],
        })) || [],
        stats: Array.isArray(data?.data?.stats)
          ? data.data.stats.map((stat: any) => ({
              id: stat?.id || 0,
              name: getAbilityName(stat?.id),
              value: stat?.value || 0,
              modifier: Math.floor((stat?.value - 10) / 2), // Calculate modifier dynamically
            }))
          : [],
        hp: {
          current: (data?.data?.baseHitPoints || 0) - (data?.data?.removedHitPoints || 0),
          max: data?.data?.baseHitPoints || 0,
          temp: data?.data?.temporaryHitPoints || 0,
        },
        inventory: Array.isArray(data?.data?.inventory)
          ? data.data.inventory.map((item: any) => ({
              id: item.id || 'Unknown Item ID',
              name: item.definition.name || 'Unknown Item',
              type: item.definition.type || 'Unknown Type',
              equipped: item.equipped || false,
              description: item.definition.description || 'No Description',
              armorClass: item.definition.armorClass || 0,
              damage: item.definition.damage || 'No Damage',
            }))
          : [],
        modifiers: Array.isArray(data?.data?.modifiers)
          ? data.data.modifiers.map((modifier: any) => ({
              id: modifier.id || 'Unknown Modifier ID',
              type: modifier.type || 'Unknown Type',
              subType: modifier.subType || 'Unknown Subtype',
              value: modifier.value || 0,
              description: modifier.description || 'No Description',
            }))
          : [],
        feats: Array.isArray(data?.data?.feats)
          ? data.data.feats.map((feat: any) => ({
              id: feat.id || 'Unknown Feat ID',
              name: feat.name || 'Unknown Feat',
              description: feat.description || 'No Description',
            }))
          : [],
        spells: Array.isArray(data?.data?.spells?.class)
          ? data?.data?.spells.class.flatMap((spellClass: any) =>
              Array.isArray(spellClass.spells)
                ? spellClass.spells.map((spell: any) => ({
                    id: spell.id || 'Unknown Spell ID',
                    name: spell.definition.name || 'Unknown Spell',
                    level: spell.definition.level || 0,
                    description: spell.definition.description || 'No Description',
                    prepared: spell.prepared || false,
                  }))
                : []
            )
          : [],
        skills: Array.isArray(data?.data?.skills)
          ? data.data.skills.map((skill: any) => ({
              name: skill.name || 'Unknown Skill',
              proficient: skill.proficient || false,
              modifier: skill.modifier || 0,
            }))
          : [],
        conditions: Array.isArray(data?.data?.conditions)
          ? data.data.conditions.map((condition: any) => ({
              id: condition.id || 'Unknown Condition ID',
              name: condition.name || 'Unknown Condition',
              description: condition.description || 'No Description',
            }))
          : [],
        inspiration: data?.data?.inspiration || false,
        level: data?.data?.classes?.reduce((total: number, cls: any) => total + (cls?.level || 0), 0) || 0,
        deathSaves: {
          successes: data?.data?.deathSaves?.successCount || 0,
          failures: data?.data?.deathSaves?.failCount || 0,
        },
        notes: Array.isArray(data?.data?.notes?.personalNotes)
          ? data.data.notes.personalNotes
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
