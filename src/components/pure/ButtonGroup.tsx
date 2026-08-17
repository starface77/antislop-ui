import React from 'react';

export interface ButtonGroupProps {
  children: React.ReactNode;
  attached?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, attached = false }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: attached ? 1 : 6,
        backgroundColor: attached ? 'var(--p-soft)' : 'transparent',
        borderRadius: attached ? 'var(--p-r-md)' : 0,
        padding: attached ? 2 : 0,
      }}
    >
      {children}
    </div>
  );
};
