/** @format */

// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#ffd600',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 300,
    },
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiLink: {
      textDecoration: 'none',
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#ffd600',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 300,
    },
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
};

export const getDesignTokens = mode => {
  console.log('mode from theme', mode);
  return {
    palette: {
      mode,
      ...(mode === 'light' ? { ...lightTheme } : { ...darkTheme }),
    },
  };
};
