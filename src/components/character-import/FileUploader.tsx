import React from 'react';

interface FileUploaderProps {
  onFileUpload: (data: any) => void;
}

const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        onFileUpload(data);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        onFileUpload({ error: 'Invalid JSON file' });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-purple-50 file:text-purple-700
                 hover:file:bg-purple-100"
      />
    </div>
  );
};

export default FileUploader;
