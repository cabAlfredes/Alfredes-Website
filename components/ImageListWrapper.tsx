import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Asset } from "@/config/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  images: Asset[];
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
}

export const ImageListWrapper = ({ images, onClick }: Props) => {
  const [cols, setCols] = useState(3);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    isMobile ? setCols(1) : isTablet ? setCols(2) : setCols(4);
  }, [isMobile, isTablet]);
	

  return (
    <ImageList
      sx={{
        // maxWidth: ,
        height: "100%",
        margin: "auto",
      }}
      variant="quilted"
      cols={cols}
      // gap={4}
      rowHeight={150}
    >      
      {images.map((image, index) => {
        return (
          <ImageListItem
            key={index}
            cols={image.layoutCols ?? 1}
            rows={image.layoutRows ?? 1}
          >
            <Image
              src={image.src}
              alt={image.alt || "Foto"}
              data-src={image.src.src}
              placeholder={"blur"}
              onClick={onClick}
              layout="fill"
              lazyBoundary="10px"
              objectPosition={"50% 50%"}
              objectFit="cover"
              priority={false}
              title={image.src.src}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
