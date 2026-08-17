import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (val: string[]) => void;
  label?: string;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select multiple...',
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const toggleOption = (optVal: string) => {
    if (value.includes(optVal)) {
      onChange(value.filter((v) => v !== optVal));
    } else {
      onChange([...value, optVal]);
    }
  };

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%', position: 'relative' }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}

      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
          padding: '4px 8px',
          minHeight: 34,
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, flex: 1 }}>
          {value.length === 0 ? (
            <span style={{ fontSize: 13, color: 'var(--p-t-500)', padding: '2px 4px' }}>
              {placeholder}
            </span>
          ) : (
            value.map((v) => {
              const opt = options.find((o) => o.value === v);
              return (
                <span
                  key={v}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 3,
                    padding: '1px 6px',
                    borderRadius: 4,
                    backgroundColor: 'var(--p-surface)',
                    fontSize: 11.5,
                    color: 'var(--p-t-900)',
                    fontWeight: 500,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOption(v);
                  }}
                >
                  {opt?.label || v}
                  <X size={10} color="var(--p-t-500)" />
                </span>
              );
            })
          )}
        </div>

        <ChevronDown
          size={13}
          color="var(--p-t-400)"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.14s ease-out',
            flexShrink: 0,
          }}
        />
      </div>

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
            maxHeight: 180,
            overflowY: 'auto',
            animation: 'pPopIn 0.12s var(--p-ease-spring)',
          }}
        >
          {options.map((opt) => {
            const isSelected = value.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleOption(opt.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 8px',
                  borderRadius: 'var(--p-r-sm)',
                  backgroundColor: isSelected ? 'var(--p-soft)' : 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 450,
                  color: isSelected ? 'var(--p-t-900)' : 'var(--p-t-700)',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={12} color="var(--p-t-900)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
