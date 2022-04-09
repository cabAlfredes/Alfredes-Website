import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { CustomThemePalette } from "./theme";

interface ResetFonts {
	h5: false;
	h6: false;
	subtitle1: false;
	subtitle2: false;
	body1: false;
	body2: false;
	caption: false;
	button: false;
	overline: false;
	paragraph: true;
}

type LabelsType = `label${Leaves<LabelsGet, 1, "", "false", "true">}`;
type HeadingsType = `${Leaves<HeadingsGet, 0, "">}`;
type ParagraphsType = `${Leaves<ParagraphsGet, 0, "">}`;
type LinksType = `${Leaves<LinksSet, 0, "">}`;

export interface CustomThemeTypographyBase {
	fontFamily: string;
	Gilroy?: TypographyStyleOptions;
	gilroy?: TypographyStyleOptions;
}

export type FontsTrue<T extends string | number | symbol> = {
	[P in T]: true;
};
export type FontsCss<T extends string | number | symbol> = {
	[P in T]: React.CSSProperties;
};
export type DefaultFonts = FontsTrue<LabelsType> &
	FontsTrue<HeadingsType> &
	FontsTrue<ParagraphsType> &
	FontsTrue<LinksType> &
	ResetFonts;

export type DefaultFontsCss = FontsCss<LabelsType> &
	FontsCss<HeadingsType> &
	FontsCss<ParagraphsType> &
	FontsCss<LinksType>;

export interface CustomThemeTypography extends CustomThemeTypographyBase {
	labels: LabelsSet;
	// labelModifications: LabelsModifications;
	headings: HeadingsSet;
	paragraphs: ParagraphsSet;
	links: LinksSet;
}
export type FontsOptions<T extends string | number | symbol> = {
	[P in T]: TypographyStyleOptions;
};

export type AllFontOptions = FontsOptions<LabelsType> &
	FontsOptions<HeadingsType> &
	FontsOptions<ParagraphsType> &
	FontsOptions<LinksType>;

export interface LabelsBaseType {
	bold: TypographyStyleOptions;
	semiBold: TypographyStyleOptions;
	default: TypographyStyleOptions;
	strike: TypographyStyleOptions;
}

export interface HeadingsSet {
	h1: FontSize;
	h2: FontSize;
	h3: FontSize;
	h4: FontSize;
}

export interface LabelsGet {
	large: LabelsBaseType;
	medium: LabelsBaseType;
	small: LabelsBaseType;
	xSmall: LabelsBaseType;
}

export interface HeadingsGet {
	h1: TypographyStyleOptions;
	h2: TypographyStyleOptions;
	h3: TypographyStyleOptions;
	h4: TypographyStyleOptions;
}

export interface ParagraphsGet {
	paragraph: TypographyStyleOptions;
	captions: TypographyStyleOptions;
	paragraphBold: TypographyStyleOptions;
	captionsBold: TypographyStyleOptions;
}

export interface ParagraphsSet {
	paragraph: FontSize;
	captions: FontSize;
	paragraphBold: FontSize;
	captionsBold: FontSize;
}

export interface LinksSet {
	linkBody: FontSize;
	linkBodyBold: FontSize;
	linkSmall: FontSize;
	linkSmallBold: FontSize;
	linkXSmall: FontSize;
	linkXSmallBold: FontSize;
}

export interface LabelsSet {
	large: FontSize;
	medium: FontSize;
	small: FontSize;
	xSmall: FontSize;
}

export interface TitleSet {
	h1: FontSize;
	h2: FontSize;
	h3: FontSize;
	h4: FontSize;
}
type LabelModificationsType = Omit<
	TypographyStyleOptions,
	"fontSize" | "lineHeight" | "fontWeight" | "textDecoration"
> &
	Partial<FontSize>;
export type LabelsModifications = Record<string, LabelModificationsType>;
export type CustomThemeTypographyPrice = CustomThemeTypographyBase &
	AllFontOptions;

export interface FontSize {
	fontSize: number;
	lineHeight: number;
	textDecoration?:
		| "none"
		| "underline"
		| "line-through"
		| "underline line-through";

	fontFamily?: string;
	fontWeight:
		| "normal"
		| "bold"
		| 100
		| 200
		| 300
		| 400
		| 500
		| 600
		| 700
		| 800
		| 900;
}

const capitalizeString = (base: string) =>
	base.replace(/./, (c) => c.toUpperCase());

export const updateTypography = (
	typography: CustomThemeTypography,
	palette: CustomThemePalette,
) => {
	const { labels, headings, ...newTypography } = typography;
	const typedTypography = newTypography as any; // FIXME: remove any
	const typos: Record<string, TypographyStyleOptions> = {};
	const labelText = "label";

	Object.entries(labels).forEach((label: [string, FontSize]) => {
		typos[`${labelText}${capitalizeString(label[0])}Default`] = {
			color: palette.text.primary,
			fontWeight: label[1].fontWeight,
			lineHeight: `${label[1].lineHeight}px`,
			fontSize: `${label[1].fontSize}px`,
		};
	});

	return {
		...typos,
		...typedTypography,
	};
};
