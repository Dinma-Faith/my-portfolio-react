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
          <p className="text-[1rem] leading-6 text-gray-600 mt-4">
            A passionate full-stack developer with a strong focus on
            building user-friendly and visually appealing front-end
            applications. I enjoy turning ideas into responsive, functional, and
            accessible web experiences while continuously improving my skills
            and exploring modern technologies.
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

          <Button href="/resume.pdf" download>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
