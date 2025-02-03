import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacterStore } from '../../store/characterStore';
import { Character } from '../../types/character';
import CharacterCard from '../../components/characters/CharacterCard';
import CharacterSheet from '../../components/characters/CharacterSheet';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { UserPlus, FileJson } from 'lucide-react';
import JSONCharacterImport from '../../components/character-import/JSONCharacterImport';

export default function MyCharacters() {
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
        <h1 className="text-3xl font-bold text-accent">Characters</h1>
        <Button icon={UserPlus} onClick={handleCreateCharacter}>
          Create Character
        </Button>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <JSONCharacterImport />
        <div className="p-4 border-2 border-dashed border-accent/30 rounded-lg">
          <div className="text-center">
            <FileJson className="h-12 w-12 text-accent mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-light">Need help?</h3>
            <p className="text-sm text-light-darker mb-4">
              <a 
                href="https://www.cbr.com/dnd-beyond-alternatives-import-guide/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary-dark"
              >
                Follow this guide
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onViewDetails={() => handleViewDetails(character)}
          />
        ))}
      </div>

      {characters.length === 0 && (
        <div className="text-center py-12 bg-dark-light rounded-lg">
          <h2 className="text-xl font-semibold text-light mb-2">No Characters Yet</h2>
          <p className="text-light-darker mb-6">
            Create a new character to get started
          </p>
        </div>
      )}

      {selectedCharacter && (
        <Modal onClose={() => setSelectedCharacter(null)} fullScreen>
          <CharacterSheet 
            character={selectedCharacter} 
            onClose={() => setSelectedCharacter(null)} 
          />
        </Modal>
      )}
    </div>
  );
}
