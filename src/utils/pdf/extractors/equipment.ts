```typescript
import { PDFContent } from '../types/pdf';

export function extractEquipment(content: PDFContent[]): {
  gold: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  items: Array<{
    name: string;
    quantity: number;
    weight: number;
  }>;
} {
  const text = content.map(c => c.text).join('\n');

  // Extract currency
  const currencies = ['cp', 'sp', 'ep', 'gp', 'pp'];
  const gold: Record<string, number> = {};
  
  currencies.forEach(currency => {
    const match = text.match(new RegExp(`${currency}:?\\s*(\\d+)`, 'i'));
    gold[currency] = parseInt(match?.[1] || '0');
  });

  // Extract equipment items
  const itemPattern = /([^(]+)\s*(?:\((\d+)\))?\s*(?:(\d+(?:\.\d+)?)\s*lb)?/i;
  const itemSection = text.match(/Equipment:(.*?)(?:\n\n|\n[A-Z]|$)/s)?.[1] || '';
  
  const items = itemSection.split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const match = line.match(itemPattern);
      if (!match) return null;

      return {
        name: match[1].trim(),
        quantity: parseInt(match[2] || '1'),
        weight: parseFloat(match[3] || '0')
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return { gold, items };
}
```