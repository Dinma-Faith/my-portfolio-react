import styles from "../styles/contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <h3>Get in Touch</h3>
        <div className={styles.contactItems}>
          <a
            href="https://linkedin.com/in/chidinma-faith"
            target="_blank"
            rel="noreferrer"
            className={styles.contactItem}
          >
            <FaLinkedin className={styles.icon} />
            <span>LinkedIn</span>
            <p>Chidinma Anyanwu</p>
          </a>

          <a
            href="https://github.com/Dinma-Faith"
            target="_blank"
            rel="noreferrer"
            className={styles.contactItem}
          >
            <FaGithub className={styles.icon} />
            <span>GitHub</span>
            <p>Dinma-Faith</p>
          </a>

          <a
            href="mailto:phaytep@gmail.com"
            className={styles.contactItem}
          >
            <FaEnvelope className={styles.icon} />
            <span>Email</span>
            <p>phaytep@gmail.com</p>
          </a>

          <a
            href="https://wa.me/2348132114650"
            target="_blank"
            rel="noreferrer"
            className={styles.contactItem}
          >
            <FaPhone className={styles.icon} />
            <span>Phone / WhatsApp</span>
            <p>+234 813 211 4650</p>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className={styles.formContainer}>
        <h3>Send me an email</h3>
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
