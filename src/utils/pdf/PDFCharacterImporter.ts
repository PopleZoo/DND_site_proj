```typescript
import { PDFDocument } from 'pdf-lib';
import { CharacterData } from './types/character';
import { extractBasicInfo } from './extractors/basicInfo';
import { extractAbilityScores } from './extractors/abilities';
import { extractCombatInfo } from './extractors/combat';
import { extractEquipment } from './extractors/equipment';
import { extractSpells } from './extractors/spells';
import { PDFContent } from './types/pdf';

export class PDFCharacterImporter {
  static async importCharacter(file: File): Promise<CharacterData> {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const content = await this.extractContent(pdfDoc);

    const basicInfo = extractBasicInfo(content);
    const { stats, savingThrows, skills } = extractAbilityScores(content);
    const { abilities, deathSaves } = extractCombatInfo(content);
    const equipment = extractEquipment(content);
    const spellcasting = extractSpells(content);

    // Combine all extracted data
    return {
      ...basicInfo,
      stats,
      savingThrows,
      skills,
      abilities,
      inspiration: false, // Default value
      deathSaves,
      equipment: {
        ...equipment,
        carryingCapacity: {
          currentWeight: this.calculateCurrentWeight(equipment.items),
          maximumWeight: stats.strength * 15 // D&D 5e carrying capacity formula
        }
      },
      featuresAndTraits: [], // Add feature extractor
      attacksAndSpells: [], // Add attacks extractor
      spellcasting,
      personality: {
        traits: [],
        ideals: [],
        bonds: [],
        flaws: []
      },
      appearance: {
        gender: '',
        age: '',
        height: '',
        weight: '',
        eyeColor: '',
        hairColor: '',
        skinColor: ''
      },
      notes: '',
      alliesAndOrganizations: [],
      backstory: ''
    };
  }

  private static async extractContent(pdfDoc: PDFDocument): Promise<PDFContent[]> {
    const content: PDFContent[] = [];
    const pages = pdfDoc.getPages();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const textContent = await page.getTextContent();
      
      textContent.items.forEach(item => {
        content.push({
          text: item.str,
          pageNumber: i + 1
        });
      });
    }

    return content;
  }

  private static calculateCurrentWeight(items: Array<{ weight: number; quantity: number }>): number {
    return items.reduce((total, item) => total + (item.weight * item.quantity), 0);
  }
}
```