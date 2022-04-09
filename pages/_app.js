/** @format */
import { useState, useMemo } from "react";
import Layout from "../components/Layout/Layout";
import { StateProvider, ColorModeContext } from "../store/store";
import { SiteThemeProvider } from "../theme/theme-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../theme/theme";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "../styles/globals.css";

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
	const [mode, setMode] = useState("light");
	// Use the layout defined at the page level, if available
	const getLayout =
		Component.getLayout ||
		((page) => {
			page;
		});

	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[],
	);
	// Update the theme only if the mode changes
	const theme = useMemo(() => getDesignTokens(mode));

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ColorModeContext.Provider value={colorMode}>
				<StateProvider>
					/
					<SiteThemeProvider theme={theme}>
						{/* <CssBaseline /> */}
						<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
					</SiteThemeProvider>
				</StateProvider>
			</ColorModeContext.Provider>
		</LocalizationProvider>
	);
}

export default MyApp;
