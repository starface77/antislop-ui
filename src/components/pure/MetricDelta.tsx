import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export interface MetricDeltaProps {
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

export const MetricDelta: React.FC<MetricDeltaProps> = ({ value, trend = 'up' }) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        fontSize: 11,
        fontWeight: 500,
        color: trend === 'up' ? 'var(--p-success)' : trend === 'down' ? 'var(--p-danger)' : 'var(--p-t-500)',
        backgroundColor: trend === 'up' ? 'var(--p-success-soft)' : trend === 'down' ? 'var(--p-danger-soft)' : 'var(--p-soft)',
        padding: '1px 5px',
        borderRadius: 4,
        userSelect: 'none',
      }}
    >
      {trend === 'up' && <ArrowUpRight size={11} />}
      {trend === 'down' && <ArrowDownRight size={11} />}
      {value}
    </span>
  );
};
