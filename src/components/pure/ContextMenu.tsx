import React, { useState, useEffect } from 'react';
import type { DropdownMenuItem } from './DropdownMenu';

export interface ContextMenuProps {
  items: DropdownMenuItem[];
  children: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ items, children }) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleClick = () => setPos(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div onContextMenu={handleContextMenu} style={{ width: '100%' }}>
      {children}

      {pos && (
        <div
          style={{
            position: 'fixed',
            top: pos.y,
            left: pos.x,
            zIndex: 99999,
            backgroundColor: 'var(--p-surface)',
            borderRadius: 'var(--p-r-md)',
            padding: 4,
            minWidth: 160,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            animation: 'pPopIn 0.12s var(--p-ease-spring)',
            userSelect: 'none',
          }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                item.onSelect?.();
                setPos(null);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 8px',
                borderRadius: 'var(--p-r-sm)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 12,
                fontWeight: 450,
                color: item.danger ? 'var(--p-danger)' : 'var(--p-t-800)',
                textAlign: 'left',
                width: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </div>
              {item.shortcut && (
                <span style={{ fontSize: 10, color: 'var(--p-t-400)', fontFamily: 'var(--p-font-mono)' }}>
                  {item.shortcut}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
