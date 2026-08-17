import React, { useState } from 'react';
import { Sparkles, ChevronDown, Check, Copy, Volume2, RotateCcw } from 'lucide-react';
import { Avatar } from './Avatar';

export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  name?: string;
  avatar?: string;
  time?: string;
  reasoning?: string;
  reasoningDuration?: string;
  citations?: Array<{ title: string; url?: string }>;
  onCopy?: () => void;
  onRetry?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  role,
  content,
  name,
  avatar,
  time,
  reasoning,
  reasoningDuration,
  citations,
  onCopy,
  onRetry,
}) => {
  const [reasoningOpen, setReasoningOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isAssistant = role === 'assistant';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
        animation: 'pFadeIn 0.16s var(--p-ease-out)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Avatar
            name={name || (isAssistant ? 'AI Agent' : 'You')}
            src={avatar}
            size="sm"
          />
          <span style={{ fontSize: 12.5, fontWeight: 550, color: 'var(--p-t-900)' }}>
            {name || (isAssistant ? 'Agent' : 'You')}
          </span>
          {isAssistant && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 3,
                fontSize: 10,
                fontWeight: 500,
                padding: '1px 5px',
                borderRadius: 4,
                backgroundColor: 'var(--p-soft)',
                color: 'var(--p-t-600)',
              }}
            >
              <Sparkles size={9} />
              Model v4
            </span>
          )}
        </div>

        {time && (
          <span style={{ fontSize: 11, color: 'var(--p-t-400)', fontWeight: 400 }}>
            {time}
          </span>
        )}
      </div>

      {/* Collapsible Reasoning Foldout (if assistant) */}
      {isAssistant && reasoning && (
        <div
          style={{
            backgroundColor: 'var(--p-input-bg)',
            borderRadius: 'var(--p-r-md)',
            overflow: 'hidden',
            transition: 'background-color 0.12s',
          }}
        >
          <button
            type="button"
            onClick={() => setReasoningOpen(!reasoningOpen)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 11.5,
              color: 'var(--p-t-500)',
              fontFamily: 'inherit',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontWeight: 500 }}>Reasoning process</span>
              {reasoningDuration && (
                <span style={{ fontSize: 10.5, color: 'var(--p-t-400)', fontFamily: 'var(--p-font-mono)' }}>
                  ({reasoningDuration})
                </span>
              )}
            </div>

            <ChevronDown
              size={12}
              style={{
                transform: reasoningOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.14s ease-out',
              }}
            />
          </button>

          {reasoningOpen && (
            <div
              style={{
                padding: '4px 10px 10px',
                fontSize: 11.5,
                color: 'var(--p-t-600)',
                lineHeight: 1.5,
                animation: 'pFadeIn 0.12s ease-out',
              }}
            >
              {reasoning}
            </div>
          )}
        </div>
      )}

      {/* Message Body */}
      <div
        style={{
          padding: '10px 12px',
          backgroundColor: isAssistant ? 'var(--p-soft)' : 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-lg)',
          fontSize: 13,
          lineHeight: 1.55,
          color: 'var(--p-t-800)',
          fontWeight: 450,
          whiteSpace: 'pre-wrap',
        }}
      >
        {content}

        {/* Citations */}
        {citations && citations.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
            {citations.map((c, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 10.5,
                  padding: '2px 6px',
                  borderRadius: 4,
                  backgroundColor: 'var(--p-surface)',
                  color: 'var(--p-t-700)',
                  fontWeight: 500,
                }}
              >
                [{i + 1}] {c.title}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar (Copy, Retry, TTS) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '2px 6px',
            backgroundColor: 'transparent',
            color: copied ? 'var(--p-success)' : 'var(--p-t-400)',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 11,
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>

        {isAssistant && (
          <>
            <button
              type="button"
              onClick={onRetry}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '2px 6px',
                backgroundColor: 'transparent',
                color: 'var(--p-t-400)',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 11,
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <RotateCcw size={11} />
              <span>Retry</span>
            </button>

            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '2px 6px',
                backgroundColor: 'transparent',
                color: 'var(--p-t-400)',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 11,
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <Volume2 size={11} />
              <span>Read</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
