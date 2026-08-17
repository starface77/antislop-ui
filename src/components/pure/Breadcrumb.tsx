import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, userSelect: 'none' }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight size={12} color="var(--p-t-400)" />}
            {isLast ? (
              <span style={{ color: 'var(--p-t-900)', fontWeight: 500 }}>
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: 0,
                  color: 'var(--p-t-500)',
                  fontWeight: 450,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--p-t-800)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--p-t-500)')}
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
