import { CustomThemePalette } from "../theme";
import { CustomThemeTypography } from "../typography-theme";

import { Components } from "@mui/material";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		reversed: true;
		ghost: true;
		lightPrimary: true;
	}

	interface ButtonPropsSizeOverrides {
		extraLarge: true;
	}
	interface ButtonPropsColorOverrides {
		dark: true;
	}
}

export const muiButtonOverrides = (
	palette: CustomThemePalette,
	typography: CustomThemeTypography,
): Components["MuiButton"] => ({
	defaultProps: {
		disableRipple: true,
		disableFocusRipple: true,
		disableTouchRipple: true,
	},
	styleOverrides: {
		// Name of the slot
		sizeLarge: {
			height: 48,
			fontWeight: typography.labels.medium.fontWeight,
			lineHeight: `${typography.labels.medium.lineHeight}px`,
			fontSize: typography.labels.medium.fontSize,
			borderRadius: 24,
		},
		sizeMedium: {
			height: 40,
			fontWeight: typography.labels.small.fontWeight,
			lineHeight: `${typography.labels.small.lineHeight}px`,
			fontSize: typography.labels.small.fontSize,
			borderRadius: 20,
		},
		sizeSmall: {
			height: 32,
			fontWeight: typography.labels.xSmall.fontWeight,
			lineHeight: `${typography.labels.xSmall.lineHeight}px`,
			fontSize: typography.labels.xSmall.fontSize,
			borderRadius: 16,
		},
		root: {
			color: palette.primary.contrastText,
			textTransform: "none",
			"&:hover": {
				cursor: "pointer",
			},
		},
		containedPrimary: {
			color: palette.primary.contrastText,
			background: palette.primary.main,
			"&:hover": {
				color: palette.primary.contrastText,
				background: palette.primary.light,
			},
			"&:focus": {
				color: palette.primary.contrastText,
				background: palette.dark.light,
			},
			"&:disabled": {
				background: palette.action.disabled,
				opacity: palette.action.disabledOpacity,
				color: palette.light.main,
			},
		},
		outlinedPrimary: {
			color: palette.primary.main,
			borderColor: palette.main,
			"&:hover": {
				background: palette.light,
			},
			"&:focus": {
				background: palette.light,
			},
			"&:disabled": {
				borderColor: palette.action.disabled,
				opacity: palette.action.disabledOpacity,
				color: palette.action.disabled,
			},
		},
		textPrimary: {
			color: palette.dark.main,
			"&:disabled": {
				color: palette.action.disabled,
			},
		},
		containedSecondary: {
			background: palette.secondary.dark,
			"&:hover": {
				background: palette.secondary.light,
			},
			"&:focus": {
				background: palette.secondary.light,
			},
			"&:disabled": {
				backgroundColor: "transparent",
				opacity: palette.action.disabledOpacity,
				color: palette.action.disabled,
				borderColor: palette.action.disabled,
			},
			color: palette.light.main,
		},
		outlinedSecondary: {
			color: palette.dark.main,
			borderColor: palette.secondary.main,
			"&:hover": {
				background: palette.secondary.light,
			},
			"&:focus": {
				background: palette.secondary.light,
			},
			"&:disabled": {
				backgroundColor: "transparent",
				opacity: palette.action.disabledOpacity,
				color: palette.action.disabled,
				borderColor: palette.action.disabled,
			},
		},
		textSecondary: {
			color: palette.secondary.main,
			"&:disabled": {
				background: "transparent",
				opacity: palette.action.disabledOpacity,
				color: palette.action.disabled,
			},
		},
	},
	variants: [
		{
			props: {
				size: "extraLarge",
			},
			style: {
				height: 56,
				fontWeight: typography.labels.medium.fontWeight,
				lineHeight: `${typography.labels.medium.lineHeight}px`,
				fontSize: typography.labels.medium.fontSize,
				borderRadius: 28,
			},
		},
		{
			props: { variant: "reversed", color: "primary" },
			style: {
				color: palette.dark.main,
				background: palette.light.main,
				"&:hover": {
					color: palette.dark.main,
					background: palette.light.main,
				},
				"&:disabled": {
					color: palette.light.main,
					background: palette.action.disabled,
				},
			},
		},
		{
			props: { variant: "reversed", color: "secondary" },
			style: {
				color: palette.light.main,
				borderColor: palette.secondary.main,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderStyle: "solid",
				"&:hover": {
					background: palette.secondary.light,
				},
				"&:focus": {
					background: palette.secondary.light,
				},
				"&:disabled": {
					backgroundColor: "transparent",
					opacity: palette.action.disabledOpacity,
					color: palette.action.disabled,
					borderColor: palette.action.disabled,
				},
			},
		},
		{
			props: { variant: "ghost" },
			style: {
				color: palette.light.main,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderStyle: "solid",
				borderColor: palette.light.main,
				"&:hover": {
					color: palette.dark.main,
					background: palette.light.main,
				},
				"&:focus": {
					color: palette.dark.main,
					background: palette.light.main,
				},
				"&:disabled": {
					backgroundColor: "transparent",
					opacity: palette.action.disabledOpacity,
					color: palette.action.disabled,
					borderColor: palette.action.disabled,
				},
			},
		},
		{
			props: { variant: "lightPrimary" },
			style: {
				color: palette.primary.contrastText,
				background: palette.primary.main,
				"&:hover": {
					color: palette.primary.contrastText,
					background: palette.primary.dark,
				},
				"&:focus": {
					color: palette.primary.contrastText,
					background: palette.primary.light,
				},
				"&:disabled": {
					background: palette.action.disabled,
					opacity: palette.action.disabledOpacity,
					color: palette.light.main,
				},
			},
		},
	],
});
