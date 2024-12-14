import { Class } from '../../../../../types/character';

export function getLevelUnlockText(level: number, selectedClass: Class | undefined): string {
  switch (level) {
    case 3:
      return selectedClass ? `Unlock ${selectedClass.name} Subclass` : 'Unlock Subclass';
    case 4:
    case 8:
    case 12:
    case 16:
    case 19:
      return 'Ability Score Improvement or Feat';
    default:
      return '';
  }
}