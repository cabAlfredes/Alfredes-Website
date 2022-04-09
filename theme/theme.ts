import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./light";
import { darkPalette } from "./dark";
import { Typography } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}

	interface TypographyVariants {
		MainTitle: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		MainTitle: React.CSSProperties;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		MainTitle: React.CSSProperties;
	}
}

export const getDesignTokens = (mode) => {
	return mode === "light" ? lightPalette : darkPalette;
};
