import { Components } from "@mui/material";
import { CustomThemePalette } from "../theme";
export const muiDrawerOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
): Components["MuiDrawer"] => ({
	styleOverrides: {
		root: {
			"& .MuiBackdrop-root": {
				display: "none",
			},
			"& .MuiPaper-root": {
				// top: "88px",
				overflowX: "hidden",
			},
			"& .MuiList-root": {
				paddingTop: `${spacing[2]}px`,
			},
			"& .MuiListItem-button": {
				transition: 'all 0.2s ease-in', 
				"&:hover": {
					backgroundColor: palette.primary.light,
					paddingLeft: `${spacing[4]}px !important`,

				},
				paddingRight: "0px!important",
				marginLeft: `${spacing[0]}px!important`,
			},
			"& .MuiListItem-root": {
				cursor: "pointer",
				paddingRight: `${spacing[1]}px`,
				marginLeft: "auto",
			},
		},
	},
});
