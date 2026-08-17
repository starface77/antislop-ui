import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '20px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-xl)',
        transition: 'background-color 0.12s var(--p-ease-out), transform 0.12s var(--p-ease-spring)',
        userSelect: 'none',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--p-soft)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--p-surface)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 'var(--p-r-md)',
          backgroundColor: 'var(--p-soft)',
          color: 'var(--p-t-900)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.015em' }}>
          {title}
        </h3>
        <p style={{ fontSize: 12, color: 'var(--p-t-500)', lineHeight: 1.55 }}>
          {description}
        </p>
      </div>

      {actionText && (
        <button
          type="button"
          onClick={onAction}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-900)',
            fontSize: 11.5,
            fontWeight: 550,
            cursor: 'pointer',
            padding: 0,
            marginTop: 'auto',
            fontFamily: 'inherit',
          }}
        >
          <span>{actionText}</span>
          <ArrowRight size={11} />
        </button>
      )}
    </div>
  );
};
