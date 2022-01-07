import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const lightPalette: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    background: { default: "#e5e5e8", paper: "#f7f7f9" },
    primary: {
      main: "#ffd60a",
      light: "#ffd60a",
      dark: "#ffc300",
    },
    secondary: {
      main: "#2c2c54",
      light: "#2c2c54",
      dark: "#2c2c54",
      contrastText: "#fff",
    },
    text: {
      primary: "#a58a00",
      secondary: "#6d6d6d",
    },
  },
});
