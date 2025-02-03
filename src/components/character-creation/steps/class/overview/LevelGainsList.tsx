import React from 'react';
import { LevelGains } from '../../../../../types/character';
import { Shield, Heart, Star, Book, Wand2 } from 'lucide-react';

interface LevelGainsListProps {
  level: number;
  gains: LevelGains;
  isCurrentLevel?: boolean;
}

export default function LevelGainsList({ level, gains, isCurrentLevel = false }: LevelGainsListProps) {
  const {
    hitPoints,
    proficiencyBonus,
    features,
    spellcasting,
    abilityScoreImprovement
  } = gains;

  return (
    <div className={`p-6 rounded-lg border-2 ${
      isCurrentLevel 
        ? 'bg-primary/10 border-primary' // Updated color
        : 'bg-dark border-dark-light'
    }`}>
      <h3 className="text-lg font-semibold mb-4 text-light">
        Level {level} {isCurrentLevel && '(Current)'}
      </h3>

      <div className="space-y-4">
        {/* Core Stats */}
        <div className="flex items-center space-x-4">
          <Heart className="w-5 h-5 text-red-500" />
          <div>
            <div className="font-medium text-light">Hit Points</div>
            <div className="text-sm text-light-darker">
              +{hitPoints} HP
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Shield className="w-5 h-5 text-blue-500" />
          <div>
            <div className="font-medium text-light">Proficiency Bonus</div>
            <div className="text-sm text-light-darker">
              +{proficiencyBonus}
            </div>
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Book className="w-5 h-5 text-purple-600" />
              <div className="font-medium text-light">Features</div>
            </div>
            <ul className="space-y-1 ml-7">
              {features.map(feature => (
                <li key={feature.id} className="text-sm text-light-darker">
                  • {feature.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Spellcasting */}
        {spellcasting && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Wand2 className="w-5 h-5 text-amber-600" />
              <div className="font-medium text-light">Spellcasting</div>
            </div>
            <div className="ml-7 text-sm text-light-darker">
              <div>Cantrips Known: {spellcasting.cantripsKnown}</div>
              {spellcasting.spellsKnown && (
                <div>Spells Known: {spellcasting.spellsKnown}</div>
              )}
              <div className="mt-1">
                <div className="font-medium text-light">Spell Slots:</div>
                <div className="grid grid-cols-9 gap-2 mt-1">
                  {Object.entries(spellcasting.spellSlots).map(([level, slots]) => (
                    <div key={`${level}-${slots}-${Math.random()}`} className="text-center">
                      <div className="text-xs text-light-darker">Level {level}</div>
                      <div>{slots}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ASI */}
        {abilityScoreImprovement && (
          <div className="flex items-center space-x-4">
            <Star className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="font-medium text-light">Ability Score Improvement</div>
              <div className="text-sm text-light-darker">
                Increase one ability score by 2, or two ability scores by 1
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
