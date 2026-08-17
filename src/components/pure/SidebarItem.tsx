import React from 'react';

export interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  active = false,
  badge,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '7px 10px',
        borderRadius: 'var(--p-r-md)',
        backgroundColor: active ? 'var(--p-soft)' : 'transparent',
        color: active ? 'var(--p-t-900)' : 'var(--p-t-600)',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: 12.5,
        fontWeight: active ? 550 : 450,
        fontFamily: 'inherit',
        transition: 'background-color 0.12s var(--p-ease-out), color 0.12s',
        userSelect: 'none',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = 'var(--p-hover)';
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
        <span>{label}</span>
      </div>

      {badge !== undefined && (
        <span
          style={{
            fontSize: 10.5,
            padding: '1px 5px',
            borderRadius: 99,
            backgroundColor: active ? 'var(--p-surface)' : 'var(--p-soft)',
            color: 'var(--p-t-600)',
            fontWeight: 500,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
};
