import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiFile } from 'react-icons/fi'; // Import the file icon

interface FileUploaderProps {
  onFileUpload: (data: any) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]; // Get the first file
      if (file) {
        setLoading(true);
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const jsonData = JSON.parse(reader.result as string);
            onFileUpload(jsonData);
          } catch (error) {
            console.error('Error parsing JSON:', error);
          } finally {
            setLoading(false);
          }
        };
        reader.readAsText(file);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className="border-4 border-dashed border-gray-300 p-8 text-center cursor-pointer rounded-lg hover:border-blue-500"
    >
      <input {...getInputProps()} />
      <FiFile className="mx-auto mb-4 text-gray-600 text-4xl" />
      <p className="text-lg text-gray-500">
        {loading ? 'Processing file...' : 'Drag & drop your JSON file here, or click to select a file.'}
      </p>
    </div>
  );
};

export default FileUploader;
