import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:phaytep@gmail.com">phaytep@gmail.com</a></p>
          <p>Phone: <a href="tel:+2348132114650">+234 813 211 4650</a></p>
          <div className={styles.social}>
            <a href="https://linkedin.com/in/chidinma-faith" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Dinma-Faith" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
