import React, { useRef } from 'react';
import { FileUp } from 'lucide-react';
import { PDFImporter } from '../../utils/pdf/PDFImporter';

interface PDFImportButtonProps {
  onImport: (data: any) => void;
  type: 'classes' | 'feats';
  className?: string;
}

export default function PDFImportButton({ onImport, type, className = '' }: PDFImportButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await (type === 'classes' 
        ? PDFImporter.importClasses(file)
        : PDFImporter.importFeats(file)
      );
      
      onImport(data);
    } catch (error) {
      console.error(`Failed to import ${type} from PDF:`, error);
      // Handle error appropriately
    }
  };

  return (
    <div className={className}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept=".pdf"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        <FileUp className="h-5 w-5" />
        <span>Import {type} from PDF</span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Import {type} data from a PDF source book
      </p>
    </div>
  );
}