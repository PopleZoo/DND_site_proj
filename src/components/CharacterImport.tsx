import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { useCharacterStore } from '../store/characterStore';

export default function CharacterImport() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { importCharacter } = useCharacterStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      if (typeof text === 'string') {
        importCharacter(text);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg text-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center space-x-2 mx-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        <Upload className="h-5 w-5" />
        <span>Import Character</span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Supports JSON character files
      </p>
    </div>
  );
}