import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

export interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  group?: string;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onClose,
  items,
  placeholder = 'Type a command or search…',
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
    (item.group && item.group.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].onSelect();
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, filteredItems, selectedIndex, onClose]);

  if (!open) return null;

  return (
    <div
      className="pure-cmd-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        zIndex: 9999,
        animation: 'pFadeIn 0.16s var(--p-ease-out)',
      }}
    >
      <div
        className="pure-cmd-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 540,
          maxWidth: '100%',
          backgroundColor: 'var(--p-surface)',
          borderRadius: 'var(--p-r-xl)',
          overflow: 'hidden',
          animation: 'pCardIn 0.22s var(--p-ease-out)',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
        }}
      >
        {/* Search input bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 18px',
            backgroundColor: 'var(--p-surface)',
          }}
        >
          <Search size={16} color="var(--p-t-400)" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 14,
              fontFamily: 'inherit',
              fontWeight: 450,
              color: 'var(--p-t-900)',
              letterSpacing: '-0.01em',
            }}
          />
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 500,
              color: 'var(--p-t-400)',
              padding: '2px 6px',
              backgroundColor: 'var(--p-soft)',
              borderRadius: 4,
            }}
          >
            ESC
          </span>
        </div>

        {/* Divider surface */}
        <div style={{ height: 1, backgroundColor: 'var(--p-hover)' }} />

        {/* Results List */}
        <div
          style={{
            padding: '6px',
            overflowY: 'auto',
            maxHeight: 360,
          }}
        >
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: '32px 16px',
                textAlign: 'center',
                color: 'var(--p-t-400)',
                fontSize: 13,
              }}
            >
              No matching commands found
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.onSelect();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 12px',
                    borderRadius: 'var(--p-r-md)',
                    backgroundColor: isSelected ? 'var(--p-soft)' : 'transparent',
                    color: isSelected ? 'var(--p-t-900)' : 'var(--p-t-700)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'background-color 0.1s var(--p-ease-out)',
                  }}
                >
                  {item.icon && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? 'var(--p-t-900)' : 'var(--p-t-400)',
                      }}
                    >
                      {item.icon}
                    </div>
                  )}

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: isSelected ? 500 : 450,
                        letterSpacing: '-0.01em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div
                        style={{
                          fontSize: 11,
                          color: 'var(--p-t-400)',
                          marginTop: 1,
                        }}
                      >
                        {item.subtitle}
                      </div>
                    )}
                  </div>

                  {item.shortcut && (
                    <kbd
                      style={{
                        fontSize: 10.5,
                        fontFamily: 'var(--p-font-mono)',
                        padding: '2px 5px',
                        borderRadius: 4,
                        backgroundColor: isSelected ? 'var(--p-surface)' : 'var(--p-soft)',
                        color: 'var(--p-t-500)',
                      }}
                    >
                      {item.shortcut}
                    </kbd>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
