import { Components } from "@mui/material";

import { CustomThemePalette } from "../theme";
import { CustomThemeTypography } from "../typography-theme";

export const muiSliderOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
	typography: CustomThemeTypography,
): Components["MuiSlider"] => ({
	styleOverrides: {
		root: {
			"&.Mui-disabled": {
				color: palette.action.disabled,
				"& .MuiSlider-rail": {
					color: palette.action.disabled,
					opacity: 1,
				},
				"& .MuiSlider-track": {
					color: palette.action.disabled,
				},
			},
		},
		thumb: {
			height: 12,
			width: 12,
			"&:focus, &:hover, &.Mui-active": {
				height: spacing[3],
				width: spacing[3],
				boxShadow: "inherit",
				"& .MuiSlider-valueLabel": {
					display: "inherit",
					maxWidth: "150px",
					minWidth: "61px",
					width: "61px",
					height: "23px",
					padding: `0 ${spacing[1]}`,
					top: "-10px",
					fontFamily: "Gilroy",
					fontSize: typography.labels.xSmall.fontSize,
					lineHeight: typography.labels.xSmall.lineHeight,
					borderRadius: "40px",
					backgroundColor: palette.primary.main,
					border: `3px solid ${palette.secondary.main}`,
					"&::before": {
						height: "10px",
						bottom: "-8px",
						width: "1px",
						transform: "translate(-50%, 50%) rotate(0deg)",
						backgroundColor: palette.primary.main,
					},
				},
			},
			"&.Mui-focusVisible": {
				boxShadow: "inherit",
			},
		},
		valueLabel: {
			display: "none",
		},
		rail: {
			color: palette.action.disabled,
			opacity: 1,
		},
	},
});
