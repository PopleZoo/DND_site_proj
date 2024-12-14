import React from 'react';
import { Class, ClassFeature } from '../../../../../types/character';
import { Shield, Star, Scroll } from 'lucide-react';

interface UnlockedFeaturesProps {
  classData: Class;
  level: number;
  currentFeatures: ClassFeature[];
  previousFeatures: ClassFeature[];
}

export default function UnlockedFeatures({
  classData,
  level,
  currentFeatures,
  previousFeatures
}: UnlockedFeaturesProps) {
  const newFeatures = currentFeatures.filter(
    feature => !previousFeatures.some(prev => prev.id === feature.id)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold">Class Features</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {newFeatures.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <h4 className="font-medium">New at Level {level}</h4>
            </div>
            {newFeatures.map((feature) => (
              <div
                key={feature.id}
                className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg"
              >
                <h5 className="font-medium text-purple-900">{feature.name}</h5>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {previousFeatures.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scroll className="w-4 h-4 text-gray-500" />
              <h4 className="font-medium">Previous Features</h4>
            </div>
            {previousFeatures.map((feature) => (
              <div
                key={feature.id}
                className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg"
              >
                <h5 className="font-medium text-gray-700">{feature.name}</h5>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}