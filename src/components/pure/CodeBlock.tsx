import React, { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple token highlight for JS/TS/JSX
  const highlightCode = (raw: string) => {
    const lines = raw.split('\n');
    return lines.map((line, lineIdx) => {
      // Highlight basic keywords, strings, tags
      const formattedLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\b(import|export|from|function|const|let|var|return|if|else|interface|type)\b/g, '<span style="color: #93c5fd; font-weight: 500;">$1</span>')
        .replace(/(&lt;\/?[A-Z][a-zA-Z0-9]*|\/?&gt;)/g, '<span style="color: #67e8f9;">$1</span>')
        .replace(/(['"`].*?['"`])/g, '<span style="color: #86efac;">$1</span>')
        .replace(/\b([a-zA-Z0-9_]+)=/g, '<span style="color: #cbd5e1;">$1</span>=')
        .replace(/(\/\/.*$)/g, '<span style="color: #64748b;">$1</span>');

      return (
        <div key={lineIdx} style={{ display: 'flex', minHeight: 20 }}>
          {showLineNumbers && (
            <span
              style={{
                width: 32,
                userSelect: 'none',
                color: 'var(--p-t-400)',
                fontSize: 11,
                textAlign: 'right',
                paddingRight: 14,
                flexShrink: 0,
                opacity: 0.6,
              }}
            >
              {lineIdx + 1}
            </span>
          )}
          <span
            style={{ flex: 1, whiteSpace: 'pre' }}
            dangerouslySetInnerHTML={{ __html: formattedLine || '&nbsp;' }}
          />
        </div>
      );
    });
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-lg)',
        overflow: 'hidden',
        fontSize: 12,
        fontFamily: 'var(--p-font-mono)',
        boxShadow: 'none',
        border: 'none',
      }}
    >
      {/* Sleek Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          backgroundColor: 'var(--p-soft)',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FileCode size={13} color="var(--p-t-500)" />
          <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--p-t-800)', letterSpacing: '-0.01em' }}>
            {filename || `snippet.${language}`}
          </span>
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--p-t-400)',
              backgroundColor: 'var(--p-surface)',
              padding: '1px 5px',
              borderRadius: 3,
              marginLeft: 4,
            }}
          >
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '3px 8px',
            borderRadius: 'var(--p-r-sm)',
            backgroundColor: 'var(--p-surface)',
            color: copied ? 'var(--p-success)' : 'var(--p-t-600)',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: 500,
            fontFamily: 'var(--p-font)',
            transition: 'background-color 0.12s var(--p-ease-out), transform 0.1s',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-surface)')}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Body */}
      <div
        style={{
          padding: '14px 12px 16px',
          overflowX: 'auto',
          lineHeight: 1.65,
          color: 'var(--p-t-800)',
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        }}
      >
        <pre style={{ margin: 0, fontFamily: 'inherit' }}>
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  );
};
