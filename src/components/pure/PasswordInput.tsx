import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  style,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {label && (
        <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </label>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 10px',
          height: 34,
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          transition: 'background-color 0.12s var(--p-ease-out)',
        }}
      >
        <Lock size={13} color="var(--p-t-500)" />

        <input
          type={show ? 'text' : 'password'}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: 13,
            fontWeight: 450,
            color: 'var(--p-t-900)',
            width: '100%',
            ...style,
          }}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-500)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          }}
        >
          {show ? <EyeOff size={13} /> : <Eye size={13} />}
        </button>
      </div>

      {error && <span style={{ fontSize: 11, color: 'var(--p-danger)' }}>{error}</span>}
    </div>
  );
};
