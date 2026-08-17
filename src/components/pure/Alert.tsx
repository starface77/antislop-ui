import React from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
}) => {
  const icons = {
    info: <Info size={15} color="var(--p-t-700)" />,
    success: <CheckCircle size={15} color="var(--p-success)" />,
    warning: <AlertTriangle size={15} color="var(--p-t-900)" />,
    error: <XCircle size={15} color="var(--p-danger)" />,
  };

  const bgs = {
    info: 'var(--p-soft)',
    success: 'var(--p-success-soft)',
    warning: 'var(--p-soft)',
    error: 'var(--p-danger-soft)',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '10px 14px',
        backgroundColor: bgs[type],
        borderRadius: 'var(--p-r-lg)',
        fontSize: 12.5,
        lineHeight: 1.5,
        color: 'var(--p-t-800)',
      }}
    >
      <span style={{ marginTop: 2, flexShrink: 0 }}>{icons[type]}</span>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontWeight: 500, color: 'var(--p-t-900)', marginBottom: 2 }}>
            {title}
          </div>
        )}
        <div style={{ fontWeight: 400, color: 'var(--p-t-700)' }}>{children}</div>
      </div>
    </div>
  );
};
