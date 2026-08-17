import React from 'react';

export interface SegmentOption<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function SegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  className = '',
  style,
}: SegmentedControlProps<T>) {
  const containerHeight = size === 'sm' ? 28 : 34;
  const itemPadding = size === 'sm' ? '0 8px' : '0 12px';
  const fontSize = size === 'sm' ? 11.5 : 12.5;

  return (
    <div
      className={`pure-segmented-control ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--p-soft)',
        borderRadius: 'var(--p-r-md)',
        padding: 3,
        height: containerHeight,
        width: fullWidth ? '100%' : 'auto',
        position: 'relative',
        userSelect: 'none',
        ...style,
      }}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            style={{
              flex: fullWidth ? 1 : 'initial',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              padding: itemPadding,
              height: '100%',
              borderRadius: 'var(--p-r-sm)',
              border: 'none',
              outline: 'none',
              background: isSelected ? 'var(--p-surface)' : 'transparent',
              color: isSelected ? 'var(--p-t-900)' : 'var(--p-t-500)',
              fontSize,
              fontWeight: isSelected ? 500 : 450,
              fontFamily: 'inherit',
              letterSpacing: '-0.01em',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.16s var(--p-ease-out), color 0.16s var(--p-ease-out), transform 0.12s var(--p-ease-bounce)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.96)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {opt.icon}
            <span>{opt.label}</span>
            {opt.badge !== undefined && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  padding: '1px 4px',
                  borderRadius: 4,
                  backgroundColor: isSelected ? 'var(--p-soft)' : 'var(--p-hover)',
                  color: isSelected ? 'var(--p-t-700)' : 'var(--p-t-500)',
                }}
              >
                {opt.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
