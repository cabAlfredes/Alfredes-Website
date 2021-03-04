/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Logo from '@/components/Logo';

export default function Home() {
  const handlePause = () => {
    document.getElementById('video');
  };

  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.videoWrapper}>
        {/* <!-- The video --> */}
        <video autoPlay muted loop id="video" className={styles.video}>
          <source src="/cab-video_Trim.mp4" type="video/mp4" />
        </video>
        <div className={styles.controls}>
          <button type="button" onClick={handlePause}>
            pause
          </button>
        </div>

        <div className={styles.content}>
          <Logo className={styles.logo} color="red" />
        </div>
      </div>
    </>
  );
}
