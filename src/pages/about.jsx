import styles from "../styles/about.module.css";
// import profileImage from "../assets/profile.png"; 

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>
          I’m <strong>Chidinma Anyanwu</strong>, a web developer based in Lagos, Nigeria. I specialize in building 
          <strong> responsive and interactive web applications</strong> using <strong>HTML, CSS, Tailwind, Bootstrap, JavaScript, and React</strong>. 
          My journey began with self-driven learning and professional certification through Microverse and freeCodeCamp. 
          I’ve successfully completed projects like a React FAQ Accordion and multi-day interactive components including carousels and charts. 
          I’m passionate about turning ideas into real-world digital experiences and continuously improving my skills to deliver 
          <strong> clean, efficient, and user-friendly solutions</strong>. I aspire to work on projects that challenge me, help businesses grow, 
          and make web experiences delightful for users.
        </p>
      </div>

      {/* <div className={styles.aboutImage}>
        <img src={profileImage} alt="Chidinma Anyanwu" />
      </div> */}
    </section>
  );
};

export default About;
