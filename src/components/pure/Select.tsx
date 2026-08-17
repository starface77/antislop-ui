import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option...',
  label,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%', position: 'relative' }}>
      {label && (
        <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          padding: '0 10px',
          height: 34,
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          border: 'none',
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
          fontSize: 13,
          fontWeight: 450,
          color: selectedOption ? 'var(--p-t-900)' : 'var(--p-t-500)',
          userSelect: 'none',
          transition: 'background-color 0.12s var(--p-ease-out)',
          textAlign: 'left',
          width: '100%',
        }}
        onMouseEnter={(e) => {
          if (!disabled) e.currentTarget.style.backgroundColor = 'var(--p-input-hover)';
        }}
        onMouseLeave={(e) => {
          if (!disabled) e.currentTarget.style.backgroundColor = 'var(--p-input-bg)';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden' }}>
          {selectedOption?.icon && <span>{selectedOption.icon}</span>}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown
          size={13}
          color="var(--p-t-400)"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.14s var(--p-ease-out)',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Popover list */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 9000,
            backgroundColor: 'var(--p-surface)',
            borderRadius: 'var(--p-r-md)',
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxHeight: 200,
            overflowY: 'auto',
            animation: 'pPopIn 0.14s var(--p-ease-spring)',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: 'var(--p-r-sm)',
                  backgroundColor: isSelected ? 'var(--p-soft)' : 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 12.5,
                  fontWeight: isSelected ? 500 : 450,
                  color: isSelected ? 'var(--p-t-900)' : 'var(--p-t-700)',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background-color 0.1s',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--p-hover)';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {opt.icon && <span>{opt.icon}</span>}
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check size={12} color="var(--p-t-900)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
