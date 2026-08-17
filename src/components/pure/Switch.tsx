import React from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'sm' | 'md';
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = 'md',
}) => {
  const isSm = size === 'sm';
  const width = isSm ? 32 : 38;
  const height = isSm ? 18 : 22;
  const knobSize = isSm ? 14 : 18;
  const offset = checked ? width - knobSize - 2 : 2;

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.45 : 1,
      }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        style={{
          width,
          height,
          borderRadius: 99,
          backgroundColor: checked ? 'var(--p-t-900)' : 'var(--p-soft)',
          position: 'relative',
          border: 'none',
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.18s var(--p-ease-out)',
          padding: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 2,
            left: 0,
            width: knobSize,
            height: knobSize,
            borderRadius: '50%',
            backgroundColor: 'var(--p-app)',
            transform: `translateX(${offset}px)`,
            transition: 'transform 0.18s var(--p-ease-spring)',
            display: 'block',
          }}
        />
      </button>

      {label && (
        <span style={{ fontSize: 13, fontWeight: 450, color: 'var(--p-t-800)' }}>
          {label}
        </span>
      )}
    </label>
  );
};
