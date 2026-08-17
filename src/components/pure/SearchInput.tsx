import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void;
  shortcut?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  shortcut,
  placeholder = 'Search anything...',
  style,
  ...props
}) => {
  return (
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
        width: '100%',
      }}
    >
      <Search size={13} color="var(--p-t-500)" style={{ flexShrink: 0 }} />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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

      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--p-t-500)',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <X size={12} />
        </button>
      )}

      {shortcut && !value && (
        <span
          style={{
            fontSize: 10,
            fontFamily: 'var(--p-font-mono)',
            padding: '1px 5px',
            borderRadius: 4,
            backgroundColor: 'var(--p-surface)',
            color: 'var(--p-t-500)',
            userSelect: 'none',
          }}
        >
          {shortcut}
        </span>
      )}
    </div>
  );
};
