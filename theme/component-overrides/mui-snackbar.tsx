import { Components } from "@mui/material";
import { CustomThemePalette } from "../theme";
export const muiSnackBarOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
): Components["MuiSnackbar"] => ({
	styleOverrides: {
		root: {
			"& .MuiSnackbarContent-root": {
				backgroundColor: palette.primary.dark,
				boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.31)",
				borderRadius: spacing[2],
				padding: "0px 0px",
			},
			"& .MuiSnackbarContent-message": {
				padding: "0px 0px",
			},
		},
	},
});
