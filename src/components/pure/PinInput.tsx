import React, { useRef } from 'react';

export interface PinInputProps {
  length?: number;
  value: string;
  onChange: (val: string) => void;
  label?: string;
  mask?: boolean;
}

export const PinInput: React.FC<PinInputProps> = ({
  length = 4,
  value,
  onChange,
  label,
  mask = false,
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const char = e.target.value.slice(-1);
    const chars = value.split('');
    chars[idx] = char;
    const nextVal = chars.join('').slice(0, length);
    onChange(nextVal);

    if (char && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !value[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, userSelect: 'none' }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}
      <div style={{ display: 'flex', gap: 6 }}>
        {Array.from({ length }).map((_, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type={mask ? 'password' : 'text'}
            inputMode="numeric"
            maxLength={1}
            value={value[idx] || ''}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            style={{
              width: 34,
              height: 34,
              textAlign: 'center',
              backgroundColor: 'var(--p-input-bg)',
              color: 'var(--p-t-900)',
              borderRadius: 'var(--p-r-md)',
              border: 'none',
              outline: 'none',
              fontSize: 14,
              fontWeight: 450,
              fontFamily: 'var(--p-font-mono)',
              transition: 'background-color 0.12s var(--p-ease-out)',
            }}
            onFocus={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-input-hover)')}
            onBlur={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-input-bg)')}
          />
        ))}
      </div>
    </div>
  );
};
