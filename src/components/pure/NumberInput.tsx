import React from 'react';
import { Plus, Minus } from 'lucide-react';

export interface NumberInputProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 9999,
  step = 1,
  label,
  disabled = false,
}) => {
  const handleDec = () => {
    if (!disabled && value - step >= min) onChange(value - step);
  };

  const handleInc = () => {
    if (!disabled && value + step <= max) onChange(value + step);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          height: 34,
          padding: '0 4px',
          width: 'fit-content',
        }}
      >
        <button
          type="button"
          disabled={disabled || value <= min}
          onClick={handleDec}
          style={{
            width: 24,
            height: 24,
            borderRadius: 'var(--p-r-sm)',
            backgroundColor: 'var(--p-surface)',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-700)',
            cursor: disabled || value <= min ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled || value <= min ? 0.35 : 1,
          }}
        >
          <Minus size={11} />
        </button>

        <span
          style={{
            minWidth: 44,
            textAlign: 'center',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--p-t-900)',
            fontFamily: 'var(--p-font-mono)',
          }}
        >
          {value}
        </span>

        <button
          type="button"
          disabled={disabled || value >= max}
          onClick={handleInc}
          style={{
            width: 24,
            height: 24,
            borderRadius: 'var(--p-r-sm)',
            backgroundColor: 'var(--p-surface)',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-700)',
            cursor: disabled || value >= max ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled || value >= max ? 0.35 : 1,
          }}
        >
          <Plus size={11} />
        </button>
      </div>
    </div>
  );
};
