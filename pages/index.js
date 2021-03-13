/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSpring, config, animated } from 'react-spring';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import { getPosition } from '@/utils/getPosition';

export default function Home() {
  const Router = useRouter();
  const [isStopped, setIsStopped] = useState(false);
  const [offset, setOffset] = useState(false);
  let stopScroll = false;

  const onWheel = () => {
    console.log('wheel spinning');
    setIsStopped(true);
    stopScroll = true;
    window.removeEventListener('wheel', onWheel);
  };

  const [, setScroll, stop] = useSpring(() => ({
    immediate: false,
    config: config.gentle,
    y: 0,
    onFrame: (props) => {
      console.log(props.y);
      if (!stopScroll) {
        window.scroll(0, props.y);
      }
    },
    onRest: (props) => {
      console.log('scroll ended');
      console.log(props);
      setIsStopped(false);
      stopScroll = false;
      // window.removeEventListener('wheel', onWheel);
    },
    // loop: { reverse: true },
  }));

  // check this issues https://github.com/pmndrs/react-spring/issues/544

  useEffect(() => {
    const headerHeight = document.querySelector('.header').clientHeight; // header hight
    window.addEventListener('wheel', onWheel);
    if (Router.asPath === '/') {
      setScroll({ y: 0, reset: true, from: { y: offset } });
    } else {
      const id = Router.asPath.split('').slice(2).join('');
      const el = document.getElementById(id);
      const pos = getPosition(el); // TODO: improve this function to get the real position including paddings and margins

      stopScroll = false;
      setScroll({
        reset: true,
        from: { y: offset }, // offset is the position of the screen scrollY, this is to reset the scroll starting position.
        y: pos.y - headerHeight - 30, // 30 px of gap from the header
      });
    }
    // return () => {
    //   window.removeEventListener('wheel', onWheel);
    // };
  }, [Router]);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <animated.div>
        <Hero />
        <About />
        <Services />
      </animated.div>
    </>
  );
}
