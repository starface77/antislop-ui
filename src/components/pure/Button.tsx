import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  loading = false,
  disabled,
  style,
  className = '',
  ...props
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { height: 26, padding: '0 8px', fontSize: 11.5, gap: 5, borderRadius: 'var(--p-r-sm)' },
    md: { height: 32, padding: '0 12px', fontSize: 12.5, gap: 6, borderRadius: 'var(--p-r-md)' },
    lg: { height: 38, padding: '0 16px', fontSize: 13.5, gap: 8, borderRadius: 'var(--p-r-lg)' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--p-t-900)',
      color: 'var(--p-app)',
      fontWeight: 450,
    },
    secondary: {
      backgroundColor: 'var(--p-soft)',
      color: 'var(--p-t-800)',
      fontWeight: 450,
    },
    soft: {
      backgroundColor: 'var(--p-hover)',
      color: 'var(--p-t-700)',
      fontWeight: 400,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--p-t-600)',
      fontWeight: 400,
    },
    accent: {
      backgroundColor: 'var(--p-t-900)',
      color: 'var(--p-app)',
      fontWeight: 450,
    },
    danger: {
      backgroundColor: 'var(--p-danger-soft)',
      color: 'var(--p-danger)',
      fontWeight: 450,
    },
  };

  return (
    <button
      className={`pure-btn pure-btn-${variant} pure-btn-${size} ${className}`}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'inherit',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.01em',
        transition: 'transform 0.12s var(--p-ease-bounce), background-color 0.12s var(--p-ease-out), opacity 0.12s',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'scale(0.96)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
      {...props}
    >
      {loading ? (
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '1.5px solid currentColor',
            borderTopColor: 'transparent',
            animation: 'pSpin 0.6s linear infinite',
          }}
        />
      ) : (
        icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>
      )}
      {children && <span>{children}</span>}
      <style>{`
        @keyframes pSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};
