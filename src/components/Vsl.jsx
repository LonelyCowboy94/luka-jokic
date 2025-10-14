import styles from './Vsl.module.scss'

const Vsl = () => {
  return (
    <div className={styles.vslContainer}>
        <h2>Find out how I bring your ideas to life...</h2>
        <iframe
          src="https://www.youtube.com/embed/SQ_NaJSwH4A?si=UKw0SSPPjzNqzSRk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
    </div>
  )
}

export default Vsl