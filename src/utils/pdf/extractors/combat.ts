```typescript
import { PDFContent } from '../types/pdf';

export function extractCombatInfo(content: PDFContent[]): {
  abilities: {
    initiative: number;
    speed: string;
    armorClass: number;
    hitPoints: {
      maximum: number;
      current: number;
      temporary: number;
    };
    proficiencyBonus: number;
  };
  deathSaves: {
    successes: number;
    failures: number;
  };
} {
  const text = content.map(c => c.text).join('\n');

  const initiativeMatch = text.match(/Initiative:?\s*([+-]?\d+)/i);
  const speedMatch = text.match(/Speed:?\s*(\d+)/i);
  const acMatch = text.match(/Armor Class:?\s*(\d+)/i);
  const hpMatch = text.match(/Hit Points:?\s*(\d+)\s*\/\s*(\d+)/i);
  const tempHpMatch = text.match(/Temporary Hit Points:?\s*(\d+)/i);
  const profMatch = text.match(/Proficiency Bonus:?\s*([+-]?\d+)/i);
  
  // Extract death saves
  const deathSuccessMatch = text.match(/Death Saves Successes:?\s*(\d+)/i);
  const deathFailMatch = text.match(/Death Saves Failures:?\s*(\d+)/i);

  return {
    abilities: {
      initiative: parseInt(initiativeMatch?.[1] || '0'),
      speed: `${speedMatch?.[1] || '30'} ft`,
      armorClass: parseInt(acMatch?.[1] || '10'),
      hitPoints: {
        maximum: parseInt(hpMatch?.[2] || '10'),
        current: parseInt(hpMatch?.[1] || '10'),
        temporary: parseInt(tempHpMatch?.[1] || '0')
      },
      proficiencyBonus: parseInt(profMatch?.[1] || '2')
    },
    deathSaves: {
      successes: parseInt(deathSuccessMatch?.[1] || '0'),
      failures: parseInt(deathFailMatch?.[1] || '0')
    }
  };
}
```