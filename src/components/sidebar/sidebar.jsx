import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <NavLink to="/home">Dinma Anyanwu</NavLink>
      </div>

      <nav className={styles.navLinks}>
        <NavLink
          to="/home"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Contact
        </NavLink>
      </nav>

      <div className={styles.social}>
        <a href="https://linkedin.com/in/chidinma-faith" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Dinma-Faith" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </aside>
  );
};

export default Sidebar;
