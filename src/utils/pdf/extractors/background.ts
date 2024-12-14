```typescript
import { PDFContent } from '../types/pdf';

export interface BackgroundData {
  name: string;
  features: string[];
  skills: string[];
  startingEquipment: string[];
}

export function extractBackground(content: PDFContent[]): BackgroundData {
  const text = content.map(c => c.text).join('\n');

  // Extract background name
  const nameMatch = text.match(/Background:?\s*([^\n]+)/i);
  const name = nameMatch?.[1]?.trim() || '';

  // Extract background features
  const featuresSection = text.match(/Background Features:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const features = featuresSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  // Extract background skills
  const skillsSection = text.match(/Background Skills:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const skills = skillsSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  // Extract starting equipment
  const equipmentSection = text.match(/Starting Equipment:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const startingEquipment = equipmentSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  return {
    name,
    features,
    skills,
    startingEquipment
  };
}
```