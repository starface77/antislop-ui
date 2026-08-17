import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-md)',
        overflow: 'hidden',
        transition: 'background-color 0.12s var(--p-ease-out)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 12px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textAlign: 'left',
          userSelect: 'none',
        }}
      >
        <div>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--p-t-900)' }}>
            {title}
          </span>
          {subtitle && (
            <p style={{ fontSize: 11.5, color: 'var(--p-t-500)', marginTop: 1 }}>
              {subtitle}
            </p>
          )}
        </div>

        <ChevronDown
          size={14}
          color="var(--p-t-500)"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.16s var(--p-ease-out)',
          }}
        />
      </button>

      {open && (
        <div
          style={{
            padding: '4px 12px 12px',
            fontSize: 12.5,
            color: 'var(--p-t-700)',
            lineHeight: 1.55,
            animation: 'pFadeIn 0.14s var(--p-ease-out)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
