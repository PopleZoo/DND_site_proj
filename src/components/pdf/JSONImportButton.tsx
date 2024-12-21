import React, { useRef } from 'react';
import { FileUp } from 'lucide-react';

interface JSONImportButtonProps {
  onImport: (data: any) => void;
  type: 'classes' | 'feats';
  className?: string;
}

export default function JSONImportButton({ onImport, type, className = '' }: JSONImportButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);
      onImport(data);
    } catch (error) {
      console.error(`Failed to import ${type} from JSON:`, error);
      // Handle error appropriately
    }
  };

  return (
    <div className={className}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept=".json"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        <FileUp className="h-5 w-5" />
        <span>Import {type} from JSON</span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Import {type} data from a JSON source file
      </p>
    </div>
  );
}