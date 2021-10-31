// import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
// import 'assets/glide.core.css';
import Slider from '@/components/Slider';
import { FullWidthPanel } from '@/components/Layout/templates';

function Gallery(props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="assets/glide.core.css" />
        <link rel="stylesheet" href="assets/glide.theme.css" />
      </Head>
      <Slider />
      <div>
        <h1>Fotos de la Cabaña</h1>
        <h3>Interior</h3>
        <h3>Exterior</h3>
      </div>
    </>
  );
}

export default Gallery;

Gallery.getLayout = function getLayout(page) {
  return (
    <FullWidthPanel
      title='Fotos'
    >
      {page}
    </FullWidthPanel>
  )
}