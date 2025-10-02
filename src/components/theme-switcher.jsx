import { useEffect, useState } from "react";
import { FaCog, FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/theme-switcher.module.css";

const colors = ["#ff6584","#490249ff", "#00bcd4", "#e91e63", "#09610cff"];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [colorIndex, setColorIndex] = useState(() => {
    const saved = localStorage.getItem("active-color-index");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--active-color", colors[colorIndex]);
    localStorage.setItem("theme", theme);
    localStorage.setItem("active-color-index", colorIndex.toString());
  }, [theme, colorIndex]);

  return (
    <div className={styles.wrapper}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`${styles.btn} ${styles.modeBtn}`}
      >
        {theme === "light" ? <FaMoon size={18} /> : <FiSun size={18} />}
      </button>

      {/* Settings Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className={`${styles.btn} ${styles.settingsBtn}`}
      >
        <FaCog size={18} />
      </motion.button>


      {/* Color Palette */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.palette}
          >
            {colors.map((color, idx) => (
              <button
                key={color}
                onClick={() => setColorIndex(idx)}
                className={`${styles.colorCircle} ${
                  idx === colorIndex ? styles.active : ""
                }`}
                style={{ background: color }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
