import React from 'react';

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label?: string;
}

export const FAB: React.FC<FABProps> = ({ icon, label, style, ...props }) => {
  return (
    <button
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: label ? '0 16px' : '0',
        width: label ? 'auto' : 44,
        height: 44,
        borderRadius: 99,
        backgroundColor: 'var(--p-t-900)',
        color: 'var(--p-app)',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: 13,
        fontWeight: 550,
        fontFamily: 'inherit',
        userSelect: 'none',
        transition: 'transform 0.1s var(--p-ease-bounce)',
        justifyContent: 'center',
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      {...props}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      {label && <span>{label}</span>}
    </button>
  );
};
