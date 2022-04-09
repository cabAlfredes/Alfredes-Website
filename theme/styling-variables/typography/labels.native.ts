import { LabelsModifications, LabelsSet } from "../../typography-theme";

const gilroyFamily = "Gilroy-medium";

export const labels: LabelsSet = {
	large: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: 500,
		fontFamily: gilroyFamily,
	},
	medium: {
		fontSize: 18,
		lineHeight: 24,
		fontWeight: 500,
		fontFamily: gilroyFamily,
	},
	small: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: 500,
		fontFamily: gilroyFamily,
	},
	xSmall: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: 500,
		fontFamily: gilroyFamily,
	},
};

export const labelModifications: LabelsModifications = {
	bold: {
		fontWeight: 700,
		fontFamily: "Gilroy-bold",
	},
	strike: {
		textDecoration: "line-through",
	},
	semiBold: {
		fontWeight: 600,
		fontFamily: "Gilroy-semi-bold",
	},
};
