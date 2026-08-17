import React from 'react';
import { X } from 'lucide-react';

export interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  selected?: boolean;
  size?: 'sm' | 'md';
}

export const Chip: React.FC<ChipProps> = ({
  label,
  icon,
  onRemove,
  onClick,
  selected = false,
  size = 'md',
}) => {
  const isSm = size === 'sm';

  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: isSm ? 24 : 28,
        padding: isSm ? '0 8px' : '0 10px',
        borderRadius: 99,
        backgroundColor: selected ? 'var(--p-t-900)' : 'var(--p-soft)',
        color: selected ? 'var(--p-app)' : 'var(--p-t-800)',
        fontSize: isSm ? 11 : 12,
        fontWeight: 500,
        fontFamily: 'inherit',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        transition: 'background-color 0.12s var(--p-ease-out), transform 0.1s var(--p-ease-bounce)',
        border: 'none',
      }}
      onMouseDown={(e) => {
        if (onClick) e.currentTarget.style.transform = 'scale(0.96)';
      }}
      onMouseUp={(e) => {
        if (onClick) e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      <span style={{ letterSpacing: '-0.01em' }}>{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            border: 'none',
            outline: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: 0,
            marginLeft: 2,
          }}
        >
          <X size={10} />
        </button>
      )}
    </div>
  );
};
