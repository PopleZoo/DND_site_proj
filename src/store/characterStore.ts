import { create } from 'zustand';
import { Character } from '../types/character';

interface CharacterStore {
  characters: Character[];
  activeCharacter: Character | null;
  addCharacter: (character: Character) => void;
  setActiveCharacter: (character: Character) => void;
  importCharacter: (jsonFile: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  activeCharacter: null,
  addCharacter: (character) =>
    set((state) => ({ characters: [...state.characters, character] })),
  setActiveCharacter: (character) => set({ activeCharacter: character }),
  importCharacter: (jsonFile) => {
    try {
      const character = JSON.parse(jsonFile);
      set((state) => ({ characters: [...state.characters, character] }));
    } catch (error) {
      console.error('Failed to import character:', error);
    }
  },
}));