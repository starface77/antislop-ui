import React from 'react';
import { X, Sparkles } from 'lucide-react';

export interface BannerProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  action,
  onDismiss,
  icon,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-lg)',
        gap: 12,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ color: 'var(--p-t-900)' }}>{icon || <Sparkles size={15} />}</span>
        <div>
          <span style={{ fontSize: 13, fontWeight: 550, color: 'var(--p-t-900)' }}>
            {title}
          </span>
          {description && (
            <span style={{ fontSize: 12, color: 'var(--p-t-500)', marginLeft: 8 }}>
              {description}
            </span>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {action}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--p-t-400)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <X size={13} />
          </button>
        )}
      </div>
    </div>
  );
};
