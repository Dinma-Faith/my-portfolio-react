import styles from "../styles/home.module.css";
// import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.heroText}>
        <h1>
          Hi, I’m <span className={styles.highlight}>Chidinma Anyanwu</span>
        </h1>
        <p>
          I build interactive and responsive web experiences using{" "}
          <span className={styles.highlight}>
            React, HTML, CSS, and modern web technologies.
          </span>
        </p>

        <div className={styles.social}>
          <a
            href="https://linkedin.com/in/chidinma-faith"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/Dinma-Faith"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://x.com/your-handle"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className={styles.icon} />
          </a>
        </div>

        <div className={styles.cta}>
          <Link to="/portfolio" className={styles.primaryBtn}>
            Download Resume
          </Link>
        </div>
      </div>

      {/* <div className={styles.heroImage}>
        <img src={heroImage} alt="Chidinma Anyanwu" />
      </div> */}
    </section>
  );
};

export default Home;
