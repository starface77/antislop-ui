import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  style,
  className = '',
  rows = 3,
  ...props
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {label && (
        <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        className={`pure-textarea ${className}`}
        style={{
          width: '100%',
          padding: '8px 10px',
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          border: 'none',
          outline: 'none',
          fontFamily: 'inherit',
          fontSize: 13,
          fontWeight: 450,
          color: 'var(--p-t-900)',
          resize: 'vertical',
          lineHeight: 1.5,
          transition: 'background-color 0.12s var(--p-ease-out)',
          ...style,
        }}
        {...props}
      />

      {error && (
        <span style={{ fontSize: 11, color: 'var(--p-danger)', fontWeight: 450 }}>
          {error}
        </span>
      )}
    </div>
  );
};
