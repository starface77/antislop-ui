import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Badge } from './Badge';
import { ActionIcon } from './ActionIcon';

export interface InvoiceRowProps {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'failed';
  onDownload?: () => void;
}

export const InvoiceRow: React.FC<InvoiceRowProps> = ({
  id,
  date,
  amount,
  status = 'paid',
  onDownload,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        backgroundColor: 'var(--p-surface)',
        borderRadius: 'var(--p-r-md)',
        transition: 'background-color 0.12s var(--p-ease-out)',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-input-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-surface)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 'var(--p-r-sm)',
            backgroundColor: 'var(--p-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--p-t-600)',
          }}
        >
          <FileText size={13} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--p-t-900)' }}>
            Invoice #{id}
          </span>
          <span style={{ fontSize: 11, color: 'var(--p-t-400)' }}>{date}</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'var(--p-font-mono)', fontSize: 12.5, fontWeight: 600, color: 'var(--p-t-900)' }}>
          {amount}
        </span>

        <Badge
          variant={status === 'paid' ? 'success' : status === 'pending' ? 'neutral' : 'danger'}
          dot
          size="sm"
        >
          {status === 'paid' ? 'Paid' : status === 'pending' ? 'Pending' : 'Failed'}
        </Badge>

        {onDownload && (
          <ActionIcon size="sm" onClick={onDownload} title="Download PDF">
            <Download size={12} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};
