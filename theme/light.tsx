import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import colors from "@/theme/colors";

export const lightPalette: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    background: {
      default: colors.white,
      paper: colors.darkBlue,
    },
    primary: {
      main: colors.sunGlow,
      contrastText: colors.darkGray,
    },
    secondary: {
      main: colors.blue,
      contrastText: "#fff",
    },
    text: {
      primary: colors.darkGray,
      secondary: colors.lightGray,
    },
  },
});
