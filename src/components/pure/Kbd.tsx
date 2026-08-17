import React from 'react';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Kbd: React.FC<KbdProps> = ({ children, style, ...props }) => {
  return (
    <kbd
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 5px',
        fontSize: 10.5,
        fontFamily: 'var(--p-font-mono)',
        fontWeight: 500,
        color: 'var(--p-t-600)',
        backgroundColor: 'var(--p-soft)',
        borderRadius: 4,
        lineHeight: 1,
        userSelect: 'none',
        border: 'none',
        boxShadow: 'none',
        ...style,
      }}
      {...props}
    >
      {children}
    </kbd>
  );
};
