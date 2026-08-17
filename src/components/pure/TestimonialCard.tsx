import React from 'react';
import { Rating } from './Rating';
import { Avatar } from './Avatar';
import { Badge } from './Badge';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  avatarSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatarSrc,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '16px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-lg)',
        userSelect: 'none',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Rating value={rating} readOnly />
        <p style={{ fontSize: 13, color: 'var(--p-t-800)', lineHeight: 1.55, fontStyle: 'normal', fontWeight: 450 }}>
          "{quote}"
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name={author} src={avatarSrc} size="sm" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 12.5, fontWeight: 550, color: 'var(--p-t-900)' }}>{author}</span>
            <span style={{ fontSize: 11, color: 'var(--p-t-400)' }}>{role}{company ? ` at ${company}` : ''}</span>
          </div>
        </div>

        <Badge variant="success" dot size="sm">Verified</Badge>
      </div>
    </div>
  );
};
