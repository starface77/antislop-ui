import React from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

export function Table<T extends { id?: string | number }>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--p-soft)',
        borderRadius: 'var(--p-r-lg)',
        overflow: 'hidden',
        padding: '2px',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0 2px',
          textAlign: 'left',
          fontSize: 12,
          tableLayout: 'fixed',
        }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  padding: '6px 10px',
                  fontWeight: 500,
                  color: 'var(--p-t-500)',
                  fontSize: 11,
                  letterSpacing: '-0.01em',
                  textAlign: col.align || 'left',
                  width: col.width,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id ?? idx}
              onClick={() => onRowClick && onRowClick(row)}
              style={{
                cursor: onRowClick ? 'pointer' : 'default',
                transition: 'background-color 0.12s ease-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {columns.map((col, colIdx) => {
                const isFirst = colIdx === 0;
                const isLast = colIdx === columns.length - 1;
                return (
                  <td
                    key={col.key}
                    style={{
                      padding: '7px 10px',
                      color: 'var(--p-t-800)',
                      textAlign: col.align || 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      borderTopLeftRadius: isFirst ? 'var(--p-r-sm)' : 0,
                      borderBottomLeftRadius: isFirst ? 'var(--p-r-sm)' : 0,
                      borderTopRightRadius: isLast ? 'var(--p-r-sm)' : 0,
                      borderBottomRightRadius: isLast ? 'var(--p-r-sm)' : 0,
                    }}
                  >
                    {col.render ? col.render(row) : (row as any)[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
