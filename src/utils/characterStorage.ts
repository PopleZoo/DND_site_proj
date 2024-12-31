import { Character } from '../types/character';

export const CharacterStorage = {
  saveCharacter: (character: Character) => {
    // Save character to localStorage
    localStorage.setItem('character', JSON.stringify(character));
  },
  getCharacter: (): Character | null => {
    // Retrieve character from localStorage
    const character = localStorage.getItem('character');
    return character ? JSON.parse(character) : null;
  }
};
