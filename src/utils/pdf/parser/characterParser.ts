```typescript
import { PDFDocument } from 'pdf-lib';
import { parsePDF, extractSections } from './index';
import { extractBasicInfo } from '../extractors/basicInfo';
import { extractAbilityScores } from '../extractors/abilities';
import { extractCombatInfo } from '../extractors/combat';
import { extractEquipment } from '../extractors/equipment';
import { extractSpells } from '../extractors/spells';
import { extractPersonality } from '../extractors/personality';
import { extractAppearance } from '../extractors/appearance';
import { extractBackground } from '../extractors/background';
import { extractNotes } from '../extractors/notes';
import { CharacterData } from '../types/character';

const SECTION_MARKERS = [
  'CHARACTER INFO',
  'ABILITY SCORES',
  'COMBAT',
  'EQUIPMENT',
  'SPELLS',
  'FEATURES & TRAITS',
  'PERSONALITY',
  'APPEARANCE',
  'BACKGROUND',
  'NOTES'
];

export async function parseCharacterSheet(file: File): Promise<CharacterData> {
  const parseResult = await parsePDF(file);
  const sections = extractSections(parseResult.content, SECTION_MARKERS);

  // Extract all character data
  const basicInfo = extractBasicInfo(sections['CHARACTER INFO'] || []);
  const { stats, savingThrows, skills } = extractAbilityScores(sections['ABILITY SCORES'] || []);
  const { abilities, deathSaves } = extractCombatInfo(sections['COMBAT'] || []);
  const equipment = extractEquipment(sections['EQUIPMENT'] || []);
  const spellcasting = extractSpells(sections['SPELLS'] || []);
  const personality = extractPersonality(sections['PERSONALITY'] || []);
  const appearance = extractAppearance(sections['APPEARANCE'] || []);
  const background = extractBackground(sections['BACKGROUND'] || []);
  const notes = extractNotes(sections['NOTES'] || []);

  // Combine all data into character object
  return {
    ...basicInfo,
    background,
    stats,
    savingThrows,
    skills,
    abilities,
    inspiration: false,
    deathSaves,
    equipment,
    featuresAndTraits: [],
    attacksAndSpells: [],
    spellcasting,
    personality,
    appearance,
    notes: notes.notes,
    alliesAndOrganizations: notes.alliesAndOrganizations,
    backstory: notes.backstory
  };
}
```