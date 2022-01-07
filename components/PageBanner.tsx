import React from "react";
import { styled } from "@mui/material/styles";

const PageBannerWrapper = styled("div")(({ theme }) => {
  return {
    position: "relative",
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    // backgroundImage: 'url("/assets/bg_texture.png")',
    minHeight: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    letterSpacing: "0.1rem",
    fontFamily: "Montserrat",
    color: theme.palette.secondary.contrastText,
    marginBottom: theme.spacing(2),
  };
});

interface Props {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title }: Props) => {
  return <PageBannerWrapper>{title}</PageBannerWrapper>;
};

export default PageBanner;
