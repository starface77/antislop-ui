import React from 'react';

export interface DiffLine {
  type: 'add' | 'del' | 'normal';
  content: string;
  lineNumber?: number;
}

export interface DiffViewerProps {
  filename?: string;
  lines: DiffLine[];
}

export const DiffViewer: React.FC<DiffViewerProps> = ({ filename, lines }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-md)',
        overflow: 'hidden',
        fontFamily: 'var(--p-font-mono)',
        fontSize: 11.5,
        lineHeight: 1.5,
      }}
    >
      {filename && (
        <div
          style={{
            padding: '6px 12px',
            backgroundColor: 'var(--p-soft)',
            color: 'var(--p-t-500)',
            fontSize: 11,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>{filename}</span>
        </div>
      )}

      <div style={{ padding: '6px 0', overflowX: 'auto' }}>
        {lines.map((line, idx) => {
          const isAdd = line.type === 'add';
          const isDel = line.type === 'del';

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1px 12px',
                backgroundColor: isAdd
                  ? 'var(--p-success-soft)'
                  : isDel
                  ? 'var(--p-danger-soft)'
                  : 'transparent',
                color: isAdd
                  ? 'var(--p-success)'
                  : isDel
                  ? 'var(--p-danger)'
                  : 'var(--p-t-700)',
              }}
            >
              <span
                style={{
                  width: 16,
                  userSelect: 'none',
                  color: isAdd ? 'var(--p-success)' : isDel ? 'var(--p-danger)' : 'var(--p-t-400)',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {isAdd ? '+' : isDel ? '-' : ' '}
              </span>
              <span style={{ whiteSpace: 'pre', flex: 1 }}>{line.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
