import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

export interface SplitButtonProps {
  label: string;
  onClick: () => void;
  onDropdownClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  label,
  onClick,
  onDropdownClick,
  variant = 'primary',
  size = 'md',
  icon,
}) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 1, backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-md)', padding: 1 }}>
      <Button
        variant={variant}
        size={size}
        icon={icon}
        onClick={onClick}
        style={{ borderTopRightRadius: 2, borderBottomRightRadius: 2 }}
      >
        {label}
      </Button>

      <button
        type="button"
        onClick={onDropdownClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 6px',
          height: size === 'sm' ? 28 : size === 'md' ? 32 : 38,
          backgroundColor: variant === 'primary' ? 'var(--p-accent)' : 'var(--p-soft)',
          color: variant === 'primary' ? 'var(--p-accent-fg)' : 'var(--p-t-800)',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          borderTopRightRadius: 'var(--p-r-md)',
          borderBottomRightRadius: 'var(--p-r-md)',
        }}
      >
        <ChevronDown size={12} />
      </button>
    </div>
  );
};
