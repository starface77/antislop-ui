import React from 'react';

export interface ActivityHeatmapProps {
  data?: number[]; // array of intensity 0 to 4
  days?: number;
  label?: string;
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  data = [1, 2, 0, 4, 3, 2, 1, 0, 2, 3, 4, 1, 2, 3, 0, 1, 4, 2, 3, 1, 2, 0, 3, 4, 2, 1, 0, 3],
  days = 28,
  label = 'Deployment Activity',
}) => {
  const getCellColor = (intensity: number) => {
    switch (intensity) {
      case 4:
        return 'var(--p-t-900)';
      case 3:
        return 'var(--p-t-700)';
      case 2:
        return 'var(--p-t-500)';
      case 1:
        return 'var(--p-t-300)';
      default:
        return 'var(--p-soft)';
    }
  };

  const displayData = data.slice(0, days);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, userSelect: 'none' }}>
      {label && (
        <span style={{ fontSize: 11.5, color: 'var(--p-t-500)', fontWeight: 500 }}>
          {label}
        </span>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: 3.5 }}>
        {displayData.map((val, idx) => (
          <div
            key={idx}
            style={{
              width: 13,
              height: 13,
              borderRadius: 2.5,
              backgroundColor: getCellColor(val),
              transition: 'transform 0.1s var(--p-ease-bounce)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            title={`Day ${idx + 1}: Level ${val}`}
          />
        ))}
      </div>
    </div>
  );
};
