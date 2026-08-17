import React from 'react';

export interface ActionIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'filled' | 'light';
}

export const ActionIcon: React.FC<ActionIconProps> = ({
  size = 'md',
  variant = 'subtle',
  children,
  style,
  ...props
}) => {
  const sizePx = size === 'sm' ? 24 : size === 'md' ? 30 : 36;

  const bg =
    variant === 'filled'
      ? 'var(--p-t-900)'
      : variant === 'light'
      ? 'var(--p-soft)'
      : 'transparent';

  const color =
    variant === 'filled'
      ? 'var(--p-app)'
      : 'var(--p-t-700)';

  return (
    <button
      type="button"
      style={{
        width: sizePx,
        height: sizePx,
        borderRadius: 'var(--p-r-sm)',
        backgroundColor: bg,
        color,
        border: 'none',
        outline: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.12s var(--p-ease-out), transform 0.1s var(--p-ease-bounce)',
        userSelect: 'none',
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseEnter={(e) => {
        if (variant === 'subtle') e.currentTarget.style.backgroundColor = 'var(--p-soft)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'subtle') e.currentTarget.style.backgroundColor = 'transparent';
      }}
      {...props}
    >
      {children}
    </button>
  );
};
