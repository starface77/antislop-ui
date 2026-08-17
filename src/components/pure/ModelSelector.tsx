import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Badge } from './Badge';

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  badge?: 'PRO' | 'FREE';
  dotColor?: string;
}

export interface ModelSelectorProps {
  models: ModelOption[];
  selectedId: string;
  onSelect: (model: ModelOption) => void;
  className?: string;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  models,
  selectedId,
  onSelect,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedModel = models.find((m) => m.id === selectedId) || models[0];

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
    <div ref={ref} className={`pure-model-selector ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Selector trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 8px',
          height: 28,
          borderRadius: 'var(--p-r-sm)',
          backgroundColor: 'var(--p-soft)',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--p-t-800)',
          userSelect: 'none',
          transition: 'background-color 0.12s var(--p-ease-out)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: selectedModel?.dotColor || 'var(--p-accent)',
          }}
        />
        <span>{selectedModel?.name}</span>
        {selectedModel?.badge && (
          <Badge variant={selectedModel.badge === 'PRO' ? 'pro' : 'free'} size="sm">
            {selectedModel.badge}
          </Badge>
        )}
        <ChevronDown
          size={12}
          color="var(--p-t-400)"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.14s var(--p-ease-out)',
          }}
        />
      </button>

      {/* Popover list — surface layered, zero shadow, zero border */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            zIndex: 9000,
            backgroundColor: 'var(--p-surface)',
            borderRadius: 'var(--p-r-md)',
            padding: 4,
            minWidth: 200,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            animation: 'pPopIn 0.14s var(--p-ease-spring)',
          }}
        >
          {models.map((m) => {
            const isSelected = m.id === selectedId;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  onSelect(m);
                  setOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 8px',
                  borderRadius: 'var(--p-r-sm)',
                  backgroundColor: isSelected ? 'var(--p-soft)' : 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 12,
                  fontWeight: isSelected ? 600 : 450,
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
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: m.dotColor || 'var(--p-accent)',
                  }}
                />
                <span style={{ flex: 1 }}>{m.name}</span>
                {m.badge && (
                  <Badge variant={m.badge === 'PRO' ? 'pro' : 'free'} size="sm">
                    {m.badge}
                  </Badge>
                )}
                {isSelected && <Check size={12} color="var(--p-accent)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
