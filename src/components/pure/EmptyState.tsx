import React from 'react';
import { Layers } from 'lucide-react';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        textAlign: 'center',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-xl)',
        gap: 12,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: 'var(--p-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--p-t-500)',
        }}
      >
        {icon || <Layers size={20} />}
      </div>

      <div>
        <h4 style={{ fontSize: 14, fontWeight: 500, color: 'var(--p-t-900)' }}>
          {title}
        </h4>
        {description && (
          <p style={{ fontSize: 12, color: 'var(--p-t-500)', marginTop: 4, maxWidth: 280 }}>
            {description}
          </p>
        )}
      </div>

      {action && <div style={{ marginTop: 4 }}>{action}</div>}
    </div>
  );
};
