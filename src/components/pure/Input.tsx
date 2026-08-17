import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  rightElement,
  error,
  label,
  style,
  className = '',
  ...props
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {label && (
        <label
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--p-t-700)',
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 10px',
          height: 34,
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          transition: 'background-color 0.12s var(--p-ease-out)',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        {icon && (
          <span style={{ color: 'var(--p-t-500)', display: 'flex', alignItems: 'center' }}>
            {icon}
          </span>
        )}

        <input
          className={`pure-input ${className}`}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: 13,
            fontWeight: 450,
            color: 'var(--p-t-900)',
            width: '100%',
            ...style,
          }}
          {...props}
        />

        {rightElement && (
          <span style={{ color: 'var(--p-t-500)', display: 'flex', alignItems: 'center' }}>
            {rightElement}
          </span>
        )}
      </div>

      {error && (
        <span style={{ fontSize: 11, color: 'var(--p-danger)', fontWeight: 450 }}>
          {error}
        </span>
      )}
    </div>
  );
};
