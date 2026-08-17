import React from 'react';
import { Check } from 'lucide-react';

export interface ColorPickerProps {
  colors?: string[];
  value: string;
  onChange: (color: string) => void;
  label?: string;
}

const DEFAULT_COLORS = [
  '#111114',
  '#555560',
  '#2563eb',
  '#16a34a',
  '#d97706',
  '#dc2626',
  '#9333ea',
  '#0d9488',
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors = DEFAULT_COLORS,
  value,
  onChange,
  label,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, userSelect: 'none' }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {colors.map((c) => {
          const isSelected = c.toLowerCase() === value.toLowerCase();
          return (
            <button
              key={c}
              type="button"
              onClick={() => onChange(c)}
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: c,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'transform 0.1s var(--p-ease-bounce)',
                transform: isSelected ? 'scale(1.15)' : 'scale(1)',
              }}
            >
              {isSelected && <Check size={12} strokeWidth={3} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
