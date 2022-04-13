import {
	Components,
	createTheme as createMUITheme,
} from "@mui/material/styles";

// import { lightPalette } from "./light";
// import { darkPalette } from "./dark";
import { Color, PaletteMode } from "@mui/material";

import {
	SimplePaletteColorOptions,
	TypeText,
} from "@mui/material/styles/createPalette";

import { updateTypography, CustomThemeTypography } from "./typography-theme";
import { defaultComponentOverrides } from "./component-overrides";

declare module "@mui/material/styles/createTheme" {
	export interface Theme {
		background: {
			content: string;
		};
	}

	export interface ThemeOptions {
		background: {
			content: string;
		};
	}
}

declare module "@mui/material/styles" {
	export interface Palette {
		light: Palette["primary"];
		dark: Palette["primary"];
		neutral: Palette["primary"];
		accent1: React.CSSProperties["color"];
		accent2: React.CSSProperties["color"];
		accent3: React.CSSProperties["color"];
		accent4: React.CSSProperties["color"];
		accent5: React.CSSProperties["color"];
		accent1Dark: React.CSSProperties["color"];
		accent2Dark: React.CSSProperties["color"];
		accent3Dark: React.CSSProperties["color"];
		accent4Dark: React.CSSProperties["color"];
		accent5Dark: React.CSSProperties["color"];
	}
	export interface PaletteOptions {
		light?: PaletteOptions["primary"];
		dark?: PaletteOptions["primary"];
		neutral?: PaletteOptions["primary"];
		accent1?: React.CSSProperties["color"];
		accent2?: React.CSSProperties["color"];
		accent3?: React.CSSProperties["color"];
		accent4?: React.CSSProperties["color"];
		accent5?: React.CSSProperties["color"];
		accent1Dark?: React.CSSProperties["color"];
		accent2Dark?: React.CSSProperties["color"];
		accent3Dark?: React.CSSProperties["color"];
		accent4Dark?: React.CSSProperties["color"];
		accent5Dark?: React.CSSProperties["color"];
	}
}

export interface CustomThemePalette {
	mode: PaletteMode;
	primary: SimplePaletteColorOptions;
	secondary: SimplePaletteColorOptions;
	light: SimplePaletteColorOptions;
	dark: SimplePaletteColorOptions;
	neutral: SimplePaletteColorOptions;
	accent1: React.CSSProperties["color"];
	accent2: React.CSSProperties["color"];
	accent3: React.CSSProperties["color"];
	accent4: React.CSSProperties["color"];
	accent5: React.CSSProperties["color"];
	accent1Dark: React.CSSProperties["color"];
	accent2Dark: React.CSSProperties["color"];
	accent3Dark: React.CSSProperties["color"];
	accent4Dark: React.CSSProperties["color"];
	accent5Dark: React.CSSProperties["color"];
	error: SimplePaletteColorOptions;
	warning: SimplePaletteColorOptions;
	info: SimplePaletteColorOptions;
	success: SimplePaletteColorOptions;
	background: {
		default: string;
		paper: string;
		header: string;
	};
	action: {
		disabled: string;
		disabledOpacity: number;
	};
	grey: Color;
	text: TypeText;
}
export interface CustomThemeProps {
	darkMode: boolean;
	palette: CustomThemePalette;
	background: {
		content: string;
	};
	typography: CustomThemeTypography;
	breakpoints: {
		values: {
			xs: number;
			sm: number;
			md: number;
			lg: number;
			xl: number;
		};
	};
	spacing: number[];
	components?: Components;
}

export const createTheme = ({
	darkMode,
	palette,
	typography,
	breakpoints,
	spacing,
	components,
	background,
}: CustomThemeProps) => {
	const props = {
		palette: {
			...palette,
			mode: (darkMode ? "dark" : "light") as PaletteMode,
		},
		typography: updateTypography(typography, palette),
		breakpoints,
		spacing,
		background,
		components: {
			...defaultComponentOverrides(palette, typography, spacing),
			...components,
		},
	};
	return createMUITheme({ ...props });
};
