import { PDFDocument } from 'pdf-lib';
import { parsePDF } from './parser';
import { convertPDFToCharacter } from './converters/characterConverter';
import { Character } from '../../types/character';

export class PDFImporter {
  static async importCharacter(file: File): Promise<Character> {
    try {
      const parsed = await parsePDF(file);
      return convertPDFToCharacter(parsed);
    } catch (error) {
      console.error('Failed to import PDF:', error);
      throw new Error('Invalid character sheet format');
    }
  }

  static async importClasses(file: File): Promise<any[]> {
    // Implementation for importing class data from PDFs
    throw new Error('Not implemented');
  }

  static async importFeats(file: File): Promise<any[]> {
    // Implementation for importing feat data from PDFs
    throw new Error('Not implemented');
  }
}