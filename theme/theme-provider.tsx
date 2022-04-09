import { CustomThemePalette, createTheme } from "./theme";
import React from "react";
// import styling variables
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {
	Gilroy,
	headings,
	labelModifications,
	labels,
	layoutLarge,
	layoutMedium,
	layoutSmall,
	layoutXLarge,
	links,
	palette,
	paragraphs,
	spacingDesktop,
	white,
} from "./styling-variables";

export const themeBuilder = () =>
	createTheme({
		palette,
		background: {
			content: white,
		},
		typography: {
			fontFamily: Gilroy,
			gilroy: {
				fontFamily: Gilroy,
			},
			headings,
			paragraphs,
			links,
			labels,
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: layoutSmall.down,
				md: layoutMedium.down,
				lg: layoutLarge.down,
				xl: layoutXLarge.down,
			},
		},
		spacing: spacingDesktop,
	});

export const SiteThemeProvider: React.FC = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const theme = themeBuilder();
	return (
		<MUIThemeProvider theme={theme}>
			<ThemeProvider theme={theme as any}>{children}</ThemeProvider>
		</MUIThemeProvider>
	);
};
