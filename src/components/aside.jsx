import React from 'react';
import styles from '../styles/Aside.module.css';

const Aside = () => {
  return (
    <aside className={`${styles.aside} aside`}>
      <div className="logo"><a href="#home">MyPortfolio</a></div>
      <nav className="nav">
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Skills</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
