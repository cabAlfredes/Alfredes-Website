// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions = {
  mode:'light',
  palette: {
    type: 'light',
    primary: {
      main: '#fdd835',
    },
    secondary: {
      main: '#f50057',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#f50057',
    },
  },
};


export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#fdd835',
          },
          secondary: {
            main: '#f50057',
          },        
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#388e3c',
          },
          secondary: {
            main: '#f50057',
          },         
        }),
  },
});