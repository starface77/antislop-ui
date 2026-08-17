import React from 'react';
import { Sun, Moon, Flame } from 'lucide-react';
import { IconButton } from './IconButton';

export interface ThemeToggleProps {
  theme: 'light' | 'dark' | 'midnight';
  onChange: (theme: 'light' | 'dark' | 'midnight') => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onChange }) => {
  return (
    <div style={{ display: 'inline-flex', backgroundColor: 'var(--p-soft)', borderRadius: 'var(--p-r-sm)', padding: 1 }}>
      <IconButton
        size="sm"
        active={theme === 'light'}
        onClick={() => onChange('light')}
        title="Light Theme"
      >
        <Sun size={12} />
      </IconButton>
      <IconButton
        size="sm"
        active={theme === 'dark'}
        onClick={() => onChange('dark')}
        title="Dark Theme"
      >
        <Moon size={12} />
      </IconButton>
      <IconButton
        size="sm"
        active={theme === 'midnight'}
        onClick={() => onChange('midnight')}
        title="Midnight Theme"
      >
        <Flame size={12} />
      </IconButton>
    </div>
  );
};
