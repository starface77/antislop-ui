import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'success' | 'danger' | 'pro' | 'free';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  style,
  className = '',
  ...props
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '2px 7px', fontSize: 11, borderRadius: 99, height: 20 },
    md: { padding: '3px 9px', fontSize: 11.5, borderRadius: 99, height: 22 },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    neutral: { backgroundColor: 'var(--p-soft)', color: 'var(--p-t-600)' },
    accent: { backgroundColor: 'var(--p-soft)', color: 'var(--p-t-900)' },
    success: { backgroundColor: 'var(--p-success-soft)', color: 'var(--p-success)' },
    danger: { backgroundColor: 'var(--p-danger-soft)', color: 'var(--p-danger)' },
    pro: { backgroundColor: 'var(--p-soft)', color: 'var(--p-t-800)', fontWeight: 500 },
    free: { backgroundColor: 'var(--p-soft)', color: 'var(--p-t-500)', fontWeight: 500 },
  };

  const dotColors: Record<string, string> = {
    neutral: 'var(--p-t-400)',
    accent: 'var(--p-t-900)',
    success: 'var(--p-success)',
    danger: 'var(--p-danger)',
    pro: 'var(--p-t-700)',
    free: 'var(--p-t-400)',
  };

  return (
    <span
      className={`pure-badge pure-badge-${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        fontFamily: 'inherit',
        fontWeight: 450,
        letterSpacing: '-0.01em',
        border: 'none',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {dot && (
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: dotColors[variant],
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </span>
  );
};

export interface StatusDotProps {
  status?: 'running' | 'done' | 'failed' | 'idle';
  pulse?: boolean;
  size?: number;
}

export const StatusDot: React.FC<StatusDotProps> = ({
  status = 'idle',
  pulse = false,
  size = 6,
}) => {
  const colors: Record<string, string> = {
    running: 'var(--p-t-900)',
    done: 'var(--p-success)',
    failed: 'var(--p-danger)',
    idle: 'var(--p-t-400)',
  };

  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: colors[status],
        display: 'inline-block',
        flexShrink: 0,
        animation: pulse || status === 'running' ? 'pPulse 1.4s ease-in-out infinite' : 'none',
      }}
    />
  );
};
