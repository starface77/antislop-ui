import React from 'react';

export interface CircularProgressProps {
  value?: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  indeterminate?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  size = 32,
  strokeWidth = 3,
  indeterminate = false,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: indeterminate ? 'none' : 'rotate(-90deg)',
          animation: indeterminate ? 'pSpin 1s linear infinite' : 'none',
        }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--p-soft)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--p-t-900)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={indeterminate ? circumference * 0.75 : strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: indeterminate ? 'none' : 'stroke-dashoffset 0.2s ease-out' }}
        />
      </svg>
    </div>
  );
};
