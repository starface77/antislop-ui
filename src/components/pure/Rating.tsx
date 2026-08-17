import React, { useState } from 'react';
import { Star } from 'lucide-react';

export interface RatingProps {
  value: number;
  onChange?: (val: number) => void;
  max?: number;
  readOnly?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  max = 5,
  readOnly = false,
}) => {
  const [hoverVal, setHoverVal] = useState<number | null>(null);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
      {Array.from({ length: max }).map((_, idx) => {
        const starNum = idx + 1;
        const isFilled = (hoverVal ?? value) >= starNum;

        return (
          <button
            key={idx}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(starNum)}
            onMouseEnter={() => !readOnly && setHoverVal(starNum)}
            onMouseLeave={() => !readOnly && setHoverVal(null)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: readOnly ? 'default' : 'pointer',
              padding: 1,
              display: 'flex',
              color: isFilled ? 'var(--p-t-900)' : 'var(--p-t-300)',
              transition: 'transform 0.1s, color 0.1s',
            }}
          >
            <Star size={16} fill={isFilled ? 'currentColor' : 'none'} />
          </button>
        );
      })}
    </div>
  );
};
