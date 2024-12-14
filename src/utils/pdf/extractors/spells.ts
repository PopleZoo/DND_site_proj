```typescript
import { PDFContent } from '../types/pdf';

export function extractSpells(content: PDFContent[]): {
  class: string;
  ability: string;
  saveDC: number;
  attackBonus: number;
  spells: Array<{
    name: string;
    level: number;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
    prepared: boolean;
  }>;
} | undefined {
  const text = content.map(c => c.text).join('\n');

  // Check if character has spellcasting
  const spellcastingMatch = text.match(/Spellcasting Class:?\s*([^\n]+)/i);
  if (!spellcastingMatch) return undefined;

  const spellAbilityMatch = text.match(/Spellcasting Ability:?\s*([^\n]+)/i);
  const spellDCMatch = text.match(/Spell Save DC:?\s*(\d+)/i);
  const spellAttackMatch = text.match(/Spell Attack Bonus:?\s*([+-]?\d+)/i);

  // Extract spells
  const spellPattern = /^(.*?)\s*\((\d+)(?:st|nd|rd|th)\)\s*(?:CT: (.*?))?\s*(?:R: (.*?))?\s*(?:C: (.*?))?\s*(?:D: (.*?))?\s*(?:\[(P)\])?$/i;
  const spellSection = text.match(/Spells:(.*?)(?:\n\n|\n[A-Z]|$)/s)?.[1] || '';

  const spells = spellSection.split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const match = line.match(spellPattern);
      if (!match) return null;

      return {
        name: match[1].trim(),
        level: parseInt(match[2]),
        castingTime: match[3]?.trim() || '1 action',
        range: match[4]?.trim() || 'Self',
        components: match[5]?.trim() || 'V,S',
        duration: match[6]?.trim() || 'Instantaneous',
        prepared: Boolean(match[7])
      };
    })
    .filter((spell): spell is NonNullable<typeof spell> => spell !== null);

  return {
    class: spellcastingMatch[1].trim(),
    ability: spellAbilityMatch?.[1]?.trim() || 'Intelligence',
    saveDC: parseInt(spellDCMatch?.[1] || '10'),
    attackBonus: parseInt(spellAttackMatch?.[1] || '0'),
    spells
  };
}
```