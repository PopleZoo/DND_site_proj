import React, { useRef, useState } from 'react';
import { FileUp } from 'lucide-react';
import { PDFImporter } from '../../utils/pdf/PDFImporter';
import { useCharacterStore } from '../../store/characterStore';

export default function PDFImportButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isImporting, setIsImporting] = useState(false);
  const { addCharacter } = useCharacterStore();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    try {
      const character = await PDFImporter.importCharacter(file);
      addCharacter(character);
    } catch (error) {
      console.error('Failed to import character:', error);
      // TODO: Add error handling UI
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept=".pdf"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isImporting}
        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
      >
        <FileUp className="h-5 w-5" />
        <span>
          {isImporting ? 'Importing...' : 'Import Character Sheet'}
        </span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Supports standard D&D 5E character sheet PDFs
      </p>
    </div>
  );
}