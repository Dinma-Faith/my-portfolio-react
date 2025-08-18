import styles from "../styles/home.module.css";
// import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.heroText}>
        <h1>Hi, I’m <span>Chidinma Anyanwu</span></h1>
        <p>
          I build interactive and responsive web experiences using
          <span> React, HTML, CSS, and modern web technologies.</span>
        </p>
        <div className={styles.cta}>
          <a href="/portfolio" className={styles.primaryBtn}>View Portfolio</a>
          <a href="/contact" className={styles.secondaryBtn}>Contact Me</a>
        </div>
      </div>

      {/* <div className={styles.heroImage}>
        <img src={heroImage} alt="Chidinma Anyanwu" />
      </div> */}
    </section>
  );
};

export default Home;
