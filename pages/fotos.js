
import Head from 'next/head';
import { useStateContext } from '@/store/store';
import Image from 'next/image';
import { styled } from '@mui/system';
import Slider from '@/components/Slider';
import { FullWidthPanel } from '@/components/Layout/templates';
import { Box } from '@mui/system';
//import context

const ImageList = styled('div')({
  columnCount: 3,
  columnGap: 10,
  display: 'block',
  listStyleType: 'none',
  overflowY: 'auto',
  padding: 0,
  margin: 0,
  border: '1px solid red',
})

const ImageListItem = styled('div')({
  position: 'relative',
  // display: 'inline-block',
  lineHeight: 0,
  height: 'auto',
  marginBottom: 10
})


function Gallery(props) {
  const { images } = useStateContext();
  console.log('images >>;)>>', images);
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
        <ImageList>
          {images.interior.map((image, index) => (
            <ImageListItem key={index}>
              <Box
                sx={{
                  display: 'inline-flex',
                  paddingTop: `${100 / (image.width / image.height)}%`,
                }}
              >
                <Box sx={{ position: 'absolute', inset: 0, margin: 0 }} as={'figure'}>
                  <Image
                    src={image.src}
                    alt={image.alt || "Foto"}
                    // blurDataURL={image.blurDataURL}
                    // placeholder={'blur'}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
        <h3>Exterior</h3>
        <ImageList>
          {images.exterior.map((image, index) => (
            <ImageListItem key={index}>
              <Box
                sx={{
                  display: 'inline-flex',
                  pt: `${100 / (image.width / image.height)}%`
                }}
              >
                <Box sx={{ position: 'absolute', inset: 0, m: 0 }} as={'figure'}>
                  <Image
                    src={image.src}
                    alt={image.alt || "Foto"}
                    // blurDataURL={image.blurDataURL}
                    placeholder={'blur'}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </Box>
              </Box>
            </ImageListItem>
          ))}
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