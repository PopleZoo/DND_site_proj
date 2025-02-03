import React from 'react';
import { ClassFeature } from '../../../../../types/character';
import { Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface ClassFeatureListProps {
  features: ClassFeature[];
  level: number;
  isNew?: boolean;
}

export default function ClassFeatureList({ 
  features, 
  level,
  isNew = false 
}: ClassFeatureListProps) {
  if (!features.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-primary" /> {/* Updated color */}
        <h3 className="text-lg font-semibold text-light">
          {isNew ? `New Features at Level ${level}` : `Level ${level} Features`}
        </h3>
      </div>
      <div className="grid gap-4">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.name} 
            feature={feature} 
            isNew={isNew}
          />
        ))}
      </div>
    </div>
  );
}
