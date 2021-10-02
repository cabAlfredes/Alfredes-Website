import { useState, useMemo, createContext } from 'react';
import Layout from '@/components/Layout';
import { StateProvider, ColorModeContext } from '@/store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from '@/theme/theme'

import '../styles/globals.css';

// export function reportWebVitals(metric) {
//   console.log(metric);
// }


function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => { page })

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StateProvider>
          <CssBaseline />
          <Layout>
            {getLayout(<Component {...pageProps} />)}
          </Layout>
        </StateProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
