import React from 'react';
import { saveAs } from 'file-saver'; // Import file-saver for downloading files

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

  const hitPoints = {
    current: character.hitPoints?.current ?? 0,
    max: character.hitPoints?.max ?? 0,
    temp: character.hitPoints?.temp ?? 0
  };

  const displayInitiative = character.initiative ?? 0;
  const displayArmorClass = character.armorClass ?? 10;

  return (
    <div className="bg-dark-light p-6 rounded-lg shadow-lg border border-dark">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-light">{character.name}</h2>
          <p className="text-lg text-light-darker">
            Level {character.level} {character.race?.baseRaceName} {mainClass?.name}
            {subclass && ` (${subclass})`}
          </p>
        </div>
        {(character.race?.isHomebrew || mainClass?.isHomebrew) && (
          <span className="px-2 py-1 text-sm bg-primary/20 text-primary rounded">
            Homebrew
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-primary" />
          <div>
            <div className="text-sm text-light-darker">AC</div>
            <div className="font-medium text-light">{displayArmorClass}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-accent" />
          <div>
            <div className="text-sm text-light-darker">HP</div>
            <div className="font-medium text-light">
              {hitPoints.current}/{hitPoints.max}
              {hitPoints.temp > 0 && ` (+${hitPoints.temp})`}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-5 h-5 text-primary" />
          <div>
            <div className="text-sm text-light-darker">Initiative</div>
            <div className="font-medium text-light">
              {displayInitiative >= 0 ? `+${displayInitiative}` : displayInitiative}
            </div>
          </div>
        </div>
      </div>

      <Button onClick={onViewDetails} variant="primary" className="w-full"> 
        View Details
      </Button>
      <Button 
        onClick={() => {
          const json = JSON.stringify(character, null, 2); // Convert character to JSON
          const blob = new Blob([json], { type: 'application/json' }); // Create a blob
          saveAs(blob, `${character.name}.json`); // Trigger download
        }} 
        variant="secondary" 
        className="w-full mt-2"
      >
        Download JSON
      </Button>
    </div>
  );
}
