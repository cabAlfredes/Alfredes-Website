// import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
import Image from 'next/image';
import { styled } from '@mui/system';
import Slider from '@/components/Slider';
import { FullWidthPanel } from '@/components/Layout/templates';
import { Box } from '@mui/system';

const ImageList = styled('div')({
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'red',
})

const ImageListItem = styled('div')({
  position: 'relative',
  display: 'inline-block',
  lineHeight: 0,
  height: 'auto',
  marginBottom: 10
})

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
        <ImageList>
          <Image src='/assets/images/foto_1.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_2.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_3.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_4.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_5.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_6.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_7.JPG' width='300px' height='300px' />
          <Image src='/assets/images/foto_8.JPG' width='300px' height='300px' />
        </ImageList>
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