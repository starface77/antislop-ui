import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

export interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onSelect?: () => void;
}

export const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period = '/month',
  description,
  features,
  popular = false,
  ctaText = 'Get Started',
  onSelect,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '22px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-xl)',
        userSelect: 'none',
        height: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        transform: popular ? 'scale(1.02)' : 'none',
        transition: 'transform 0.12s var(--p-ease-spring)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--p-t-900)' }}>
            {name}
          </span>
          {popular && (
            <Badge variant="pro" dot size="sm">
              Popular
            </Badge>
          )}
        </div>

        <p style={{ fontSize: 12, color: 'var(--p-t-500)', lineHeight: 1.4 }}>
          {description}
        </p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, padding: '4px 0' }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--p-t-900)', letterSpacing: '-0.03em' }}>
            {price}
          </span>
          <span style={{ fontSize: 12, color: 'var(--p-t-400)' }}>{period}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, paddingTop: 4 }}>
          {features.map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--p-t-800)' }}>
              <Check size={12} color="var(--p-success)" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant={popular ? 'primary' : 'secondary'}
        onClick={onSelect}
        style={{ width: '100%', marginTop: 8 }}
      >
        {ctaText}
      </Button>
    </div>
  );
};
