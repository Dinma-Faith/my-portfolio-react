import styles from "../styles/home.module.css";
// import heroImage from "../assets/hero.png";
import heroImage from "../assets/hero.png";
// import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Hero placeholder" />
        </div>
        {/* Hero Text */}
        <div className={styles.heroText}>
          <h1>
            Hello, my name is <span>Chidinma Anyanwu</span>
          </h1>
          <h2>I'm a Frontend Developer</h2>
          <p>
            Creative Frontend Web Developer focused on building responsive,
            accessible, and visually appealing user interfaces. Skilled in HTML,
            CSS, JavaScript, React, and modern frontend tools. Passionate about
            turning ideas into interactive experiences while continuously
            improving through learning and collaboration.
          </p>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Dinma-Faith"
              target="_blank"
              rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chidinma-faith/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </div>

          {/* Buttons */}
          <div className={styles.buttons}>
            <a href="/resume.pdf" download className={styles.btnPrimary}>
              Download Resume
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
