import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value = new Date(),
  onChange,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%', position: 'relative' }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-t-700)', letterSpacing: '-0.01em' }}>
          {label}
        </span>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 10px',
          height: 34,
          backgroundColor: 'var(--p-input-bg)',
          borderRadius: 'var(--p-r-md)',
          border: 'none',
          color: 'var(--p-t-900)',
          fontSize: 12.5,
          fontWeight: 450,
          cursor: 'pointer',
          fontFamily: 'inherit',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <CalendarIcon size={13} color="var(--p-t-500)" />
        <span>{value.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            zIndex: 9000,
            backgroundColor: 'var(--p-surface)',
            borderRadius: 'var(--p-r-lg)',
            padding: 12,
            width: 230,
            animation: 'pPopIn 0.12s var(--p-ease-spring)',
            userSelect: 'none',
          }}
        >
          {/* Calendar Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--p-t-900)' }}>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                type="button"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: 'var(--p-soft)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--p-t-600)', cursor: 'pointer' }}
              >
                <ChevronLeft size={11} />
              </button>
              <button
                type="button"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: 'var(--p-soft)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--p-t-600)', cursor: 'pointer' }}
              >
                <ChevronRight size={11} />
              </button>
            </div>
          </div>

          {/* Days Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3, textAlign: 'center' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <span key={i} style={{ fontSize: 10, color: 'var(--p-t-400)', fontWeight: 500 }}>{d}</span>
            ))}

            {Array.from({ length: firstDay }).map((_, i) => (
              <span key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const isSelected = value.getDate() === dayNum && value.getMonth() === currentMonth.getMonth();
              return (
                <button
                  key={dayNum}
                  type="button"
                  onClick={() => {
                    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNum);
                    onChange?.(selected);
                    setOpen(false);
                  }}
                  style={{
                    height: 24,
                    borderRadius: 4,
                    backgroundColor: isSelected ? 'var(--p-t-900)' : 'transparent',
                    color: isSelected ? 'var(--p-app)' : 'var(--p-t-800)',
                    border: 'none',
                    fontSize: 11,
                    fontWeight: isSelected ? 600 : 450,
                    cursor: 'pointer',
                  }}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
