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
  const [offset, setOffset] = useState(0);

  const [scroll, setScroll, stop] = useSpring((props) => ({
    immediate: false,
    config: config.slow,
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
    onRest: (props) => {
      console.log('scroll ended');
      console.log(scroll);
      props.y = 0;
    },
  }));

  useEffect(() => {
    console.log(Router);
    const headerHeight = document.querySelector('.header').clientHeight; // header hight

    if (Router.asPath === '/') {
      setScroll({ y: 0 });
    } else {
      const id = Router.asPath.split('').slice(2).join('');
      const el = document.getElementById(id);
      const pos = getPosition(el); // TODO: improve this function to get the real position including paddings and margins
      setScroll({ y: pos.y - headerHeight - 30 }); // 30 px of margin-top from the header
    }
  }, [Router, setScroll]);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);

  const handleScroll = () => {
    console.log('scrolling page');
  };

  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onScroll={handleScroll}>
        <Hero />
        {/* <Divider /> */}
        <About />
        <Services />
      </div>
    </>
  );
}
