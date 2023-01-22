/** @format */
import Script from "next/script";
import Layout from "../components/Layout/Layout";
import { StateProvider } from "../store/store";
import { SiteThemeProvider } from "../theme/theme-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../styles/globals.css";
import Head from "next/head";

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
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-RTV747GK9T"
            strategy="afterInteractive"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RTV747GK9T');
       `}
          </Script>

          <CssBaseline />
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </SiteThemeProvider>
      </StateProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
