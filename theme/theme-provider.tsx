import {
	headings,
	labelModifications,
	labels,
	layoutLarge,
	layoutMedium,
	layoutSmall,
	layoutXLarge,
	links,
	paletteDark,
	paletteLight,
	paragraphs,
	spacingDesktop,
	white,
} from "./styling-variables";

// import styling variables
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./theme";
import { useStateContext } from "@/store/store";

export const themeBuilder = (darkMode) => {
	return createTheme({
		darkMode,
		// palette: darkMode ? paletteDark : paletteLight,
		palette: {
			mode: darkMode ? 'dark' : 'light',
			...paletteDark
		},
		background: {
			content: white,
		},
		typography: {
			fontFamily: "Ubuntu",
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
};

export const SiteThemeProvider: React.FC = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const state = useStateContext();
	const theme = themeBuilder(state.darkMode);
	console.log(theme)

	return (
		<MUIThemeProvider theme={theme}>
			<ThemeProvider theme={theme as any}>{children}</ThemeProvider>
		</MUIThemeProvider>
	);
};
