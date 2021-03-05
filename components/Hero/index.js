import styles from './hero.module.css';

function Hero() {
  const handlePause = () => {
    document.getElementById('video');
  };
  return (
    <div className={styles.videoWrapper}>
      {/* <!-- The video --> */}
      {/* <div className={styles.videoTopFrame} /> */}

      <video autoPlay muted loop id="video" className={styles.video}>
        <source src="/cab-video_Trim2.mp4" type="video/mp4" />
      </video>
      <div className={styles.controls}>
        <button type="button" onClick={handlePause}>
          pause
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
