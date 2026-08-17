import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export interface CopyButtonProps {
  value: string;
  label?: string;
  size?: 'sm' | 'md';
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  label = 'Copy',
  size = 'sm',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: size === 'sm' ? '3px 8px' : '5px 10px',
        backgroundColor: 'var(--p-soft)',
        color: copied ? 'var(--p-success)' : 'var(--p-t-700)',
        borderRadius: 'var(--p-r-sm)',
        border: 'none',
        outline: 'none',
        fontSize: size === 'sm' ? 11.5 : 12.5,
        fontWeight: 500,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.12s var(--p-ease-out)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      <span>{copied ? 'Copied' : label}</span>
    </button>
  );
};
