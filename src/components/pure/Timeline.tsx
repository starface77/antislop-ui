import React from 'react';

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  time: string;
  active?: boolean;
}

export interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {events.map((ev, idx) => {
        const isLast = idx === events.length - 1;
        return (
          <div key={ev.id} style={{ display: 'flex', gap: 12 }}>
            {/* Dot & Line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 14 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: ev.active ? 'var(--p-t-900)' : 'var(--p-t-400)',
                  marginTop: 5,
                  flexShrink: 0,
                }}
              />
              {!isLast && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    backgroundColor: 'var(--p-soft)',
                    margin: '4px 0',
                    minHeight: 24,
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: isLast ? 0 : 16, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--p-t-900)' }}>
                  {ev.title}
                </span>
                <span style={{ fontSize: 11, color: 'var(--p-t-400)' }}>{ev.time}</span>
              </div>
              {ev.description && (
                <p style={{ fontSize: 12, color: 'var(--p-t-500)', marginTop: 2 }}>
                  {ev.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
