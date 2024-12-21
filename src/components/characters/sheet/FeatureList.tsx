import React from 'react';
import { Feature } from '../../../types/character';

interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features = [] }: FeatureListProps) {
  // Group features by source with safe default value
  const featuresBySource = features.reduce((acc, feature) => {
    const source = feature?.source || 'Other';
    if (!acc[source]) acc[source] = [];
    acc[source].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  if (features.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No features available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(featuresBySource).map(([source, sourceFeatures]) => (
        <div key={source} className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-900">{source} Features</h3>
          <div className="grid gap-4">
            {sourceFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{feature.name}</h4>
                    {feature.level && (
                      <p className="text-sm text-purple-600">Level {feature.level}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}