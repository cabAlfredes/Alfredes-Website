import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import type {
	DefaultFonts,
	DefaultFontsCss,
	FontsCss,
	FontsTrue,
} from "../typography-theme";

export * from "./colours";
export * from "./typography";
export * from "./spacing";
export * from "./layout";
export * from "./palette";
export const Gilroy = "Gilroy";

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides
		extends DefaultFonts,
			FontsTrue<ExtraLabelTypes> {}
}

declare module "@mui/material/styles" {
	interface TypographyVariants
		extends DefaultFontsCss,
			FontsCss<ExtraLabelTypes> {
		gilroy?: TypographyStyleOptions;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions extends DefaultFontsCss {
		gilroy?: TypographyStyleOptions;
	}
}

type ExtraLabelTypes = "labelLargePrice" | "labelMediumPrice";
