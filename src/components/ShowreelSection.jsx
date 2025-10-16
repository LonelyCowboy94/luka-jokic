import { useState } from "react";
import thumbnails from "../assets/Thumbnails/thumbnails";
import styles from "./ShowreelSection.module.scss";

const ShowreelSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);


  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/GtZfGV_kCFo?si=eSL2zZkxoo3w_Ab-&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail1
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/kmudRbtJvTk?si=2KPoueJ8S2xe7477&mute=1&autoplay=1",
      thumbnail:  thumbnails.thumbnail2
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/22lclfSCPmM?si=9KaRSZFFsPmw82D3&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail3
    },
    {
      id: 4,
      src: "https://youtube.com/embed/lpljwYbpf8M?si=anz3Us1IhFLVH-ld&mute=1&autoplay=1",
      thumbnail:  thumbnails.thumbnail4
    },
    {
      id: 5,
      src: "https://youtube.com/embed/23Wc1vg62ew?si=bK0DyZcGI_oJ_Dtt&mute=1&autoplay=1",
      thumbnail: thumbnails.thumbnail5
    },
    {
      id: 6,
      src: "https://youtube.com/embed/czIuSb0CMeI?si=urL6pWPj_VASDSE8&mute=1&autoplay=1",
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
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
