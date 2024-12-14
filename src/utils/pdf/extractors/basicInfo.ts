```typescript
import { PDFContent } from '../types/pdf';

export function extractBasicInfo(content: PDFContent[]): {
  name: string;
  playerName: string;
  alignment: string;
  species: string;
  class: string;
  level: number;
  experiencePoints: number;
} {
  const text = content.map(c => c.text).join('\n');
  
  // Use regex patterns to extract information
  const nameMatch = text.match(/Character Name:?\s*([^\n]+)/i);
  const playerMatch = text.match(/Player Name:?\s*([^\n]+)/i);
  const alignmentMatch = text.match(/Alignment:?\s*([^\n]+)/i);
  const speciesMatch = text.match(/(?:Race|Species):?\s*([^\n]+)/i);
  const classMatch = text.match(/Class:?\s*([^\n]+)/i);
  const levelMatch = text.match(/Level:?\s*(\d+)/i);
  const xpMatch = text.match(/Experience Points:?\s*(\d+)/i);

  return {
    name: nameMatch?.[1]?.trim() || '',
    playerName: playerMatch?.[1]?.trim() || '',
    alignment: alignmentMatch?.[1]?.trim() || '',
    species: speciesMatch?.[1]?.trim() || '',
    class: classMatch?.[1]?.trim() || '',
    level: parseInt(levelMatch?.[1] || '1'),
    experiencePoints: parseInt(xpMatch?.[1] || '0')
  };
}
```