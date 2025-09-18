import styles from "../styles/home.module.css";
import codingHero from "../assets/images/coding_hero.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "../components/button";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img
            src={codingHero}
            alt="Coding illustration"
            className="responsiveImage"
          />
        </div>

        {/* Hero Text */}
        <div className={styles.heroText}>
          <h1>
            Hello, my name is <span>Chidinma Anyanwu</span>
          </h1>
          <h2>
            I'm a <span>Web Developer</span>
          </h2>
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
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chidinma-faith/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </div>

          <Button href="/resume.pdf" download>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
