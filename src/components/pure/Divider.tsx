import React from 'react';

export interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({ label, orientation = 'horizontal' }) => {
  if (orientation === 'vertical') {
    return (
      <div
        style={{
          width: 1,
          height: '100%',
          minHeight: 16,
          backgroundColor: 'var(--p-hover)',
          margin: '0 4px',
          alignSelf: 'stretch',
        }}
      />
    );
  }

  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0', width: '100%' }}>
        <div style={{ flex: 1, height: 1, backgroundColor: 'var(--p-hover)' }} />
        <span style={{ fontSize: 11, color: 'var(--p-t-400)', fontWeight: 500, userSelect: 'none' }}>
          {label}
        </span>
        <div style={{ flex: 1, height: 1, backgroundColor: 'var(--p-hover)' }} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'var(--p-hover)',
        margin: '6px 0',
      }}
    />
  );
};
