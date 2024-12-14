import React from 'react';
import { Character } from '../../types/character';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold">{character.name}</h2>
          <p className="text-gray-600">
            Level {character.level} {character.species} {character.class}
          </p>
        </div>
        {character.isHomebrew && (
          <span className="px-2 py-1 bg-purple-100 text-purple-600 text-sm rounded">
            Homebrew
          </span>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          Background: {character.background}
        </p>
        <p className="text-sm text-gray-500">
          Alignment: {character.alignment}
        </p>
      </div>
      <Button variant="secondary" className="mt-4 w-full">
        View Details
      </Button>
    </Card>
  );
}