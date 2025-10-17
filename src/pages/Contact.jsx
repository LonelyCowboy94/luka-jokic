import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <form
          className={styles.form}
          action="https://formspree.io/f/movkrywl"
          method="POST"
        >
          <p>
            If you’d like to get in touch, feel free to send me a message using
            the form below. <br />
            <span>(all fields are required!)</span>
          </p>
          
          <div className={styles.senderInfo}>
            <label className="hidden" htmlFor="name">Your Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name..."
              required
            />
            <label className="hidden" htmlFor="email">Your Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email..."
              required
            />
          </div>
          <div className={styles.message}>
            <label className="hidden" htmlFor="message">Your Message</label>
            <textarea
              rows="5"
              cols="40"
              name="message"
              id="message"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button className="btn btn-secondary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
