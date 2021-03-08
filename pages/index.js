/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
// import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Divider />
      </div>
    </>
  );
}
