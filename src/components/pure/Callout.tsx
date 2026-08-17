import React from 'react';
import { Sparkles, Shield, Info } from 'lucide-react';

export interface CalloutProps {
  title?: string;
  icon?: 'sparkles' | 'shield' | 'info' | React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  title,
  icon = 'sparkles',
  children,
  action,
}) => {
  const iconElement =
    icon === 'sparkles' ? (
      <Sparkles size={14} color="var(--p-t-900)" />
    ) : icon === 'shield' ? (
      <Shield size={14} color="var(--p-t-900)" />
    ) : icon === 'info' ? (
      <Info size={14} color="var(--p-t-900)" />
    ) : (
      icon
    );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '12px 14px',
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-lg)',
        fontSize: 12.5,
        lineHeight: 1.5,
        color: 'var(--p-t-800)',
      }}
    >
      <span style={{ marginTop: 2, flexShrink: 0 }}>{iconElement}</span>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontWeight: 500, color: 'var(--p-t-900)', marginBottom: 2 }}>
            {title}
          </div>
        )}
        <div style={{ fontWeight: 400, color: 'var(--p-t-700)' }}>{children}</div>
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  );
};
