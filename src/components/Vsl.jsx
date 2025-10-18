import styles from './Vsl.module.scss'

const Vsl = () => {
  return (
    <div className={styles.vslContainer}>
        <h2>Find out how I bring your ideas to life...</h2>
        <iframe
          src="https://www.youtube.com/embed/22lclfSCPmM?si=1KnkzXVWwDoxDlvH&mute=1&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
    </div>
  )
}

export default Vsl