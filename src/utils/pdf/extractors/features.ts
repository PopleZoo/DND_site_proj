```typescript
import { PDFContent } from '../types/pdf';

export interface FeatureData {
  featuresAndTraits: string[];
  proficiencies: string[];
}

export function extractFeatures(content: PDFContent[]): FeatureData {
  const text = content.map(c => c.text).join('\n');

  // Extract features and traits
  const featuresSection = text.match(/Features & Traits:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const features = featuresSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  // Extract proficiencies
  const profSection = text.match(/Proficiencies & Training:([^]*?)(?=\n\s*[A-Z][A-Za-z\s]+:|$)/i);
  const proficiencies = profSection?.[1]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean) || [];

  return {
    featuresAndTraits: features,
    proficiencies
  };
}
```