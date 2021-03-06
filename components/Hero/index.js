import { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './hero.module.css';

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById('video');
    // eslint-disable-next-line no-unused-expressions
    isPlaying ? video.play() : video.pause();
    console.log(video.currentTime);
  }, [isPlaying]);

  const handlePause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={styles.videoWrapper}>
      {/* <!-- The video --> */}
      {/* <div className={styles.videoTopFrame} /> */}

      <video autoPlay muted loop id="video" className={styles.video}>
        <source src="/cab-video_Trim2.mp4" type="video/mp4" />
      </video>
      <div className={styles.controls}>
        <button
          className={styles.pausePlayButton}
          type="button"
          onClick={handlePause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div className={styles.videoBottomFrame}>
        <div className={styles.text}>
          donde el silencio solo es interrumpido por el cantar de los pájaros
        </div>
      </div>

      <div className={styles.content}>
        {/* // <Logo className={styles.logo} color="red" /> */}
      </div>
    </div>
  );
}

export default Hero;
