import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const darkPalette: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#2b2d42", paper: "#2b2d42" },
    primary: {
      main: "#ffc300",
      light: "#ffd60a",
      dark: "#ffc300",
    },
    secondary: {
      main: "#2b2d42",
      light: "#2c2c54",
      dark: "#2c2c54",
      contrastText: "#fff",
    },
    text: {
      primary: "#ffc817",
      secondary: "#d8ddde",
    },
  },
});
