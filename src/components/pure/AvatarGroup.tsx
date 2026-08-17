import React from 'react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';

export interface AvatarGroupProps {
  users: Array<Pick<AvatarProps, 'name' | 'src'>>;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users,
  max = 3,
  size = 'md',
}) => {
  const visible = users.slice(0, max);
  const remaining = users.length - max;
  const sizePx = size === 'sm' ? 24 : size === 'md' ? 32 : 40;
  const fontSize = size === 'sm' ? 10 : size === 'md' ? 11 : 13;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      {visible.map((u, i) => (
        <div
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : -8,
            boxShadow: '0 0 0 2px var(--p-surface)',
            borderRadius: '50%',
            position: 'relative',
            zIndex: visible.length - i,
          }}
        >
          <Avatar name={u.name} src={u.src} size={size} />
        </div>
      ))}

      {remaining > 0 && (
        <div
          style={{
            marginLeft: -8,
            width: sizePx,
            height: sizePx,
            borderRadius: '50%',
            backgroundColor: 'var(--p-soft)',
            color: 'var(--p-t-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize,
            fontWeight: 600,
            boxShadow: '0 0 0 2px var(--p-surface)',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};
