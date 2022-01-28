import React, { useState } from "react";
import Head from "next/head";
import { useStateContext } from "@/store/store";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { FullWidthPanel } from "@/components/Layout/templates";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FullScreenImage } from "@/components/FullScreenImage";
import { Paper } from "@mui/material";

const Masonry = styled("div")(({ theme }) => ({
  columns: "6 200px",
  padding: theme.spacing(2),
}));

const Item = styled("div")(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

export interface ImageData {
  src: string;
}

function Gallery() {
  const { images } = useStateContext();
  const [imageSelected, setImageSelected] = useState<ImageData>(null);

  const handleClick = (e: React.SyntheticEvent<EventTarget>): void => {
    // If event target not an HTMLButtonElement, exit
    if (!(e.target instanceof HTMLImageElement)) {
      return;
    }
    e.preventDefault();
    const data = e.target.dataset.src;
    setImageSelected({
      src: data,
    });
    return;
  };

  const handleClose = (): void => {
    setImageSelected(null);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="assets/glide.core.css" />
        <link rel="stylesheet" href="assets/glide.theme.css" />
        <title>Fotos</title>
      </Head>
      <div>
        <PageBanner title="Imágenes de la cabana" />
        <Paper
          elevation={4}
          sx={{
            margin: 2,
          }}
        >
          <Box p={2}>
            <Typography variant="h5" color="textPrimary">
              Interior
            </Typography>
          </Box>
          <Box>
            <Masonry>
              {images.interior.map((image, index) => {
                return (
                  <Item key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt || "Foto"}
                      data-src={image.src.src}
                      placeholder={"blur"}
                      width={image.width}
                      height={image.height}
                      onClick={handleClick}
                      objectFit={"cover"}
                    />
                  </Item>
                );
              })}
            </Masonry>
          </Box>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            margin: 2,
          }}
        >
          <Box p={2}>
            <Typography variant="h5" color="textPrimary">
              Exterior
            </Typography>
          </Box>
          <Box>
            <Masonry>
              {images.exterior.map((image, index) => {
                return (
                  <Item key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt || "Foto"}
                      data-src={image.src.src}
                      placeholder={"blur"}
                      width={image.width}
                      height={image.height}
                      onClick={handleClick}
                      objectFit={"cover"}
                    />
                  </Item>
                );
              })}
            </Masonry>
          </Box>
        </Paper>
      </div>
      {imageSelected && (
        <FullScreenImage
          imageSrc={imageSelected}
          open={!!imageSelected}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default Gallery;

Gallery.getLayout = function getLayout(page) {
  return <FullWidthPanel>{page}</FullWidthPanel>;
};
