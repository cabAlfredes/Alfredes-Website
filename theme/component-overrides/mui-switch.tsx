import { Components } from "@mui/material";

import { CustomThemePalette } from "../theme";

export const muiSwitchOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
): Components["MuiSwitch"] => ({
	styleOverrides: {
		root: {
			width: 42,
			height: 26,
			padding: 0,
		},
		switchBase: {
			padding: 0,
			margin: "1.5px 1px",
			"&.Mui-checked": {
				"& + .MuiSwitch-track": {
					backgroundColor: palette.dark.dark,
					opacity: 1,
					border: 0,
				},
				"& .MuiSwitch-thumb": {
					backgroundColor: palette.light.light,
					margin: "0  -2px",
				},
			},
			"&.Mui-disabled": {
				"& + .MuiSwitch-track": {
					backgroundColor: palette.neutral.light,
					opacity: 0.5,
				},
				"& .MuiSwitch-thumb": {
					backgroundColor: palette.action.disabled,
					borderColor: "rgba(0, 0, 0, 0.04)",
				},
			},
		},
		thumb: {
			boxSizing: "border-box",
			width: 22,
			height: 22,
			backgroundColor: palette.light.light,
		},
		track: {
			borderRadius: 26 / 2,
			backgroundColor: palette.grey[200],
			opacity: 1,
		},
	},
});
