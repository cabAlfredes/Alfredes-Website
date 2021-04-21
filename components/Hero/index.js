/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './hero.module.scss';

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  useEffect(() => {
    const video = document.getElementById('video');
    // eslint-disable-next-line no-unused-expressions

    const playPromise = video.play();
    // this is to prevent the uncaught error on chrome dev tools that is fired because the video element is not loaded yet
    // Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
    // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
          isPlaying ? video.play() : video.pause();
          setIsVideoReady(true);
        })
        .catch((error) => {
          // Auto-play was prevented
          setIsVideoReady(false);
        });
    }
  }, [isPlaying]);

  useEffect(() => {
    console.log('Hero mounted');
  }, []);

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
          {(isPlaying && isVideoReady) || isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div className={styles.videoBottomFrame}>
        <div className={styles.text}>
          donde el silencio solo es interrumpido por el cantar de los pájaros
        </div>
      </div>
    </div>
  );
}

export default Hero;
