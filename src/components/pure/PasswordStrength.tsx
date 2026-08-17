import React from 'react';

export interface PasswordStrengthProps {
  score: 0 | 1 | 2 | 3 | 4; // 0 = empty, 1 = weak, 2 = fair, 3 = good, 4 = strong
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ score }) => {
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = [
    'var(--p-soft)',
    'var(--p-danger)',
    'var(--p-t-500)',
    'var(--p-t-800)',
    'var(--p-success)',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', userSelect: 'none' }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {[1, 2, 3, 4].map((step) => {
          const active = score >= step;
          return (
            <div
              key={step}
              style={{
                flex: 1,
                height: 3.5,
                borderRadius: 99,
                backgroundColor: active ? colors[score] : 'var(--p-input-bg)',
                transition: 'background-color 0.2s var(--p-ease)',
              }}
            />
          );
        })}
      </div>

      {score > 0 && (
        <span style={{ fontSize: 10.5, color: colors[score], fontWeight: 500 }}>
          Password strength: {labels[score]}
        </span>
      )}
    </div>
  );
};
