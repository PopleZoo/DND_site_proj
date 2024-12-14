```typescript
import { PDFContent } from '../types/pdf';

export interface AttackData {
  name: string;
  type: string;
  damage: string;
  damageType: string;
  attackBonus: number;
}

export function extractAttacks(content: PDFContent[]): AttackData[] {
  const text = content.map(c => c.text).join('\n');
  
  // Find the attacks section
  const attacksSection = text.match(/Weapon Attacks & Cantrips:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  if (!attacksSection) return [];

  const attackPattern = /([^\n]+)\s*([+-]\d+)?\s*(?:to hit)?\s*(?:,\s*)?(?:(\d+d\d+(?:\s*[+-]\s*\d+)?))?\s*(\w+)\s*damage/gi;
  const attacks: AttackData[] = [];
  
  let match;
  while ((match = attackPattern.exec(attacksSection[1])) !== null) {
    attacks.push({
      name: match[1].trim(),
      type: 'Weapon', // Default to weapon, could be determined by context
      damage: match[3] || '',
      damageType: match[4] || '',
      attackBonus: parseInt(match[2] || '0')
    });
  }

  return attacks;
}
```