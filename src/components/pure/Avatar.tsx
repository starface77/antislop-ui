import React from 'react';

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  online?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  online,
}) => {
  const sizePx = size === 'sm' ? 24 : size === 'md' ? 32 : 40;
  const fontSize = size === 'sm' ? 10 : size === 'md' ? 12 : 14;

  const initials = name
    ? name
        .split(' ')
        .map((p) => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
      <div
        style={{
          width: sizePx,
          height: sizePx,
          borderRadius: '50%',
          backgroundColor: 'var(--p-soft)',
          color: 'var(--p-t-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize,
          fontWeight: 500,
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        {src ? (
          <img src={src} alt={name || 'Avatar'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {online !== undefined && (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: size === 'sm' ? 6 : 8,
            height: size === 'sm' ? 6 : 8,
            borderRadius: '50%',
            backgroundColor: online ? 'var(--p-success)' : 'var(--p-t-400)',
            border: '2px solid var(--p-surface)',
          }}
        />
      )}
    </div>
  );
};
