import './About.module.scss';
import styles from "./About.module.scss";
import profileImage from "../assets/luka-profile.jpg";

const About = () => {
  return (
     <main className={styles.main}>
      <div className={styles.header}>
        <h1>Hi, I’m <strong>Luka Jokić</strong></h1>
        <h2>Video Editor & Creative Content Creator</h2>
      </div>

      <section className={styles.bio}>
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="Luka Jokić" />
        </div>
        <div className={styles.text}>
          <p className={styles.textIndent}>
            A dedicated video editor and
            content creator based in Sremski Karlovci, at the foothills of
            Fruška Gora, Vojvodina, Serbia. With a solid background in
            professional video production, I have experience working for
            agencies, and now I focus on <strong>independently exploring
            creative opportunities</strong> and delivering personalized projects
            for clients.
          </p>
          <p className={styles.textIndent}>
            My passion lies in <strong>creative work in the modern digital
            world</strong>, crafting visually compelling stories through video
            editing. I strive to combine technical precision with artistic
            vision, ensuring that every project reflects both professionalism
            and a unique personal touch.
          </p>
          <p className={styles.textIndent}>
            I value <strong>clear communication and collaboration</strong> with
            clients, believing that true satisfaction comes when the final
            product meets — and exceeds — their expectations. While my main
            expertise is video production and editing, I also bring a practical,
            hands-on approach to problem-solving, making sure every project runs
            smoothly from concept to completion.
          </p>
        </div>
      </section>

      <section className={styles.skills}>
        <h3>Skills & Expertise</h3>
        <ul>
          <li>Cinematic video editing and montage</li>
          <li>Creative storytelling and visual design</li>
          <li>Motion graphics and post-production techniques</li>
          <li>Client communication and project management</li>
        </ul>
      </section>
    </main>
  )
}

export default About