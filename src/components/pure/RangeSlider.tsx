import React from 'react';

export interface RangeSliderProps {
  minVal: number;
  maxVal: number;
  min?: number;
  max?: number;
  onChange: (min: number, max: number) => void;
  label?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  minVal,
  maxVal,
  min = 0,
  max = 100,
  onChange,
  label,
}) => {
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', userSelect: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {label && (
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
            {label}
          </span>
        )}
        <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-500)' }}>
          {minVal} - {maxVal}
        </span>
      </div>

      <div style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', height: 6, backgroundColor: 'var(--p-input-bg)', borderRadius: 99, position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
              height: '100%',
              backgroundColor: 'var(--p-t-900)',
              borderRadius: 99,
            }}
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxVal - 1);
            onChange(val, maxVal);
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer', margin: 0 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minVal + 1);
            onChange(minVal, val);
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer', margin: 0 }}
        />

        {/* Thumbs */}
        <div
          style={{
            position: 'absolute',
            left: `${minPercent}%`,
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: 'var(--p-surface)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${maxPercent}%`,
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: 'var(--p-surface)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};
