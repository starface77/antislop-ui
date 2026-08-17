import React from 'react';

export interface EQBarsProps {
  active?: boolean;
  color?: string;
  count?: number;
  height?: number;
}

export const EQBars: React.FC<EQBarsProps> = ({
  active = true,
  color = 'var(--p-accent)',
  count = 4,
  height = 14,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: 2,
        height,
        padding: '0 2px',
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 2.5,
            borderRadius: 2,
            backgroundColor: color,
            height: active ? `${30 + ((i * 23) % 70)}%` : '20%',
            animation: active ? `pEQPulse ${0.5 + (i * 0.15)}s ease-in-out infinite alternate` : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes pEQPulse {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
};
