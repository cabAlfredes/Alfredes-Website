import { Typography, styled } from "@mui/material";

import React from "react";
import { themeBuilder } from "@/theme/theme-provider";

const PageBannerWrapper = styled("div")(({ theme }) => {
	return {
		alignItems: "center",
		backgroundImage: 'url("/assets/banner/cabana.jpeg")',
		backgroundPosition: "50% 45%",
		backgroundSize: "cover",
		display: "flex",
		fontFamily: "Montserrat",
		fontSize: "3rem",
		justifyContent: "center",
		letterSpacing: "0.1rem",
		margin: "auto",
		minHeight: 250,
		position: "relative",
		width: "100%",
	};
});

const Title = styled(Typography)(({ theme }) => ({
	borderRadius: "0.5rem",
	padding: theme.spacing(4),
}));

interface Props {
	title?: string;
}

export const PageBanner = ({ title }: Props) => {
	return (
		<PageBannerWrapper>
			{title && <Title variant="h1">{title}</Title>}
		</PageBannerWrapper>
	);
};
