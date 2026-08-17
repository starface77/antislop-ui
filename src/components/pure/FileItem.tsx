import React from 'react';
import { FileText, FileCode, FileArchive, Image, Trash2, Check } from 'lucide-react';
import { ActionIcon } from './ActionIcon';

export interface FileItemProps {
  name: string;
  size: string;
  progress?: number; // 0 to 100
  onRemove?: () => void;
}

export const FileItem: React.FC<FileItemProps> = ({
  name,
  size,
  progress = 100,
  onRemove,
}) => {
  const ext = name.split('.').pop()?.toLowerCase() || '';

  const getIcon = () => {
    if (['json', 'ts', 'js', 'html', 'css'].includes(ext)) {
      return <FileCode size={13} color="var(--p-accent)" />;
    }
    if (['png', 'jpg', 'jpeg', 'svg', 'webp'].includes(ext)) {
      return <Image size={13} color="var(--p-success)" />;
    }
    if (['zip', 'tar', 'gz', 'rar'].includes(ext)) {
      return <FileArchive size={13} color="var(--p-danger)" />;
    }
    return <FileText size={13} color="var(--p-t-600)" />;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '7px 10px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-md)',
        transition: 'background-color 0.12s var(--p-ease-out)',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-input-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-surface)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' }}>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 'var(--p-r-sm)',
            backgroundColor: 'var(--p-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {getIcon()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, overflow: 'hidden' }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--p-t-900)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, color: 'var(--p-t-400)' }}>
            <span>{size}</span>
            {progress === 100 && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, color: 'var(--p-success)' }}>
                <Check size={9} /> Ready
              </span>
            )}
          </div>
        </div>
      </div>

      {onRemove && (
        <ActionIcon size="sm" onClick={onRemove} title="Remove file">
          <Trash2 size={11} />
        </ActionIcon>
      )}
    </div>
  );
};
