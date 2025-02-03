import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver'; // Import file-saver for downloading files
import Button from '../components/ui/Button'; // Corrected import for Button component
import CharacterCard from '../components/characters/CharacterCard'; // Assuming CharacterCard component exists
import { Character } from '../types/character'; // Importing Character type
import CharacterSheet from '../components/characters/CharacterSheet'; // Import CharacterSheet
import Modal from '../components/ui/Modal'; // Import Modal
import { supabase } from '../lib/supabase'; // Import Supabase client

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null); // State for selected character
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data, error } = await supabase.from('base characters').select('*');
      if (error) {
        setError('Error fetching characters: ' + error.message);
      } else {
        const mappedCharacters = data.map((item: any) => ({
          ...item.data, // Assuming the character details are in the 'data' field
          id: item.character_id, // Map the character_id to id
          isHomebrew: item.is_homebrew // Map is_homebrew property
        }));
        console.log(mappedCharacters); // Log the mapped characters to inspect their structure
        setCharacters(mappedCharacters as Character[]);
      }
    };

    fetchCharacters();
  }, []);

  const handleOpenCharacterSheet = (characterId: string) => {
    const character = characters.find(char => char.id === characterId);
    setSelectedCharacter(character || null); // Set selected character
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && <div className="error">{error}</div>} {/* Display error if any */}
      {characters.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character} 
          onViewDetails={() => handleOpenCharacterSheet(character.id)} 
        />
      ))}

      {/* Character Sheet Modal */}
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
