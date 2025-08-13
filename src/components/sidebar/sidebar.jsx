import React from "react";
// import styles from "../styles/sidebar.module.css";
// import ThemeControl from "./ThemeControl";
import styles from "../sidebar/sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Dinma</div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Theme control lives inside the sidebar/nav */}
      {/* <div className={styles.themeWrapper}>
        <ThemeControl />
      </div> */}
    </aside>
  );
};

export default Sidebar;
