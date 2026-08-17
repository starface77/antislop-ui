import React from 'react';

export interface ToggleGroupItem {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  title?: string;
}

export interface ToggleGroupProps {
  items: ToggleGroupItem[];
  value: string;
  onChange: (val: string) => void;
  size?: 'sm' | 'md';
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  items,
  value,
  onChange,
  size = 'md',
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-md)',
        gap: 1,
        userSelect: 'none',
      }}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            title={item.title}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              padding: size === 'sm' ? '3px 7px' : '5px 9px',
              backgroundColor: active ? 'var(--p-surface)' : 'transparent',
              color: active ? 'var(--p-t-900)' : 'var(--p-t-500)',
              borderRadius: 'var(--p-r-sm)',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: size === 'sm' ? 11 : 12,
              fontWeight: active ? 550 : 450,
              fontFamily: 'inherit',
              transition: 'background-color 0.12s var(--p-ease-out), color 0.12s',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
            {item.label && <span>{item.label}</span>}
          </button>
        );
      })}
    </div>
  );
};
