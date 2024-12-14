```typescript
import { CharacterData } from '../types/character';

export function validateCharacterData(data: CharacterData): string[] {
  const errors: string[] = [];

  // Required fields
  if (!data.name) errors.push('Character name is required');
  if (!data.species) errors.push('Species is required');
  if (!data.class) errors.push('Class is required');

  // Validate ability scores
  const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  abilities.forEach(ability => {
    const score = data.stats[ability];
    if (score < 1 || score > 20) {
      errors.push(`${ability} score must be between 1 and 20`);
    }
  });

  // Validate level
  if (data.level < 1 || data.level > 20) {
    errors.push('Level must be between 1 and 20');
  }

  // Validate HP
  if (data.abilities.hitPoints.maximum < 1) {
    errors.push('Maximum HP must be greater than 0');
  }

  return errors;
}
```