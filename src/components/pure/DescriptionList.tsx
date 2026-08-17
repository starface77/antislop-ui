import React from 'react';

export interface DescriptionItem {
  label: string;
  value: React.ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionItem[];
  columns?: 1 | 2 | 3;
}

export const DescriptionList: React.FC<DescriptionListProps> = ({ items, columns = 2 }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '12px 16px',
        fontSize: 12.5,
        userSelect: 'none',
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 11.5, color: 'var(--p-t-500)', fontWeight: 450 }}>
            {item.label}
          </span>
          <span style={{ fontSize: 13, color: 'var(--p-t-900)', fontWeight: 500 }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
