// import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
// import 'assets/glide.core.css';
import Slider from '@/components/Slider';

function gallery(props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="assets/glide.core.css" />
        <link rel="stylesheet" href="assets/glide.theme.css" />
      </Head>
      <Slider />
    </>
  );
}

export default gallery;
