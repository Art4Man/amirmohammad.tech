'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const themes = {
  light: {
    '--background': '#F9FAFB',
    '--foreground': '#171717',
    '--card-background': '#ffffff',
    '--text-secondary': '#374151',
    '--text-tertiary': '#6b7280',
    '--heading-color': '#525252',
    '--buttonBg': '#ffffff',
    '--iconColor': '#374151'
  },
  dark: {
    '--background': '#0a0a0a',
    '--foreground': '#ededed',
    '--card-background': '#171717',
    '--text-secondary': '#e5e7eb',
    '--text-tertiary': '#9ca3af',
    '--heading-color': '#a3a3a3',
    '--buttonBg': '#2a2a2a',
    '--iconColor': '#e5e7eb'
  }
};

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const applyTheme = (selectedTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    const themeVars = themes[selectedTheme];
    
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    root.setAttribute('data-theme', selectedTheme);
  };

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
    applyTheme(savedTheme as 'light' | 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: 'var(--buttonBg)',
        border: theme === 'light' ? '1px solid #e5e7eb' : '1px solid #4b5563'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" style={{ color: 'var(--iconColor)' }} />
      ) : (
        <Sun className="w-5 h-5" style={{ color: 'var(--iconColor)' }} />
      )}
    </button>
  );
}