import React from 'react';
import { Character } from '../../types/character';
import Button from '../ui/Button';
import { Shield, Heart, Dumbbell } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onViewDetails: () => void;
}

export default function CharacterCard({ character, onViewDetails }: CharacterCardProps) {
  const mainClass = character.classes?.[0];
  const subclass = mainClass?.subclass?.name;

  // Safely handle optional values
  const hitPoints = {
    current: character.hitPoints?.current ?? 0,
    max: character.hitPoints?.max ?? 0,
    temp: character.hitPoints?.temp ?? 0
  };

  const displayInitiative = character.initiative ?? 0;
  const displayArmorClass = character.armorClass ?? 10;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{character.name}</h2>
          <p className="text-lg text-gray-600">
            Level {character.level} {character.race?.baseRaceName} {mainClass?.name}
            {subclass && ` (${subclass})`}
          </p>
        </div>
        {(character.race?.isHomebrew || mainClass?.isHomebrew) && (
          <span className="px-2 py-1 text-sm bg-purple-100 text-purple-600 rounded">
            Homebrew
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-purple-600" />
          <div>
            <div className="text-sm text-gray-500">AC</div>
            <div className="font-medium">{displayArmorClass}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <div>
            <div className="text-sm text-gray-500">HP</div>
            <div className="font-medium">
              {hitPoints.current}/{hitPoints.max}
              {hitPoints.temp > 0 && ` (+${hitPoints.temp})`}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-5 h-5 text-purple-600" />
          <div>
            <div className="text-sm text-gray-500">Initiative</div>
            <div className="font-medium">
              {displayInitiative >= 0 ? `+${displayInitiative}` : displayInitiative}
            </div>
          </div>
        </div>
      </div>

      <Button onClick={onViewDetails} variant="primary" className="w-full">
        View Details
      </Button>
    </div>
  );
}