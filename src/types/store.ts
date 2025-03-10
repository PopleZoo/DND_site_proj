import { User } from './user'; // Adjust the path as necessary
import { Character } from './character';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  openAuthModal: () => void; // Added property
}

export interface CharacterStore {
  userCharacters: Character[];
  addCharacter: (character: Character) => void; // Added property
}
