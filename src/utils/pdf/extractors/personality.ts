```typescript
import { PDFContent } from '../types/pdf';

export interface PersonalityData {
  traits: string[];
  ideals: string[];
  bonds: string[];
  flaws: string[];
}

export function extractPersonality(content: PDFContent[]): PersonalityData {
  const text = content.map(c => c.text).join('\n');

  const sections = {
    traits: extractSection(text, 'Personality Traits'),
    ideals: extractSection(text, 'Ideals'),
    bonds: extractSection(text, 'Bonds'),
    flaws: extractSection(text, 'Flaws')
  };

  return {
    traits: sections.traits,
    ideals: sections.ideals,
    bonds: sections.bonds,
    flaws: sections.flaws
  };
}

function extractSection(text: string, sectionName: string): string[] {
  const sectionPattern = new RegExp(`${sectionName}:?([^]*?)(?=\\n\\s*[A-Z][A-Za-z\\s]+:|$)`, 'i');
  const match = text.match(sectionPattern);
  if (!match) return [];

  return match[1]
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}
```