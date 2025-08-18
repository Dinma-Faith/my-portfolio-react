import React from 'react';
import { useTheme } from '../context/theme-context.jsx';
import styles from '../styles/Switcher.module.css';

const colors = [
  { name: 'color-1', hex: '#fa5b0f' },
  { name: 'color-2', hex: '#0cada5' },
  { name: 'color-3', hex: '#37b182' },
  { name: 'color-4', hex: '#ada20c' },
  { name: 'color-5', hex: '#ec1839' },
];

const Switcher = () => {
  const { dark, setDark, accent, setAccent } = useTheme();
  return (
    <div className={`${styles.switcher} style-switcher`}>
      <button className="style-switcher-toggler">
        <i className="fas fa-cog"></i>
      </button>
      <div className={styles.themeToggles}>
        <button onClick={() => setDark(!dark)} className={styles.dayNight} aria-label="Toggle dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
        <div className={styles.colors}>
          {colors.map(c => (
            <button key={c.name} onClick={() => setAccent(c.hex)} className={styles.colorDot} title={c.name} style={{ background: c.hex }} aria-label={c.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Switcher;
