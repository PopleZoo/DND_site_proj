```typescript
export interface PDFContent {
  text: string;
  pageNumber: number;
  x?: number;
  y?: number;
}

export interface PDFParseOptions {
  startPage?: number;
  endPage?: number;
  sections?: string[];
}

export interface PDFParseResult {
  content: PDFContent[];
  metadata: {
    totalPages: number;
    title?: string;
  };
}
```