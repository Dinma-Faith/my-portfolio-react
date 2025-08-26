import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.activeLine1 : ""}></span>
        <span className={isOpen ? styles.activeLine2 : ""}></span>
        <span className={isOpen ? styles.activeLine3 : ""}></span>
      </div>

      {/* Sidebar / Overlay */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <NavLink to="/home" onClick={toggleMenu}>
            My Portfolio
          </NavLink>
        </div>

        <nav className={styles.navLinks}>
          <NavLink
            to="/home"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaHome className={styles.icon} /> Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaUserAlt className={styles.icon} /> About
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaBriefcase className={styles.icon} /> Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaEnvelope className={styles.icon} /> Contact
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
