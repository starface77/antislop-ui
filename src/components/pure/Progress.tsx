import React from 'react';

export interface ProgressProps {
  value?: number; // 0 to 100
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  label,
  showValue = false,
  size = 'md',
  indeterminate = false,
}) => {
  const height = size === 'sm' ? 4 : size === 'md' ? 6 : 8;
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {label && (
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
              {label}
            </span>
          )}
          {showValue && !indeterminate && (
            <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-500)' }}>
              {Math.round(clampedValue)}%
            </span>
          )}
        </div>
      )}

      <div
        style={{
          width: '100%',
          height,
          backgroundColor: 'var(--p-soft)',
          borderRadius: 99,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: 'var(--p-t-900)',
            borderRadius: 99,
            width: indeterminate ? '30%' : `${clampedValue}%`,
            transition: indeterminate ? 'none' : 'width 0.2s ease-out',
            animation: indeterminate ? 'pIndeterminate 1.4s infinite ease-in-out' : 'none',
          }}
        />
      </div>
      <style>{`
        @keyframes pIndeterminate {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
};
