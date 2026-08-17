import React from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  description,
}) => {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.45 : 1,
      }}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        style={{
          width: 18,
          height: 18,
          borderRadius: 5,
          backgroundColor: checked ? 'var(--p-t-900)' : 'var(--p-soft)',
          color: 'var(--p-app)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.12s, transform 0.1s var(--p-ease-bounce)',
          padding: 0,
          marginTop: 1,
          flexShrink: 0,
        }}
        onMouseDown={(e) => {
          if (!disabled) e.currentTarget.style.transform = 'scale(0.9)';
        }}
        onMouseUp={(e) => {
          if (!disabled) e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {checked && <Check size={12} strokeWidth={2.5} />}
      </button>

      {(label || description) && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {label && (
            <span style={{ fontSize: 13, fontWeight: 450, color: 'var(--p-t-900)', lineHeight: 1.3 }}>
              {label}
            </span>
          )}
          {description && (
            <span style={{ fontSize: 11.5, color: 'var(--p-t-500)', marginTop: 2, lineHeight: 1.4 }}>
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};
