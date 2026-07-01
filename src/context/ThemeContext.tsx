import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'BLUE' | 'PURPLE' | 'EMERALD';
export type ModeType = 'light' | 'dark' | 'midnight' | 'system';

interface ThemeContextProps {
  theme: ThemeType;
  mode: ModeType;
  setTheme: (theme: ThemeType) => void;
  setMode: (mode: ModeType) => void;
  resolvedMode: 'light' | 'dark'; // actually resolved light/dark based on system if 'system'
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const themeConfigs = {
  BLUE: {
    name: 'Tech Blue',
    primary: '#2563EB',
    secondary: '#3B82F6',
    accent: '#60A5FA',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #2563EB 100%)',
    bgLight: '#F1F5F9', // Premium Slate Gray scale
    bgDark: '#090D1A',
    bgMidnight: '#02040A', // Ultra-deep pitch black night scale
    cardLight: '#FFFFFF',
    cardDark: '#12182E',
    cardMidnight: '#060B18',
    glowColor: 'rgba(37, 99, 235, 0.15)',
    glowColorAccent: 'rgba(96, 165, 250, 0.3)',
    textLight: '#0F172A',
    textDark: '#F8FAFC',
    borderLight: 'rgba(37, 99, 235, 0.08)',
    borderDark: 'rgba(96, 165, 250, 0.12)',
  },
  PURPLE: {
    name: 'AI Purple',
    primary: '#7C3AED',
    secondary: '#8B5CF6',
    accent: '#A855F7',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #312E81 45%, #7C3AED 75%, #A855F7 100%)',
    bgLight: '#F3F4F6', // Ultra-modern Cool Gray scale
    bgDark: '#0A071B',
    bgMidnight: '#030208', // Ultra-deep pitch black night scale
    cardLight: '#FFFFFF',
    cardDark: '#130E2B',
    cardMidnight: '#0A0616',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    glowColorAccent: 'rgba(168, 85, 247, 0.3)',
    textLight: '#111827',
    textDark: '#FCFCFF',
    borderLight: 'rgba(124, 58, 237, 0.08)',
    borderDark: 'rgba(168, 85, 247, 0.12)',
  },
  EMERALD: {
    name: 'Cyber Emerald',
    primary: '#059669',
    secondary: '#10B981',
    accent: '#34D399',
    gradient: 'linear-gradient(135deg, #021B1A 0%, #065F46 45%, #10B981 75%, #34D399 100%)',
    bgLight: '#F4F4F5', // High-tech matte Neutral Gray scale
    bgDark: '#020C0A',
    bgMidnight: '#010403', // Ultra-deep pitch black night scale
    cardLight: '#FFFFFF',
    cardDark: '#061F1A',
    cardMidnight: '#020A08',
    glowColor: 'rgba(5, 150, 105, 0.15)',
    glowColorAccent: 'rgba(52, 211, 153, 0.3)',
    textLight: '#111827',
    textDark: '#F0FDF4',
    borderLight: 'rgba(5, 150, 105, 0.08)',
    borderDark: 'rgba(52, 211, 153, 0.12)',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('app-theme-choice');
    return (saved as ThemeType) || 'BLUE';
  });

  const [mode, setModeState] = useState<ModeType>(() => {
    const saved = localStorage.getItem('app-mode-choice');
    return (saved as ModeType) || 'dark'; // Default to dark for high-tech premium feel
  });

  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>('dark');

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    localStorage.setItem('app-theme-choice', t);
  };

  const setMode = (m: ModeType) => {
    setModeState(m);
    localStorage.setItem('app-mode-choice', m);
  };

  useEffect(() => {
    // Determine light vs dark
    let activeMode: 'light' | 'dark' = 'dark';
    if (mode === 'system') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      activeMode = isSystemDark ? 'dark' : 'light';
    } else if (mode === 'light') {
      activeMode = 'light';
    } else {
      activeMode = 'dark'; // both dark and midnight count as dark modes for layout systems
    }
    setResolvedMode(activeMode);

    // Update document element class list
    const root = document.documentElement;
    if (activeMode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Set Theme variables on document root
    const config = themeConfigs[theme];
    const bgDarkResolved = mode === 'midnight' ? config.bgMidnight : config.bgDark;
    const cardDarkResolved = mode === 'midnight' ? config.cardMidnight : config.cardDark;

    root.style.setProperty('--primary', config.primary);
    root.style.setProperty('--secondary', config.secondary);
    root.style.setProperty('--accent', config.accent);
    root.style.setProperty('--bg-light', config.bgLight);
    root.style.setProperty('--bg-dark', bgDarkResolved);
    root.style.setProperty('--card-light', config.cardLight);
    root.style.setProperty('--card-dark', cardDarkResolved);
    root.style.setProperty('--glow-color', config.glowColor);
    root.style.setProperty('--glow-color-accent', config.glowColorAccent);
    root.style.setProperty('--text-light', config.textLight);
    root.style.setProperty('--text-dark', config.textDark);
    root.style.setProperty('--border-light', config.borderLight);
    root.style.setProperty('--border-dark', config.borderDark);
    root.style.setProperty('--theme-gradient', config.gradient);

    // Handle System Mode Listener
    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemChange = (e: MediaQueryListEvent) => {
        const currentMode = e.matches ? 'dark' : 'light';
        setResolvedMode(currentMode);
        if (currentMode === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else {
          root.classList.add('light');
          root.classList.remove('dark');
        }
      };
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }
  }, [theme, mode]);

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
