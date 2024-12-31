import React from 'react';
import { ClassFeature } from '../../../types/character'; // Ensure the correct import path

interface FeatureListProps {
  features: ClassFeature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  // Group features by class (or another attribute like subclass)
  const featuresByClass = features.reduce((acc, feature) => {
    const className = feature.name.split(' ')[0]; // Example of grouping by the first word in the feature name
    if (!acc[className]) acc[className] = [];
    acc[className].push(feature);
    return acc;
  }, {} as Record<string, ClassFeature[]>);

  if (features.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No features available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(featuresByClass).map(([className, classFeatures]) => (
        <div key={className} className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-900">{className} Features</h3>
          <div className="grid gap-4">
            {classFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{feature.name}</h4>
                    {feature.level && (
                      <p className="text-sm text-purple-600">Level {feature.level}</p>
                    )}
                  </div>
                </div>
                {/* Render the description as HTML */}
                <div
                  className="text-sm text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
