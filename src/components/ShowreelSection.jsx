import { useState } from "react";
import thumbnails from "../assets/Thumbnails/thumbnails";
import styles from "./ShowreelSection.module.scss";

const ShowreelSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);


  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/tJ8rdpMptzM?mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail1
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/uYjgWPEg1xo?si=K1P8103-qtWYFHtu&mute=1&autoplay=1",
      thumbnail:  thumbnails.thumbnail2
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/YWX8183GLmI?si=3mNT34CfTFLz8TSl&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail3
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/3_88HnCXEv4?si=0jvsLJZFgQyw1rsq&mute=1&autoplay=1",
      thumbnail:  thumbnails.thumbnail4
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/3PMNcQKZ5Go?si=cPXqQ7QIqUU5Qggf&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail5
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/w0OaLTVHNko?si=swL5scikX41V6cFB&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail6
    },
  ];

  return (
    <div className={styles.showreelSection}>
      <h2>My latest work...</h2>
    <div className={styles.showreelContent}>
      {videos.map((video, index) => (
        <div className={styles.showreelItem} key={video.id}>
          {activeVideo === index ? (
            <iframe
              className={styles.showreelVideo}
              src={video.src}
              title={`Video ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onMouseLeave={() => setActiveVideo(null)}
            ></iframe>
          ) : (
            <img
              className={styles.showreelThumbnail}
              src={video.thumbnail}
              alt={`Thumbnail ${video.id}`}
              onMouseEnter={() => setActiveVideo(index)}
            />
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShowreelSection;
