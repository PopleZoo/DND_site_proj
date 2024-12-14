```typescript
import { PDFContent } from '../types/pdf';

export interface NotesData {
  notes: string;
  alliesAndOrganizations: string[];
  backstory: string;
}

export function extractNotes(content: PDFContent[]): NotesData {
  const text = content.map(c => c.text).join('\n');

  // Extract general notes
  const notesSection = text.match(/Notes:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const notes = notesSection?.[1]?.trim() || '';

  // Extract allies and organizations
  const alliesSection = text.match(/Allies & Organizations:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const allies = alliesSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  // Extract backstory
  const backstorySection = text.match(/Character Backstory:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const backstory = backstorySection?.[1]?.trim() || '';

  return {
    notes,
    alliesAndOrganizations: allies,
    backstory
  };
}
```