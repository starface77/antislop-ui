import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pill';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeId,
  onChange,
  variant = 'underline',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: variant === 'pill' ? 4 : 16,
        padding: variant === 'pill' ? 3 : '0 4px',
        backgroundColor: variant === 'pill' ? 'var(--p-soft)' : 'transparent',
        borderRadius: variant === 'pill' ? 'var(--p-r-md)' : 0,
        userSelect: 'none',
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: variant === 'pill' ? '5px 10px' : '8px 2px',
              backgroundColor: variant === 'pill' && isActive ? 'var(--p-surface)' : 'transparent',
              color: isActive ? 'var(--p-t-900)' : 'var(--p-t-500)',
              border: 'none',
              borderBottom: variant === 'underline' && isActive ? '2px solid var(--p-t-900)' : '2px solid transparent',
              outline: 'none',
              cursor: 'pointer',
              fontSize: 12.5,
              fontWeight: isActive ? 500 : 450,
              fontFamily: 'inherit',
              borderRadius: variant === 'pill' ? 'var(--p-r-sm)' : 0,
              transition: 'color 0.12s, border-color 0.12s',
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                style={{
                  fontSize: 10,
                  padding: '1px 5px',
                  borderRadius: 99,
                  backgroundColor: isActive ? 'var(--p-t-900)' : 'var(--p-soft)',
                  color: isActive ? 'var(--p-app)' : 'var(--p-t-600)',
                  fontWeight: 500,
                }}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
