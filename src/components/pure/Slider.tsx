import React from 'react';

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  disabled = false,
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', userSelect: 'none' }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {label && (
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-500)' }}>
              {value}
            </span>
          )}
        </div>
      )}

      <div
        style={{
          position: 'relative',
          height: 20,
          display: 'flex',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
        }}
      >
        {/* Track background */}
        <div
          style={{
            width: '100%',
            height: 6,
            backgroundColor: 'var(--p-soft)',
            borderRadius: 99,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Active fill */}
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: 'var(--p-t-900)',
              borderRadius: 99,
              transition: 'width 0.08s ease-out',
            }}
          />
        </div>

        {/* Range Input overlay */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: disabled ? 'not-allowed' : 'pointer',
            margin: 0,
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: `${percentage}%`,
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: 'var(--p-surface)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            transition: 'left 0.08s ease-out',
          }}
        />
      </div>
    </div>
  );
};
