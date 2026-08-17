import React, { useEffect } from 'react';
import { Check, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
}

export const Toast: React.FC<{
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}> = ({ toasts, onDismiss }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        pointerEvents: 'none',
      }}
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{
  toast: ToastMessage;
  onDismiss: () => void;
}> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, toast.duration || 3500);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  const icons = {
    success: <Check size={14} color="var(--p-success)" />,
    info: <Info size={14} color="var(--p-accent)" />,
    warning: <AlertTriangle size={14} color="var(--p-warning)" />,
    error: <X size={14} color="var(--p-danger)" />,
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        backgroundColor: 'var(--p-t-900)',
        color: 'var(--p-app)',
        borderRadius: 'var(--p-r-lg)',
        fontSize: 12.5,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        animation: 'pPopIn 0.22s var(--p-ease-spring)',
        pointerEvents: 'auto',
        userSelect: 'none',
      }}
    >
      {icons[toast.type || 'info']}
      <span>{toast.title}</span>
    </div>
  );
};
