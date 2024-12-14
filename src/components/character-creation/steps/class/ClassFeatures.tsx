```typescript
import React from 'react';
import { ClassFeature } from '../../../../data/classFeatures';

interface ClassFeaturesProps {
  features: ClassFeature[];
  level: number;
}

export default function ClassFeatures({ features, level }: ClassFeaturesProps) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Class Features at Level {level}</h3>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-purple-900">{feature.name}</h4>
              <span className="text-sm text-gray-500">Level {feature.level}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```