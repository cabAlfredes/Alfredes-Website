import { createTheme } from '@mui/material/styles'
import { lightPalette } from './light'
import { darkPalette } from './dark'
// export const lightTheme = createTheme({
//   palette: {
//     type: 'light',
//     mode: 'light',
//     primary: {
//       main: '#ceac00',

//     },
//     secondary: {
//       main: '#378c52',
//     },  
//   },
//   spacing: 8,
//   typography: {
//     fontSize: 14,
//   },
//   shape: {
//     borderRadius: 4,
//   },
//   props: {
//     MuiAppBar: {
//       color: 'secondary',
//     },
//   },
//   overrides: {
//     MuiButton: {
//       root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//       },
//     },
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//     mode: 'dark',
//     primary: {
//       main: '#ffd600',
//     },
//     secondary: {
//       main: '#2bffef',
//     },
//   },
//   typography: {
//     fontSize: 14,
//   },
//   spacing: 8,
//   overrides: {
//     MuiButton: {
//       root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//       },
//     },
//   }
// });

export const getDesignTokens = (mode) => {
  return (mode === 'light') ? lightPalette : darkPalette
};
