import { useEffect } from "react";
import styles from "./Home.module.scss";
import { Link } from "react-scroll";
import ShowreelSection from "../components/ShowreelSection";
import About from "./About";
import Vsl from "../components/Vsl";
import BottomSection from "../components/BottomSection";

const Home = ({ animate, setAnimate }) => {
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animate, setAnimate]);

  return (
    <main className={`${styles.main} ${animate ? styles.animate : ""}`}>
      <section className={styles.heroSection}>
        <Link to="vsl" duration={1200} smooth="easeInOutQuart" offset={-180}>
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
      <section id="about" className={styles.aboutSection}>
        <About />
      </section>
      <section id="vsl" className={styles.vslSection}>
        <Vsl />
      </section>
      
      <section id="showreel" className={styles.exploreSection}>
        <ShowreelSection />
        
      </section>
      <section className={styles.bottomSection}>
        <BottomSection />
      </section>
    </main>
  );
};

export default Home;
