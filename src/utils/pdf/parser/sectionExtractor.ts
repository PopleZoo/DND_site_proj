```typescript
import { PDFContent } from '../types/pdf';

export function extractTextByPattern(content: PDFContent[], pattern: RegExp): string | null {
  const text = content.map(c => c.text).join('\n');
  const match = text.match(pattern);
  return match?.[1]?.trim() || null;
}

export function extractNumberByPattern(content: PDFContent[], pattern: RegExp): number | null {
  const text = extractTextByPattern(content, pattern);
  if (!text) return null;
  return parseInt(text) || null;
}

export function extractListByPattern(content: PDFContent[], pattern: RegExp): string[] {
  const text = extractTextByPattern(content, pattern);
  if (!text) return [];
  
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}

export function extractKeyValuePairs(content: PDFContent[], keyPattern: RegExp): Record<string, string> {
  const text = content.map(c => c.text).join('\n');
  const pairs: Record<string, string> = {};
  
  let match;
  while ((match = keyPattern.exec(text)) !== null) {
    const [_, key, value] = match;
    pairs[key.toLowerCase()] = value.trim();
  }

  return pairs;
}
```