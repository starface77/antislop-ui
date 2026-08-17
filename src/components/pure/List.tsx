import React from 'react';

export interface ListItemProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  icon,
  action,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 12px',
        borderRadius: 'var(--p-r-md)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 0.12s var(--p-ease-out)',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.backgroundColor = 'var(--p-hover)';
      }}
      onMouseLeave={(e) => {
        if (onClick) e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {icon && <span style={{ color: 'var(--p-t-500)' }}>{icon}</span>}
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--p-t-900)' }}>{title}</div>
          {description && (
            <div style={{ fontSize: 11.5, color: 'var(--p-t-500)', marginTop: 1 }}>{description}</div>
          )}
        </div>
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};

export interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      {children}
    </div>
  );
};
