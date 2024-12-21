import React from 'react';
import { Character } from '../../types/character';
import Button from '../ui/Button';

interface CharacterCardProps {
  character: Character;
  onViewDetails: () => void;
}

const CharacterCard = ({ character, onViewDetails }: CharacterCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold">{character.name}</h2>
      <p className="text-lg text-gray-600">
        Level {character.level} {character.race?.baseRaceName || 'Unknown Race'}{' '}
        {character.race?.subRaceName && `(${character.race?.subRaceName})`} |{' '}
        {character.classes?.[0]?.name || 'Unknown Class'}{' '}
        {character.classes?.[0]?.subclass && `(${character.classes[0].subclass})`}
      </p>
      <Button onClick={onViewDetails} variant="primary">
        View Details
      </Button>
    </div>
  );
};

export default CharacterCard;
