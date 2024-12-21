import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacterStore } from '../store/characterStore';
import { Character } from '../types/character'; // Ensure this is the correct path
import JSONCharacterImport from '../components/character-import/JSONCharacterImport';
import CharacterCard from '../components/characters/CharacterCard';
import CharacterSheet from '../components/characters/CharacterSheet';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { UserPlus, FileJson } from 'lucide-react';

export default function Characters() {
  const navigate = useNavigate();
  const { characters } = useCharacterStore();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCreateCharacter = () => {
    navigate('/create-character');
  };

  const handleViewDetails = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-900">Characters</h1>
        <Button icon={UserPlus} onClick={handleCreateCharacter}>
          Create Character
        </Button>
      </header>

      {/* Import Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <JSONCharacterImport />
        <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg">
          <div className="text-center">
            <FileJson className="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              You can import characters from JSON character sheets or create a new character from scratch.
            </p>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-purple-600 hover:text-purple-700">
                Download Sample Character Sheet
              </a>
              <a href="#" className="block text-sm text-purple-600 hover:text-purple-700">
                View Supported PDF Formats
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Character List Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            character={character}
            onViewDetails={() => handleViewDetails(character)}
          />
        ))}
      </div>

      {/* No Characters Message */}
      {characters.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <FileJson className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No Characters Yet</h2>
          <p className="text-gray-500 mb-6">
            Create a new character or import an existing one to get started
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" icon={UserPlus} onClick={handleCreateCharacter}>
              Create Character
            </Button>
          </div>
        </div>
      )}

      {/* Character Sheet Modal */}
      {selectedCharacter && (
        <Modal onClose={() => setSelectedCharacter(null)} fullScreen={true}>
          <CharacterSheet character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
        </Modal>
      )}
    </div>
  );
}
