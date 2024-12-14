import React from 'react';
import { Feat } from '../../../../types/character';
import { Check } from 'lucide-react';

interface FeatCardProps {
  feat: Feat;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export default function FeatCard({
  feat,
  selected,
  onSelect,
  disabled = false
}: FeatCardProps) {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`relative p-4 rounded-lg text-left transition-all w-full ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : disabled
          ? 'bg-gray-50 border-2 border-gray-200 cursor-not-allowed'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <h3 className="font-semibold">{feat.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{feat.description}</p>

      <div className="mt-3 space-y-2">
        <h4 className="text-sm font-medium">Benefits:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {feat.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {feat.prerequisites && (
        <div className="mt-3">
          <h4 className="text-sm font-medium">Prerequisites:</h4>
          <ul className="text-sm text-gray-500">
            {feat.prerequisites.requiredAbilityScore && (
              <li>
                Ability Scores: {Object.entries(feat.prerequisites.requiredAbilityScore)
                  .map(([ability, score]) => `${ability} ${score}+`)
                  .join(', ')}
              </li>
            )}
            {feat.prerequisites.requiredFeature && (
              <li>Feature: {feat.prerequisites.requiredFeature}</li>
            )}
            {feat.prerequisites.requiredProficiency && (
              <li>Proficiency: {feat.prerequisites.requiredProficiency}</li>
            )}
          </ul>
        </div>
      )}
    </button>
  );
}