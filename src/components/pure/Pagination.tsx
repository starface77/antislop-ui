import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, userSelect: 'none' }}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          width: 28,
          height: 28,
          borderRadius: 'var(--p-r-sm)',
          backgroundColor: 'var(--p-soft)',
          color: 'var(--p-t-700)',
          border: 'none',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage <= 1 ? 0.35 : 1,
        }}
      >
        <ChevronLeft size={13} />
      </button>

      {pages.map((p) => {
        const isCurrent = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            style={{
              width: 28,
              height: 28,
              borderRadius: 'var(--p-r-sm)',
              backgroundColor: isCurrent ? 'var(--p-t-900)' : 'var(--p-soft)',
              color: isCurrent ? 'var(--p-app)' : 'var(--p-t-700)',
              border: 'none',
              outline: 'none',
              fontSize: 12,
              fontWeight: isCurrent ? 500 : 450,
              fontFamily: 'inherit',
              cursor: 'pointer',
            }}
          >
            {p}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          width: 28,
          height: 28,
          borderRadius: 'var(--p-r-sm)',
          backgroundColor: 'var(--p-soft)',
          color: 'var(--p-t-700)',
          border: 'none',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage >= totalPages ? 0.35 : 1,
        }}
      >
        <ChevronRight size={13} />
      </button>
    </div>
  );
};
