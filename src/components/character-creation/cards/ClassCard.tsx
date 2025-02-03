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
          ? 'bg-primary/20 border-2 border-primary' // Updated color
          : 'bg-dark border-2 border-dark hover:border-primary/50'
      }`}
    >
      {classOption.isHomebrew && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs rounded"> {/* Updated color */}
          Homebrew
        </span>
      )}

      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center"> {/* Updated color */}
          <Check className="w-4 h-4 text-dark" />
        </div>
      )}

      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8 text-primary" /> {/* Updated color */}
        <div>
          <h3 className="text-lg font-semibold text-light">{classOption.name}</h3> {/* Updated color */}
          <div className="flex items-center space-x-2 text-sm text-light-darker">
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

      <p className="text-sm text-light-darker mb-4">{classOption.definition.description}</p> {/* Updated color */}

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-light">Primary Ability</h4> {/* Updated color */}
          <p className="text-sm text-light-darker">
            {classOption.definition.primaryAbility || 'N/A'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-light">Saving Throws</h4> {/* Updated color */}
          <p className="text-sm text-light-darker">
            {Array.isArray(classOption.definition.savingThrows)
              ? classOption.definition.savingThrows.join(', ')
              : 'N/A'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-light">Key Features</h4> {/* Updated color */}
          <ul className="text-sm text-light-darker space-y-1">
            {Array.isArray(classOption.definition.classFeatures) && classOption.definition.classFeatures.length > 0 ? (
              classOption.definition.classFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span> {/* Updated color */}
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
