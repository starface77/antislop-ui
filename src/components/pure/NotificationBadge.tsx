import React from 'react';

export interface NotificationBadgeProps {
  count?: number;
  max?: number;
  dot?: boolean;
  children: React.ReactNode;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  max = 99,
  dot = false,
  children,
}) => {
  const displayCount = count !== undefined && count > max ? `${max}+` : count;

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {children}

      {dot && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: 'var(--p-danger)',
            border: '2px solid var(--p-surface)',
          }}
        />
      )}

      {!dot && count !== undefined && count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -4,
            right: -6,
            minWidth: 16,
            height: 16,
            padding: '0 4px',
            borderRadius: 99,
            backgroundColor: 'var(--p-t-900)',
            color: 'var(--p-app)',
            fontSize: 9.5,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
          }}
        >
          {displayCount}
        </span>
      )}
    </div>
  );
};
