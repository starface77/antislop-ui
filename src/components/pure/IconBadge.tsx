import React from 'react';

export interface IconBadgeProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'neutral' | 'accent';
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  size = 'md',
  variant = 'neutral',
}) => {
  const sizePx = size === 'sm' ? 24 : size === 'md' ? 32 : 40;

  return (
    <div
      style={{
        width: sizePx,
        height: sizePx,
        borderRadius: 'var(--p-r-md)',
        backgroundColor: variant === 'accent' ? 'var(--p-t-900)' : 'var(--p-soft)',
        color: variant === 'accent' ? 'var(--p-app)' : 'var(--p-t-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      {icon}
    </div>
  );
};
