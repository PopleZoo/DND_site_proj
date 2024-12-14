```typescript
import { PDFContent } from '../types/pdf';

export function extractAbilityScores(content: PDFContent[]): {
  stats: Record<string, number>;
  savingThrows: Record<string, number>;
  skills: Record<string, number>;
} {
  const text = content.map(c => c.text).join('\n');
  
  const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  const stats: Record<string, number> = {};
  const savingThrows: Record<string, number> = {};
  
  // Extract ability scores and saving throws
  abilities.forEach(ability => {
    const scoreMatch = text.match(new RegExp(`${ability}:?\\s*(\\d+)`, 'i'));
    const saveMatch = text.match(new RegExp(`${ability} save:?\\s*([+-]?\\d+)`, 'i'));
    
    stats[ability] = parseInt(scoreMatch?.[1] || '10');
    savingThrows[ability] = parseInt(saveMatch?.[1] || '0');
  });

  // Extract skills
  const skillMap = {
    acrobatics: 'dexterity',
    animalHandling: 'wisdom',
    arcana: 'intelligence',
    // ... add all skills
  };

  const skills: Record<string, number> = {};
  Object.keys(skillMap).forEach(skill => {
    const match = text.match(new RegExp(`${skill.replace(/([A-Z])/g, ' $1')}:?\\s*([+-]?\\d+)`, 'i'));
    skills[skill] = parseInt(match?.[2] || '0');
  });

  return { stats, savingThrows, skills };
}
```