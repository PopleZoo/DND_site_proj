export class CharacterStorage {
  static STORAGE_KEY = 'dnd_characters';

  static saveCharacter(character) {
    try {
      const characters = this.getAllCharacters();
      const existingIndex = characters.findIndex(c => c.id === character.id);
      
      if (existingIndex >= 0) {
        characters[existingIndex] = character;
      } else {
        characters.push(character);
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(characters));
      return true;
    } catch (error) {
      console.error('Failed to save character:', error);
      return false;
    }
  }

  static getCharacter(id) {
    try {
      const characters = this.getAllCharacters();
      return characters.find(c => c.id === id) || null;
    } catch (error) {
      console.error('Failed to get character:', error);
      return null;
    }
  }

  static getAllCharacters() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to get characters:', error);
      return [];
    }
  }

  static deleteCharacter(id) {
    try {
      const characters = this.getAllCharacters();
      const filtered = characters.filter(c => c.id !== id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Failed to delete character:', error);
      return false;
    }
  }
}