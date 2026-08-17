import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export interface AgentBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  avatar?: string;
  name?: string;
  reasoning?: string;
  reasoningDuration?: string;
  tools?: React.ReactNode;
  timestamp?: string;
}

export const AgentBubble: React.FC<AgentBubbleProps> = ({
  role,
  content,
  avatar,
  name,
  reasoning,
  reasoningDuration,
  tools,
  timestamp,
}) => {
  const [reasoningOpen, setReasoningOpen] = useState(false);
  const isUser = role === 'user';

  if (isUser) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '12px 0',
          animation: 'pSlideUp 0.2s var(--p-ease-out)',
        }}
      >
        <div
          style={{
            maxWidth: '75%',
            backgroundColor: 'var(--p-t-900)',
            color: 'var(--p-app)',
            borderRadius: '16px 16px 4px 16px',
            padding: '10px 16px',
            fontSize: 13.5,
            lineHeight: 1.55,
            letterSpacing: '-0.01em',
            fontWeight: 450,
          }}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        margin: '16px 0',
        animation: 'pSlideUp 0.24s var(--p-ease-out)',
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          backgroundColor: 'var(--p-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--p-accent)',
          flexShrink: 0,
          marginTop: 2,
          overflow: 'hidden',
        }}
      >
        {avatar ? (
          <img src={avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <Sparkles size={14} />
        )}
      </div>

      {/* Content wrapper */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.01em' }}>
            {name || 'Agent'}
          </span>
          {timestamp && (
            <span style={{ fontSize: 11, color: 'var(--p-t-400)' }}>
              {timestamp}
            </span>
          )}
        </div>

        {/* Optional Collapsible Reasoning step */}
        {reasoning && (
          <div
            style={{
              margin: '6px 0 10px',
              backgroundColor: 'var(--p-soft)',
              borderRadius: 'var(--p-r-md)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setReasoningOpen(!reasoningOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--p-t-500)',
                fontSize: 11.5,
                fontWeight: 500,
                fontFamily: 'inherit',
                textAlign: 'left',
              }}
            >
              <ChevronDown
                size={12}
                style={{
                  transform: reasoningOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.18s var(--p-ease-out)',
                }}
              />
              <span>Thought Process {reasoningDuration ? `(${reasoningDuration})` : ''}</span>
            </button>
            {reasoningOpen && (
              <div
                style={{
                  padding: '4px 12px 10px 24px',
                  fontSize: 12,
                  color: 'var(--p-t-500)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                  borderTop: '1px solid var(--p-hover)',
                }}
              >
                {reasoning}
              </div>
            )}
          </div>
        )}

        {/* Tools executed */}
        {tools && <div style={{ margin: '8px 0', display: 'flex', flexWrap: 'wrap', gap: 6 }}>{tools}</div>}

        {/* Main message text */}
        <div
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            color: 'var(--p-t-800)',
            letterSpacing: '-0.01em',
            whiteSpace: 'pre-wrap',
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
