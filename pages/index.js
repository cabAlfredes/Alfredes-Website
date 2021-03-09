/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSpring, config } from 'react-spring';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Divider from '@/components/Divider';
import { getPosition } from '@/utils/getPosition';
import { useEffect } from 'react';
// import styles from '@/styles/Home.module.css';

export default function Home() {
  const [scroll, setScroll] = useSpring(() => ({
    immediate: false,
    config: config.slow,
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  const router = useRouter();

  useEffect(() => {
    // getDistanceToElementId()
    if (router.asPath === '/') {
      setScroll({ y: 0 });
    } else {
      const id = router.asPath.split('').slice(2).join('');
      console.log('scrolling to id:', id);
      const el = document.getElementById(id);
      const pos = getPosition(el);
      console.log(pos);

      setScroll({ y: pos.y });
    }
    console.log(scroll);
  }, [router]);

  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <Divider /> */}
        <About />
        <Services />
      </div>
    </>
  );
}
