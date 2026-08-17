import React from 'react';

export interface PropertyRowProps {
  label: string;
  value: React.ReactNode;
  hint?: string;
}

export const PropertyRow: React.FC<PropertyRowProps> = ({ label, value, hint }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '7px 0',
        fontSize: 12.5,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: 'var(--p-t-600)', fontWeight: 450 }}>{label}</span>
        {hint && <span style={{ fontSize: 11, color: 'var(--p-t-400)' }}>{hint}</span>}
      </div>

      <div style={{ color: 'var(--p-t-900)', fontWeight: 500 }}>
        {value}
      </div>
    </div>
  );
};
