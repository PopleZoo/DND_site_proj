import React from 'react';
import { Feat } from '../../../../../types/character';
import FeatCard from '../FeatCard';

interface FeatCategoryProps {
  title: string;
  feats: Feat[];
  selectedFeats: Feat[];
  onFeatSelect: (featId: string) => void;
}

export default function FeatCategory({
  title,
  feats,
  selectedFeats = [], // Added default value
  onFeatSelect
}: FeatCategoryProps) {
  if (!feats.length) return null;

  return (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-700">{title}</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feats.map((feat) => (
          <FeatCard
            key={feat.id}
            feat={feat}
            selected={selectedFeats.some(f => f.id === feat.id)}
            onSelect={() => onFeatSelect(feat.id)}
            disabled={selectedFeats.length >= 1 && !selectedFeats.some(f => f.id === feat.id)}
          />
        ))}
      </div>
    </div>
  );
}