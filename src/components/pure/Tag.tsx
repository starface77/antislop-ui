import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  variant?: 'solid' | 'subtle';
  size?: 'sm' | 'md';
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'subtle',
  size = 'md',
}) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: size === 'sm' ? '1px 6px' : '3px 8px',
        fontSize: size === 'sm' ? 10.5 : 11.5,
        fontWeight: 500,
        borderRadius: 4,
        backgroundColor: variant === 'solid' ? 'var(--p-t-900)' : 'var(--p-soft)',
        color: variant === 'solid' ? 'var(--p-app)' : 'var(--p-t-700)',
        userSelect: 'none',
      }}
    >
      {children}
    </span>
  );
};
