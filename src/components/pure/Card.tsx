import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  action,
  children,
  style,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`pure-card ${className}`}
      style={{
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-xl)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        border: 'none',
        boxShadow: 'none',
        ...style,
      }}
      {...props}
    >
      {(title || subtitle || action) && (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            {title && (
              <h3 style={{ fontSize: 14, fontWeight: 500, color: 'var(--p-t-900)', letterSpacing: '-0.015em' }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p style={{ fontSize: 12, color: 'var(--p-t-500)', marginTop: 2, fontWeight: 400 }}>
                {subtitle}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}

      {children}
    </div>
  );
};
