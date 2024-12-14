import React, { useState } from 'react';
import { useFeats } from '../../../../hooks/useFeats';
import { FEAT_CATEGORY_LABELS } from '../../../../data/feats/constants';
import FeatCategory from './components/FeatCategory';
import FeatFilter from './components/FeatFilter';
import { Award } from 'lucide-react';

interface FeatSelectionProps {
  level: number;
  classId: string;
}

export default function FeatSelection({ level, classId }: FeatSelectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    availableFeats,
    selectedFeats,
    handleFeatSelect
  } = useFeats(classId, level);

  const filterFeat = (feat: any) =>
    feat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feat.description.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredFeats = availableFeats.filter(filterFeat);
  const categorizedFeats = filteredFeats.reduce((acc, feat) => {
    const category = feat.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(feat);
    return acc;
  }, {} as Record<string, typeof filteredFeats>);

  return (
    <div className="space-y-6 mb-24"> {/* Added margin bottom for navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-purple-900">Available Feats</h3>
        </div>
        <span className="text-sm text-gray-600">
          Selections Remaining: {Math.max(0, 1 - (selectedFeats?.length || 0))}
        </span>
      </div>

      <FeatFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {Object.entries(categorizedFeats).map(([category, feats]) => {
        if (!feats.length) return null;

        return (
          <FeatCategory
            key={category}
            title={FEAT_CATEGORY_LABELS[category as keyof typeof FEAT_CATEGORY_LABELS]}
            feats={feats}
            selectedFeats={selectedFeats}
            onFeatSelect={handleFeatSelect}
          />
        );
      })}
    </div>
  );
}