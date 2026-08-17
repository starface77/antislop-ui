import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: number;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  icon,
  children,
  footer,
  maxWidth = 440,
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(16px)',
        animation: 'pFadeIn 0.16s var(--p-ease-out)',
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth,
          backgroundColor: 'var(--p-surface)',
          borderRadius: 'var(--p-r-xl)',
          padding: '24px',
          animation: 'pPopIn 0.22s var(--p-ease-spring)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: 'none',
          border: 'none',
          userSelect: 'none',
        }}
      >
        {/* Header with optional Icon and Close button */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            {icon && (
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--p-r-md)',
                  backgroundColor: 'var(--p-soft)',
                  color: 'var(--p-t-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
            )}
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--p-t-900)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              {description && (
                <p
                  style={{
                    fontSize: 12.5,
                    color: 'var(--p-t-500)',
                    marginTop: 4,
                    lineHeight: 1.5,
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            title="Close (Esc)"
            style={{
              width: 26,
              height: 26,
              borderRadius: 'var(--p-r-sm)',
              backgroundColor: 'var(--p-soft)',
              color: 'var(--p-t-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background-color 0.12s, color 0.12s, transform 0.1s',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--p-hover)';
              e.currentTarget.style.color = 'var(--p-t-900)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--p-soft)';
              e.currentTarget.style.color = 'var(--p-t-500)';
            }}
          >
            <X size={13} />
          </button>
        </div>

        {/* Dialog Content */}
        <div style={{ fontSize: 13, color: 'var(--p-t-700)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {children}
        </div>

        {/* Footer actions */}
        {footer && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 8,
              marginTop: 6,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
