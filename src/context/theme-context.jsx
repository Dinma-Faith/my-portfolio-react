import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || '#fa5b0f'); // default color-1

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.documentElement.style.setProperty('--skin-color', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  const value = useMemo(() => ({ dark, setDark, accent, setAccent }), [dark, accent]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
