import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend = 'up',
  description,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-lg)',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11.5, color: 'var(--p-t-500)', fontWeight: 450 }}>
          {title}
        </span>
        {icon && <span style={{ color: 'var(--p-t-400)' }}>{icon}</span>}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--p-t-900)', letterSpacing: '-0.025em' }}>
          {value}
        </span>

        {change && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              fontSize: 10.5,
              fontWeight: 500,
              color: trend === 'up' ? 'var(--p-success)' : trend === 'down' ? 'var(--p-danger)' : 'var(--p-t-500)',
              backgroundColor: trend === 'up' ? 'var(--p-success-soft)' : trend === 'down' ? 'var(--p-danger-soft)' : 'var(--p-surface)',
              padding: '1px 5px',
              borderRadius: 4,
            }}
          >
            {trend === 'up' && <ArrowUpRight size={10} />}
            {trend === 'down' && <ArrowDownRight size={10} />}
            {change}
          </span>
        )}
      </div>

      {description && (
        <span style={{ fontSize: 11, color: 'var(--p-t-400)', fontWeight: 400 }}>
          {description}
        </span>
      )}
    </div>
  );
};
