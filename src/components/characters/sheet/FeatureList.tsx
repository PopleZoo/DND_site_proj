import React from 'react';
import { ClassFeature } from '../../../types/character';
import { Shield, Star } from 'lucide-react';

interface FeatureListProps {
  features: ClassFeature[];
  isEditing?: boolean;
}

export default function FeatureList({ features, isEditing = false }: FeatureListProps) {
  // Group features by level
  const featuresByLevel = features.reduce((acc, feature) => {
    const level = feature.level || 1;
    if (!acc[level]) acc[level] = [];
    acc[level].push(feature);
    return acc;
  }, {} as Record<number, ClassFeature[]>);

  if (features.length === 0) {
    return (
      <div className="text-center py-8 text-light-darker">
        No features available
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(featuresByLevel)
        .sort(([a], [b]) => Number(b) - Number(a)) // Sort by level descending
        .map(([level, levelFeatures]) => (
          <div key={level} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" /> {/* Updated color */}
              <h3 className="text-lg font-semibold text-light">
                Level {level} Features
              </h3>
            </div>
            <div className="grid gap-4">
              {levelFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-dark-light p-4 rounded-lg border border-dark hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary" /> {/* Updated color */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-light">{feature.name}</h4>
                        {feature.level && (
                          <span className="text-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                            Level {feature.level}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        {isEditing ? (
                          <textarea
                            defaultValue={feature.description}
                            className="w-full bg-dark text-light border border-dark rounded p-2 min-h-[100px]"
                            rows={4}
                            placeholder="Feature description..."
                          />
                        ) : (
                          <div className="text-light-darker">
                            {/* Render the HTML content */}
                            <div
                              className="prose prose-sm max-w-none text-light-darker"
                              dangerouslySetInnerHTML={{
                                __html: feature.description,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
