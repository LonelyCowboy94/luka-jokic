import { useEffect } from "react";
import "./Home.scss";

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
    <section className="hero-section">
      <main className={animate ? "animate" : ""}>
        <p>Video & Motion Designer</p>
        <h1>
          JOKIĆ <br /> LUKA
        </h1>
        <p>Creating cinematic experiences <br /> one frame at a time</p>
      </main>
    </section>
  );
};

export default Home;
