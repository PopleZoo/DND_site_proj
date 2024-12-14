```typescript
import { PDFDocument } from 'pdf-lib';
import { PDFContent, PDFParseOptions, PDFParseResult } from '../types/pdf';

export async function parsePDF(file: File, options: PDFParseOptions = {}): Promise<PDFParseResult> {
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  const content: PDFContent[] = [];

  const startPage = options.startPage || 0;
  const endPage = options.endPage || pages.length;

  for (let i = startPage; i < endPage; i++) {
    const page = pages[i];
    const textContent = await page.getTextContent();
    
    textContent.items.forEach(item => {
      content.push({
        text: item.str,
        pageNumber: i + 1,
        x: item.transform[4],
        y: item.transform[5]
      });
    });
  }

  return {
    content,
    metadata: {
      totalPages: pages.length,
      title: file.name
    }
  };
}

export function extractSections(content: PDFContent[], sectionMarkers: string[]): Record<string, PDFContent[]> {
  const sections: Record<string, PDFContent[]> = {};
  let currentSection = '';

  content.forEach(item => {
    const matchedMarker = sectionMarkers.find(marker => 
      item.text.toUpperCase().includes(marker.toUpperCase())
    );

    if (matchedMarker) {
      currentSection = matchedMarker;
      sections[currentSection] = [];
    } else if (currentSection) {
      sections[currentSection].push(item);
    }
  });

  return sections;
}
```