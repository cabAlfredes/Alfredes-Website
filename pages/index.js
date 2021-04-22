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
  const [navigation, setNavigation] = useState('/');
  const [isStopped, setIsStopped] = useState(false);
  
  const scrollConfig = {
    immediate: true,
    cancel: isStopped,
    config: config.molasses,
    y: 0,
    onChange: (props) => {
      console.log(props);
      if (!isStopped) {
        window.scroll(0, props.value.y);
      }
    },
    onRest: (props) => {
      setIsStopped(false);
      window.removeEventListener('wheel', onWheel);
    },
    
  };
  const [setScroll, api] = useSpring(() => scrollConfig);

  const onWheel = () => {
    setIsStopped(true);
    api.stop();
    window.removeEventListener('wheel', onWheel);
  };

  // check this issues https://github.com/pmndrs/react-spring/issues/544

  useEffect(() => {
    setIsStopped(false);
    const headerHeight = document.querySelector('.header').clientHeight; // header hight
    window.addEventListener('wheel', onWheel);

    if (navigation === '/' || navigation === "") {
      api.start({ y: 0, reset: true, from: { y: window.pageYOffset } });
      console.log('it is falling here');
    } else {
      const el = document.getElementById(navigation);
      // TODO: improve getPosition function to get the real position including paddings and margins.
      const pos = getPosition(el);

      api.start({
        reset: false,
        from: { y: window.pageYOffset }, // offset is the position of the screen scrollY, this is to reset the scroll starting position.
        y: pos.y - headerHeight - 30, // 30 px of gap from the header
      });
    }
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [navigation]);

  useEffect(() => {
    function hashHandler() {
      console.log('The hash has changed!');
      const id = window.location.hash.split('').slice(1).join('');
      setNavigation(id);
    }

    window.addEventListener('hashchange', hashHandler, false);
    return () => window.removeEventListener('hashchange', hashHandler, false);
  });

  useEffect(() => {
    const id = Router.asPath.split('').slice(2).join('');
    setNavigation(id);
  }, [Router]);


  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Hero />
        <About />
        <Services />
      </>
    </>
  );
}
