import { Character } from '../../../types/character';
import { PDFParseResult } from '../types';

export function convertPDFToCharacter(pdf: PDFParseResult): Character {
  const sections = extractSections(pdf);
  
  return {
    id: crypto.randomUUID(),
    name: extractName(sections),
    species: extractSpecies(sections),
    class: extractClass(sections),
    level: extractLevel(sections),
    background: extractBackground(sections),
    stats: extractAbilityScores(sections),
    isHomebrew: false
  };
}

function extractSections(pdf: PDFParseResult): Record<string, string[]> {
  const sections: Record<string, string[]> = {};
  let currentSection = '';

  pdf.content.forEach(item => {
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

function extractName(sections: Record<string, string[]>): string {
  const namePattern = /Character Name:?\s*([^\n]+)/i;
  const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
  const match = characterInfo.match(namePattern);
  return match?.[1]?.trim() || 'Unnamed Character';
}

function extractSpecies(sections: Record<string, string[]>): string {
  const speciesPattern = /Species:?\s*([^\n]+)/i;
  const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
  const match = characterInfo.match(speciesPattern);
  return match?.[1]?.trim() || '';
}

function extractClass(sections: Record<string, string[]>): string {
  const classPattern = /Class(?:\s*&\s*Level)?:?\s*([^\n]+)/i;
  const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
  const match = characterInfo.match(classPattern);
  return match?.[1]?.trim().split(/\s+/)[0] || '';
}

function extractLevel(sections: Record<string, string[]>): number {
  const levelPattern = /Level:?\s*(\d+)/i;
  const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
  const match = characterInfo.match(levelPattern);
  return parseInt(match?.[1] || '1');
}

function extractBackground(sections: Record<string, string[]>): string {
  const backgroundPattern = /Background:?\s*([^\n]+)/i;
  const characterInfo = sections['CHARACTER INFO']?.join('\n') || '';
  const match = characterInfo.match(backgroundPattern);
  return match?.[1]?.trim() || '';
}

function extractAbilityScores(sections: Record<string, string[]>): Record<string, number> {
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