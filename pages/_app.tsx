/** @format */
// import type {} from '@mui/x-date-pickers/themeAugmentation';
import Layout from "../components/Layout/Layout";
import { StateProvider } from "../store/store";
import { SiteThemeProvider } from "../theme/theme-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../styles/globals.css";

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
	const getLayout =
		Component.getLayout ||
		((page) => {
			page;
		});

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StateProvider>
				<SiteThemeProvider>
					<CssBaseline />
					<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
				</SiteThemeProvider>
			</StateProvider>
		</LocalizationProvider>
	);
}

export default MyApp;
