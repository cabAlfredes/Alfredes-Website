import type { ParagraphsSet } from "../../typography-theme";

const gilroyReg = "Gilroy-regular";
const gilroyBold = "Gilroy-bold";
const gilroySemiBold = "Gilroy-semi-bold";
export const paragraphs: ParagraphsSet = {
	paragraph: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 24,
		fontFamily: gilroyReg,
	},
	captions: {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 18,
		fontFamily: gilroyReg,
	},
	paragraphBold: {
		fontSize: 16,
		fontWeight: 700,
		lineHeight: 24,
		fontFamily: gilroyBold,
	},
	captionsBold: {
		fontSize: 14,
		fontWeight: 600,
		lineHeight: 18,
		fontFamily: gilroySemiBold,
	},
};
