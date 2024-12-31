import React from 'react';
import { Class } from '../../../../../types/character';
import { Book } from 'lucide-react';
import { getFeaturesByLevel } from '../../../../../utils/classFeatures';

interface FeaturesGainsProps {
  classData: Class;
  level: number;
}

export default function FeaturesGains({ classData, level }: FeaturesGainsProps) {
  const features = getFeaturesByLevel(classData.id, level);
  
  if (!features.length) return null;

  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Book className="w-5 h-5 text-purple-600" />
        <h4 className="font-semibold">Features</h4>
      </div>

      <div className="grid gap-4">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200"
          >
            <h5 className="font-medium text-purple-900">{feature.name}</h5>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}