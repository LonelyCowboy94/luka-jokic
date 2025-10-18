import styles from "./Contact.module.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h1>Get in touch now</h1>
      <div className={styles.container}>
        <div className={styles.contactPage}>
          <div className={styles.email}>
            <a href="mailto:lukajokic413@gmail.com">
              <MdEmail className={styles.icon} />
            </a>
            <div>
              <p>Email</p>
              <p>lukajokic413@gmail.com</p>
            </div>
          </div>
          <div className={styles.phone}>
            <a href="tel:+381612214049">
              <MdPhone className={styles.icon} />
            </a>
            <div>
              <p>Phone</p>
              <p>(+381) 61 221 40 49</p>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/luka.jokic.71" target="_blank">
              <FaFacebook className={styles.icon} />
            </a>
            <FaInstagram className={styles.icon} />
            <a href="https://www.youtube.com/@liternix" target="_blank">
              <FaYoutube className={styles.icon} />
            </a>
          </div>
        </div>
        <form
          className={styles.form}
          action="https://formspree.io/f/movkrywl"
          method="POST"
        >
          <p>Send Message</p>

          <label className="hidden" htmlFor="name">
            Your Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <label className="hidden" htmlFor="email">
            Your Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your Email..."
            required
          />

          <label className="hidden" htmlFor="message">
            Your Message
          </label>
          <textarea
            rows="2"
            cols="40"
            name="message"
            id="message"
            placeholder="Your message here..."
            required
          ></textarea>

          <button className={styles.submitBtn} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
