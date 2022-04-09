import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import colors from "@/theme/colors";

export const darkPalette: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.darkBlue,
      paper: colors.white,
    },
    primary: {
      main: colors.sunGlow,
      contrastText: colors.darkGray,
    },
    secondary: {
      main: colors.blueMunsell,
      contrastText: colors.lightGray,
    },
    text: {
      primary: colors.lightGray,
      secondary: colors.darkGray,
    },
  },
});
