import React from 'react';
import { CreditCard as CardIcon, Wifi } from 'lucide-react';

export interface CreditCardPreviewProps {
  holder?: string;
  number?: string;
  expiry?: string;
  brand?: 'visa' | 'mastercard';
}

export const CreditCardPreview: React.FC<CreditCardPreviewProps> = ({
  holder = 'ALEX CHEN',
  number = '•••• •••• •••• 4242',
  expiry = '12/28',
  brand = 'visa',
}) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 280,
        height: 160,
        borderRadius: 'var(--p-r-xl)',
        backgroundColor: 'var(--p-t-900)',
        color: 'var(--p-app)',
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top row: Chip & Contactless */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 20,
              borderRadius: 3.5,
              backgroundColor: 'var(--p-app)',
              opacity: 0.2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardIcon size={12} color="var(--p-app)" />
          </div>
          <Wifi size={13} style={{ transform: 'rotate(90deg)', opacity: 0.5 }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', opacity: 0.85 }}>
          {brand.toUpperCase()}
        </span>
      </div>

      {/* Center: Masked Number */}
      <div
        style={{
          fontFamily: 'var(--p-font-mono)',
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: '0.12em',
          opacity: 0.95,
        }}
      >
        {number}
      </div>

      {/* Bottom: Holder & Expiry */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 9, opacity: 0.5, letterSpacing: '0.04em' }}>CARD HOLDER</span>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.03em' }}>{holder}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontSize: 9, opacity: 0.5, letterSpacing: '0.04em' }}>EXPIRES</span>
          <span style={{ fontSize: 11.5, fontFamily: 'var(--p-font-mono)', fontWeight: 600 }}>{expiry}</span>
        </div>
      </div>
    </div>
  );
};
