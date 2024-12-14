import React from 'react';
import { ClassFeature } from '../../../../../types/character';
import { Star } from 'lucide-react';

interface FeatureCardProps {
  feature: ClassFeature;
  isNew?: boolean;
}

export default function FeatureCard({ feature, isNew = false }: FeatureCardProps) {
  return (
    <div 
      className={`p-4 rounded-lg border-2 ${
        isNew 
          ? 'bg-purple-50 border-purple-200' 
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="flex items-start space-x-2">
        {isNew && <Star className="w-4 h-4 text-yellow-500 mt-1" />}
        <div>
          <h4 className={`font-medium ${
            isNew ? 'text-purple-900' : 'text-gray-900'
          }`}>
            {feature.name}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}