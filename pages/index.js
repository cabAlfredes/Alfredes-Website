import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { useSpring, config, animated } from 'react-spring';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
// import { getPosition } from '@/utils/getPosition';
// import Layout from '@/components/Layout';
import { CenterPanel, FullWidthPanel } from '@/components/Layout/templates';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const Router = useRouter();
  const [navigation, setNavigation] = useState('/');
  const [isStopped, setIsStopped] = useState(false);
  const theme = useTheme()

  console.log(useTheme);

  return (
    <div>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Hero />
        <About />
        <Services />
      </>
    </div>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <FullWidthPanel
      title='title test'
    >
      {page}
    </FullWidthPanel>
  )
}

export default Home
