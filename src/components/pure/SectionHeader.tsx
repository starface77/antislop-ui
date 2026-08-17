import React from 'react';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  action,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 12,
        userSelect: 'none',
      }}
    >
      <div>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        {description && (
          <p style={{ fontSize: 12, color: 'var(--p-t-500)', marginTop: 2 }}>
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};
