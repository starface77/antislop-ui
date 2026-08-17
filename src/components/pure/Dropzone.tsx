import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

export interface DropzoneProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  label?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  onFilesSelected,
  accept = '*/*',
  maxFiles = 5,
  label = 'Upload files',
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).slice(0, maxFiles);
      onFilesSelected?.(files);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }} data-accept={accept}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        style={{
          padding: '22px 16px',
          backgroundColor: isDragOver ? 'var(--p-hover)' : 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 6,
          cursor: 'pointer',
          transition: 'background-color 0.14s ease-out',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: 'var(--p-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--p-t-600)',
          }}
        >
          <UploadCloud size={15} />
        </div>

        <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--p-t-900)' }}>
          Drag & drop files or <span style={{ color: 'var(--p-t-500)' }}>browse</span>
        </div>
        <div style={{ fontSize: 11, color: 'var(--p-t-400)' }}>
          Supports documents, images up to 50MB
        </div>
      </div>
    </div>
  );
};
