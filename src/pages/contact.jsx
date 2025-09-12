import React from "react";
import styles from "../styles/contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../components/button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log("Contact form submitted:", data);
    e.target.reset();
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={`heading ${styles.heading}`}>Contact Me</h2>
        <p className={styles.sectionLabel}>Get in Touch</p>

        {/* Contact cards */}
        <div className={styles.contactGrid}>
          <a
            className={styles.card}
            href="mailto:phaytep@gmail.com"
            aria-label="Email phaytep@gmail.com">
            <div className={styles.iconWrap}>
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>Email</div>
            <div className={styles.cardMeta}>phaytep@gmail.com</div>
          </a>

          <a
            className={styles.card}
            href="https://linkedin.com/in/chidinma-faith"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile">
            <div className={styles.iconWrap}>
              <FaLinkedin className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>LinkedIn</div>
            <div className={styles.cardMeta}>Chidinma Anyanwu</div>
          </a>

          <a
            className={styles.card}
            href="https://github.com/Dinma-Faith"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile">
            <div className={styles.iconWrap}>
              <FaGithub className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>GitHub</div>
            <div className={styles.cardMeta}>Dinma-Faith</div>
          </a>

          <a
            className={styles.card}
            href="https://x.com/p_phayte"
            target="_blank"
            rel="noreferrer"
            aria-label="X profile">
            <div className={styles.iconWrap}>
              <FaXTwitter className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>X</div>
            <div className={styles.cardMeta}>@p_phayte</div>
          </a>

          <a
            className={styles.card}
            href="https://wa.me/2348132114650"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp chat">
            <div className={styles.iconWrap}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>WhatsApp</div>
            <div className={styles.cardMeta}>+234 813 211 4650</div>
          </a>
        </div>

        {/* Form */}
        <div className={styles.formSection}>
          <h3 className={styles.formHeading}>Send Me An Email</h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input name="name" type="text" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
            </div>

            <textarea name="message" placeholder="Message" rows="6" required />
          </form>

          <Button type="submit" onClick={handleSubmit}>
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
