import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Backdrop } from "@mui/material";
import { ImageData } from "../pages/fotos";

const FullScreenWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  height: "100%",
  zIndex: theme.zIndex.modal,
}));

interface props {
  imageSrc: ImageData;
  open: boolean;
  handleClose: () => void;
}

export const FullScreenImage = ({ imageSrc, open, handleClose }: props) => {
  const { src } = imageSrc;
  return (
    <Backdrop component="div" open={open} onClick={handleClose}>
      <FullScreenWrapper>
        <Image src={src} layout="fill" objectFit="contain" alt="imagen de la cabaña"/>
      </FullScreenWrapper>
    </Backdrop>
  );
};
