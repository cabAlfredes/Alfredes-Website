/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSpring, config } from 'react-spring';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import { getPosition } from '@/utils/getPosition';

export default function Home() {
  const Router = useRouter();
  const [isStopped, setIsStopped] = useState(false);

  const [, setScroll, stop] = useSpring(() => ({
    immediate: false,
    config: config.molasses,
    y: 0,
    onFrame: (props) => {
      if (!isStopped) {
        console.log(props);
        window.scroll(0, props.y);
      }
    },
    onRest: (props) => {
      console.log('scroll ended');
      setIsStopped(false);
      // window.removeEventListener('wheel', onWheel);
    },
  }));

  // check this issues https://github.com/pmndrs/react-spring/issues/544

  const onWheel = () => {
    console.log('wheel spining');
    stop();
    setIsStopped(true);
    window.removeEventListener('wheel', onWheel);
  };

  useEffect(() => {
    const headerHeight = document.querySelector('.header').clientHeight; // header hight
    window.addEventListener('wheel', onWheel);

    if (Router.asPath === '/') {
      setScroll({ y: 0, reset: true, from: { y: window.scrollY } });
    } else {
      const id = Router.asPath.split('').slice(2).join('');
      const el = document.getElementById(id);
      const pos = getPosition(el); // TODO: improve this function to get the real position including paddings and margins

      setScroll({
        reset: false,
        from: { y: window.scrollY },
        y: pos.y - headerHeight - 30, // 30 px of margin-top from the header
      });
    }

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [Router]);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset);
  //   };
  // }, []);

  // console.log(offset);

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
