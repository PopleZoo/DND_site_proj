import React from 'react';
import { Character } from '../../types/character';

interface ImportPreviewProps {
  character: Character;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ImportPreview({ character, onConfirm, onCancel }: ImportPreviewProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <h2 className="text-xl font-bold mb-4">Review Imported Character</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Basic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">Name:</span>
              <p className="font-medium">{character.name}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Player:</span>
              <p className="font-medium">{character.playerName}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Class:</span>
              <p className="font-medium">{character.class}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Level:</span>
              <p className="font-medium">{character.level}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Species:</span>
              <p className="font-medium">{character.species}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">XP:</span>
              <p className="font-medium">{character.experiencePoints}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-2">Ability Scores</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(character.stats).map(([ability, score]) => (
              <div key={ability}>
                <span className="text-sm text-gray-500">
                  {ability.charAt(0).toUpperCase() + ability.slice(1)}:
                </span>
                <p className="font-medium">{score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Import Character
        </button>
      </div>
    </div>
  );
}