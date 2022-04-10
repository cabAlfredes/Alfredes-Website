import { CustomThemePalette } from "../theme";
import { CustomThemeTypography } from "../typography-theme";

import { Components } from "@mui/material";

export const muiTextFieldOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
	typography: CustomThemeTypography,
): Components["MuiTextField"] => ({
	styleOverrides: {
		root: {
			height: "auto",
			backgroundColor: palette.background.paper,
			border: "none",
			"& .MuiInputLabel-root": {
				position: "relative",
				transform: "none",
				color: palette.text.primary,
				fontSize: typography.labels.small,
				lineHeight: `${typography.labels.small.lineHeight}px`,
				fontWeight: "500",
				marginBottom: spacing[1],
			},
			"& .MuiInputLabel-root.Mui-error, & .MuiInputLabel-root.Mui-error.Mui-focused":
				{
					color: palette.accent5,
				},
			"& .MuiInputLabel-root.Mui-focused": {
				color: palette.primary.main,
			},
			"& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-input": {
				border: `1px solid ${palette.primary.main}`,
			},
			'& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-input [aria-invalid="true"]':
				{
					border: `solid 1px ${palette.accent5}`,
				},
			"& .MuiOutlinedInput-root": {
				padding: 0,
			},
			"& .MuiOutlinedInput-input": {
				border: `1px solid ${palette.primary.main}`,
				borderRadius: "8px",
				height: 30,
				padding: `${spacing[1]}px ${spacing[0]}px`,
				paddingLeft: `${spacing[1]}px`,
			},
			"& .MuiOutlinedInput-notchedOutline": {
				display: "none",
			},
		},
	},
});
