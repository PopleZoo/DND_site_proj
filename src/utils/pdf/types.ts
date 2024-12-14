// Types for PDF parsing system
export interface PDFParseOptions {
  startPage?: number;
  endPage?: number;
  sections?: string[];
  format?: 'json' | 'text';
}

export interface PDFContent {
  text: string;
  pageNumber: number;
  section?: string;
}

export interface PDFParseResult {
  content: PDFContent[];
  metadata: {
    totalPages: number;
    title?: string;
    author?: string;
    creationDate?: string;
  };
}