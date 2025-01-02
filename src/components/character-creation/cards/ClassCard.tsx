import React from 'react';
import { Class } from '../../../types/character';
import { Check, Shield, Wand2, Swords, Heart, Book, Scroll } from 'lucide-react';

interface ClassCardProps {
  classOption: Class;
  selected: boolean;
  onSelect: () => void;
}

const classIcons: Record<string, React.ElementType> = {
  barbarian: Swords,
  bard: Scroll,
  cleric: Heart,
  druid: Book,
  fighter: Shield,
  monk: Swords,
  paladin: Shield,
  ranger: Swords,
  rogue: Swords,
  sorcerer: Wand2,
  warlock: Wand2,
  wizard: Book
};

const ClassCard: React.FC<ClassCardProps> = ({ classOption, selected, onSelect }) => {
  const Icon = classIcons[classOption.id] || Shield;

  return (
    <button
      onClick={onSelect}
      className={`relative p-6 rounded-lg text-left transition-all ${
        selected
          ? 'bg-purple-50 border-2 border-purple-600'
          : 'bg-white border-2 border-gray-100 hover:border-purple-200'
      }`}
    >
      {classOption.isHomebrew && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
          Homebrew
        </span>
      )}

      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8 text-purple-600" />
        <div>
          <h3 className="text-lg font-semibold">{classOption.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Hit Die: d{classOption.hitDice}</span>
            {classOption.definition.spellcastingAbility && (
              <>
                <span>•</span>
                <span>Spellcaster</span>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{classOption.definition.description}</p>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium">Primary Ability</h4>
          <p className="text-sm text-gray-600">
            {classOption.definition.primaryAbility || 'N/A'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Saving Throws</h4>
          <p className="text-sm text-gray-600">
            {Array.isArray(classOption.definition.savingThrows)
              ? classOption.definition.savingThrows.join(', ')
              : 'N/A'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Key Features</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {Array.isArray(classOption.definition.classFeatures) && classOption.definition.classFeatures.length > 0 ? (
              classOption.definition.classFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{feature.description}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No features available</li>
            )}
          </ul>
        </div>
      </div>
    </button>
  );
};

export default ClassCard;
