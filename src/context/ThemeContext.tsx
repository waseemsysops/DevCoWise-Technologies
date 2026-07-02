import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'BLUE';
export type ModeType = 'dark';

interface ThemeContextProps {
  theme: ThemeType;
  mode: ModeType;
  setTheme: (theme: ThemeType) => void;
  setMode: (mode: ModeType) => void;
  resolvedMode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const themeConfigs = {
  BLUE: {
    name: 'DevCoWise 3D Enterprise',
    primary: '#38BDF8', // Sky Blue
    secondary: '#60A5FA', // Light Blue
    accent: '#1E40AF', // Dark Blue
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #0B122C 40%, #1E3A8A 75%, #38BDF8 100%)',
    bgLight: '#080D24', // Light navy blue color dark shade
    bgDark: '#080D24', // Light navy blue color dark shade
    bgMidnight: '#080D24',
    cardLight: '#FFFFFF', // Clean White cards
    cardDark: '#0F172A', // Deep light navy blue cards for stunning contrast
    cardMidnight: '#0F172A',
    glowColor: 'rgba(56, 189, 248, 0.18)', // Sky Blue glow
    glowColorAccent: 'rgba(96, 165, 250, 0.3)', // Light Blue glow
    textLight: '#0F172A',
    textDark: '#F8FAFC',
    borderLight: 'rgba(56, 189, 248, 0.15)',
    borderDark: 'rgba(56, 189, 248, 0.25)', // Premium sky-blue border highlight
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = 'BLUE';
  const mode = 'dark';
  const resolvedMode = 'dark';

  const setTheme = () => {};
  const setMode = () => {};

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');

    const config = themeConfigs[theme];

    root.style.setProperty('--primary', config.primary);
    root.style.setProperty('--secondary', config.secondary);
    root.style.setProperty('--accent', config.accent);
    root.style.setProperty('--bg-light', config.bgLight);
    root.style.setProperty('--bg-dark', config.bgDark);
    root.style.setProperty('--card-light', config.cardLight);
    root.style.setProperty('--card-dark', config.cardDark);
    root.style.setProperty('--glow-color', config.glowColor);
    root.style.setProperty('--glow-color-accent', config.glowColorAccent);
    root.style.setProperty('--text-light', config.textLight);
    root.style.setProperty('--text-dark', config.textDark);
    root.style.setProperty('--border-light', config.borderLight);
    root.style.setProperty('--border-dark', config.borderDark);
    root.style.setProperty('--theme-gradient', config.gradient);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, resolvedMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
