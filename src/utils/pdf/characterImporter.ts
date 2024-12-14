import { PDFParseResult } from './types';
import { parsePDF } from './parser';
import { Character } from '../../types/character';

export class CharacterPDFImporter {
  static async importCharacter(file: File): Promise<Character> {
    const parsed = await parsePDF(file);
    return this.convertPDFToCharacter(parsed);
  }

  private static convertPDFToCharacter(pdf: PDFParseResult): Character {
    const sections = this.extractSections(pdf);
    
    return {
      id: crypto.randomUUID(),
      name: this.extractName(sections),
      race: this.extractRace(sections),
      class: this.extractClass(sections),
      level: this.extractLevel(sections),
      background: this.extractBackground(sections),
      abilityScores: this.extractAbilityScores(sections),
      features: this.extractFeatures(sections),
      equipment: this.extractEquipment(sections),
      spells: this.extractSpells(sections),
      isHomebrew: false
    };
  }

  private static extractSections(pdf: PDFParseResult): Record<string, string[]> {
    const sections: Record<string, string[]> = {};
    let currentSection = '';

    pdf.content.forEach(item => {
      // Common section headers in character sheets
      const sectionHeaders = [
        'CHARACTER INFO',
        'ABILITY SCORES',
        'COMBAT',
        'FEATURES & TRAITS',
        'EQUIPMENT',
        'SPELLS'
      ];

      const matchedHeader = sectionHeaders.find(header => 
        item.text.toUpperCase().includes(header)
      );

      if (matchedHeader) {
        currentSection = matchedHeader;
        sections[currentSection] = [];
      } else if (currentSection) {
        sections[currentSection].push(item.text);
      }
    });

    return sections;
  }

  private static extractName(sections: Record<string, string[]>): string {
    const namePattern = /Character Name:?\s*([^\n]+)/i;
    const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
    const match = characterInfo.match(namePattern);
    return match?.[1]?.trim() || 'Unnamed Character';
  }

  private static extractRace(sections: Record<string, string[]>): string {
    const racePattern = /Race:?\s*([^\n]+)/i;
    const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
    const match = characterInfo.match(racePattern);
    return match?.[1]?.trim() || '';
  }

  private static extractClass(sections: Record<string, string[]>): string {
    const classPattern = /Class(?:\s*&\s*Level)?:?\s*([^\n]+)/i;
    const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
    const match = characterInfo.match(classPattern);
    return match?.[1]?.trim().split(/\s+/)[0] || '';
  }

  private static extractLevel(sections: Record<string, string[]>): number {
    const levelPattern = /Level:?\s*(\d+)/i;
    const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
    const match = characterInfo.match(levelPattern);
    return parseInt(match?.[1] || '1');
  }

  private static extractBackground(sections: Record<string, string[]>): string {
    const backgroundPattern = /Background:?\s*([^\n]+)/i;
    const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
    const match = characterInfo.match(backgroundPattern);
    return match?.[1]?.trim() || '';
  }

  private static extractAbilityScores(sections: Record<string, string[]>): Record<string, number> {
    const scores: Record<string, number> = {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    };

    const abilitySection = sections['ABILITY SCORES']?.join('\n') || '';
    
    Object.keys(scores).forEach(ability => {
      const pattern = new RegExp(`${ability}:?\\s*(\\d+)`, 'i');
      const match = abilitySection.match(pattern);
      if (match) {
        scores[ability] = parseInt(match[1]);
      }
    });

    return scores;
  }

  private static extractFeatures(sections: Record<string, string[]>): any[] {
    const featuresSection = sections['FEATURES & TRAITS'] || [];
    return featuresSection.map(feature => {
      const [name, description] = feature.split(':').map(s => s.trim());
      return { name, description };
    });
  }

  private static extractEquipment(sections: Record<string, string[]>): any[] {
    return sections['EQUIPMENT']?.map(item => {
      const [name, quantity] = item.split('(').map(s => s.trim());
      return {
        name,
        quantity: parseInt(quantity?.replace(/[^\d]/g, '') || '1')
      };
    }) || [];
  }

  private static extractSpells(sections: Record<string, string[]>): any[] {
    return sections['SPELLS']?.map(spell => {
      const [name, level] = spell.split('(').map(s => s.trim());
      return {
        name,
        level: parseInt(level?.replace(/[^\d]/g, '') || '0')
      };
    }) || [];
  }
}