/* eslint-disable @next/next/no-css-tags */
import { Box } from "@mui/material";
import { ImageListWrapper, PageBanner } from "@/components/index";
import React, { useState } from "react";
import Image from "next/image";

import { FullScreenImage } from "@/components/FullScreenImage";
import { FullWidthPanel } from "@/components/Layout/templates";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import { useStateContext } from "@/store/store";

// const Masonry = styled("div")(({ theme }) => ({
// 	columns: "6 200px",
// 	padding: theme.spacing(2),
// }));

// const Item = styled("div")(({ theme }) => ({
// 	position: "relative",
// 	marginBottom: theme.spacing(2),
// 	borderRadius: theme.shape.borderRadius,
// }));

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
        {/* <link rel="stylesheet" href="assets/glide.core.css" />
				<link rel="stylesheet" href="assets/glide.theme.css" /> */}
        <title>Alfredes - Fotos</title>
      </Head>
      <div>
        <PageBanner title="Imágenes de la cabana" />

        <Box p={2}>
          <Typography variant="h4" color="text.contrast">
            Fotos del Interior
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            // gridTemplateRows: "1fr 1fr 1fr",
            minHeight: 300,
						gridGap: 4
          }}
        >
          {images.interior.map((image, i) => (
            <Box
              key={i}
              sx={{
                // border: "1px solid red",
                // width: "100%",
                // objectFit: "contain",
                position: "relative",
                // height: "unset !important",
              }}
            >
              <Image
                // key={i}
                src={image.src}
                alt={image.alt || "Foto"}
                data-src={image.src.src}
                placeholder={"blur"}
                // onClick={onClick}
                layout="fill"
                lazyBoundary="10px"
                objectPosition={"50% 50%"}
                objectFit="cover"
                priority={false}
                title={image.src.src}
              />
            </Box>
          ))}
        </Box>

        {/* <ImageListWrapper images={images.interior} onClick={handleClick} /> */}

        <Box p={2} mt={8}>
          <Typography variant="h4" color="text.contrast">
            Fotos del Exterior
          </Typography>
        </Box>
        <ImageListWrapper images={images.exterior} onClick={handleClick} />
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
