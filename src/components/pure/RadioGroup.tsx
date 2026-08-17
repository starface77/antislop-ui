import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  label,
  name = 'pure-radio',
  disabled = false,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }} data-radiogroup={name}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {options.map((opt) => {
          const isSelected = opt.value === value;
          return (
            <label
              key={opt.value}
              onClick={() => !disabled && onChange(opt.value)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
                padding: '8px 10px',
                borderRadius: 'var(--p-r-md)',
                backgroundColor: isSelected ? 'var(--p-soft)' : 'transparent',
                cursor: disabled ? 'not-allowed' : 'pointer',
                userSelect: 'none',
                opacity: disabled ? 0.45 : 1,
                transition: 'background-color 0.12s var(--p-ease-out)',
              }}
              onMouseEnter={(e) => {
                if (!isSelected && !disabled) e.currentTarget.style.backgroundColor = 'var(--p-hover)';
              }}
              onMouseLeave={(e) => {
                if (!isSelected && !disabled) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {/* Custom Radio Dot */}
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'var(--p-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 1,
                  flexShrink: 0,
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'var(--p-t-900)',
                      animation: 'pPopIn 0.12s var(--p-ease-bounce)',
                    }}
                  />
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 13, fontWeight: isSelected ? 500 : 450, color: 'var(--p-t-900)', lineHeight: 1.3 }}>
                  {opt.label}
                </span>
                {opt.description && (
                  <span style={{ fontSize: 11.5, color: 'var(--p-t-500)', marginTop: 2, lineHeight: 1.4 }}>
                    {opt.description}
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
