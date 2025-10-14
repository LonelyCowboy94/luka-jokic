import { useEffect } from "react";
import styles from "./Home.module.scss";
import { Link } from "react-scroll";
import ShowreelSection from "../components/ShowreelSection";
import About from "./About";

const Home = ({ animate, setAnimate }) => {
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animate, setAnimate]);

  return (
    <main className={`${styles.main} ${animate ? styles.animate : ""}`}>
      <section className={styles.heroSection}>
        <Link to="vsl" duration={1200} smooth="easeInOutQuart">
          <p>Video & Motion Designer</p>
          <h1>
            JOKIĆ <br /> LUKA
          </h1>
          <p>
            Creating cinematic experiences <br />{" "}
            <span>one frame at a time</span>
          </p>
        </Link>
      </section>
      <section id="vsl" className={styles.vslSection}>
        <h2>Find out how I bring your ideas to life...</h2>
        <iframe
          src="https://www.youtube.com/embed/SQ_NaJSwH4A?si=UKw0SSPPjzNqzSRk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section id="about" className={styles.aboutSection}>
        <About />
      </section>
      <section id="showreel" className={styles.exploreSection}>
        <ShowreelSection />
      </section>
    </main>
  );
};

export default Home;
