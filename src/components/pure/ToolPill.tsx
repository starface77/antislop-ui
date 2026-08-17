import React, { useState } from 'react';
import { Check, X, Terminal, ChevronDown } from 'lucide-react';

export interface ToolPillProps {
  name: string;
  arg?: string;
  status?: 'running' | 'ok' | 'err';
  output?: string;
  icon?: React.ReactNode;
}

export const ToolPill: React.FC<ToolPillProps> = ({
  name,
  arg,
  status = 'ok',
  output,
  icon,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-md)',
        overflow: 'hidden',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'var(--p-font)',
        userSelect: 'none',
        transition: 'background-color 0.12s var(--p-ease-out), transform 0.1s var(--p-ease-bounce)',
        border: 'none',
      }}
    >
      <div
        onClick={() => output && setExpanded(!expanded)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '4px 10px',
          height: 28,
          cursor: output ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => {
          if (output) e.currentTarget.parentElement!.style.backgroundColor = 'var(--p-hover)';
        }}
        onMouseLeave={(e) => {
          if (output) e.currentTarget.parentElement!.style.backgroundColor = 'var(--p-soft)';
        }}
      >
        <span style={{ color: 'var(--p-t-500)', display: 'flex', alignItems: 'center' }}>
          {icon || <Terminal size={12} />}
        </span>

        <span style={{ color: 'var(--p-t-900)', fontWeight: 500, letterSpacing: '-0.01em' }}>
          {name}
        </span>

        {arg && (
          <span
            style={{
              color: 'var(--p-t-500)',
              backgroundColor: 'var(--p-surface)',
              padding: '1px 6px',
              borderRadius: 4,
              fontSize: 11,
              fontFamily: 'var(--p-font-mono)',
              fontWeight: 450,
            }}
          >
            {arg}
          </span>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
          {status === 'running' && (
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--p-t-900)',
                animation: 'pPulse 1.2s infinite',
              }}
            />
          )}
          {status === 'ok' && <Check size={12} color="var(--p-success)" />}
          {status === 'err' && <X size={12} color="var(--p-danger)" />}

          {output && (
            <ChevronDown
              size={11}
              color="var(--p-t-400)"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.16s var(--p-ease-out)',
                marginLeft: 2,
              }}
            />
          )}
        </div>
      </div>

      {expanded && output && (
        <div
          style={{
            padding: '8px 12px 10px',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            fontSize: 11.5,
            fontFamily: 'var(--p-font-mono)',
            color: 'var(--p-t-600)',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            borderTop: '1px solid var(--p-hover)',
            animation: 'pFadeIn 0.14s var(--p-ease-out)',
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
};
