import React, { forwardRef } from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  children,
  variant = 'ghost',
  size = 'md',
  active,
  disabled,
  style,
  className = '',
  ...props
}, ref) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { width: 24, height: 24, borderRadius: 'var(--p-r-sm)', fontSize: 12 },
    md: { width: 30, height: 30, borderRadius: 'var(--p-r-md)', fontSize: 14 },
    lg: { width: 36, height: 36, borderRadius: 'var(--p-r-md)', fontSize: 16 },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--p-t-900)', color: 'var(--p-app)' },
    secondary: { backgroundColor: 'var(--p-soft)', color: 'var(--p-t-700)' },
    soft: { backgroundColor: 'var(--p-surface)', color: 'var(--p-t-700)' },
    ghost: { backgroundColor: active ? 'var(--p-active)' : 'transparent', color: active ? 'var(--p-t-900)' : 'var(--p-t-500)' },
    accent: { backgroundColor: 'var(--p-accent)', color: '#fff' },
    danger: { backgroundColor: 'var(--p-danger-soft)', color: 'var(--p-danger)' },
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`pure-icon-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        outline: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background-color 0.12s var(--p-ease-out), color 0.12s var(--p-ease-out), transform 0.12s var(--p-ease-bounce)',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'ghost') {
          e.currentTarget.style.backgroundColor = 'var(--p-hover)';
          e.currentTarget.style.color = 'var(--p-t-800)';
        }
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        if (variant === 'ghost') {
          e.currentTarget.style.backgroundColor = active ? 'var(--p-active)' : 'transparent';
          e.currentTarget.style.color = active ? 'var(--p-t-900)' : 'var(--p-t-500)';
        }
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseDown={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'scale(0.92)';
      }}
      onMouseUp={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'scale(1)';
      }}
      {...props}
    >
      {children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
