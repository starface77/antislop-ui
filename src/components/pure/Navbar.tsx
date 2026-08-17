import React from 'react';

export interface NavbarProps {
  brand: React.ReactNode;
  navItems?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ brand, navItems, actions }) => {
  return (
    <nav
      style={{
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        backgroundColor: 'var(--p-surface)',
        userSelect: 'none',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {brand}
        {navItems && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{navItems}</div>}
      </div>

      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{actions}</div>}
    </nav>
  );
};
