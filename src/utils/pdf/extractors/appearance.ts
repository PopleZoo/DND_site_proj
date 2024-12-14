```typescript
import { PDFContent } from '../types/pdf';

export interface AppearanceData {
  gender: string;
  age: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
}

export function extractAppearance(content: PDFContent[]): AppearanceData {
  const text = content.map(c => c.text).join('\n');

  const fields = {
    gender: extractField(text, 'Gender'),
    age: extractField(text, 'Age'),
    height: extractField(text, 'Height'),
    weight: extractField(text, 'Weight'),
    eyeColor: extractField(text, 'Eyes'),
    hairColor: extractField(text, 'Hair'),
    skinColor: extractField(text, 'Skin')
  };

  return fields;
}

function extractField(text: string, fieldName: string): string {
  const pattern = new RegExp(`${fieldName}:?\\s*([^\\n]+)`, 'i');
  const match = text.match(pattern);
  return match?.[1]?.trim() || '';
}
```