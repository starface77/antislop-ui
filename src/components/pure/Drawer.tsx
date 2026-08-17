import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 360,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        animation: 'pFadeIn 0.16s var(--p-ease-out)',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width,
          maxWidth: '100%',
          height: '100%',
          backgroundColor: 'var(--p-surface)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          animation: 'pDrawerIn 0.22s var(--p-ease-out)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 500, color: 'var(--p-t-900)', letterSpacing: '-0.015em' }}>
              {title}
            </h3>
            {description && (
              <p style={{ fontSize: 12, color: 'var(--p-t-500)', marginTop: 2 }}>
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              width: 24,
              height: 24,
              borderRadius: 'var(--p-r-sm)',
              backgroundColor: 'var(--p-soft)',
              color: 'var(--p-t-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <X size={13} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </div>

        {footer && <div>{footer}</div>}
      </div>

      <style>{`
        @keyframes pDrawerIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
