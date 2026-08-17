import React from 'react';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  variant?: 'text' | 'rect' | 'circle';
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  variant = 'rect',
  className = '',
  style,
}) => {
  const isCircle = variant === 'circle';
  const defaultHeight = variant === 'text' ? 14 : isCircle ? 36 : 24;
  const defaultWidth = isCircle ? 36 : '100%';
  const defaultRadius = isCircle ? '50%' : variant === 'text' ? 4 : 'var(--p-r-md)';

  return (
    <div
      className={`pure-skeleton ${className}`}
      style={{
        width: width ?? defaultWidth,
        height: height ?? defaultHeight,
        borderRadius: borderRadius ?? defaultRadius,
        backgroundColor: 'var(--p-soft)',
        animation: 'pSkeletonPulse 1.5s ease-in-out infinite',
        ...style,
      }}
    >
      <style>{`
        @keyframes pSkeletonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
      `}</style>
    </div>
  );
};
