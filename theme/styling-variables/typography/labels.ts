import { LabelsModifications, LabelsSet } from "../../typography-theme";

export const labels: LabelsSet = {
	large: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: 500,
	},
	medium: {
		fontSize: 18,
		lineHeight: 24,
		fontWeight: 500,
	},
	small: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: 500,
	},
	xSmall: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: 500,
	},
};

export const labelModifications: LabelsModifications = {
	bold: {
		fontWeight: 700,
	},
	strike: {
		textDecoration: "line-through",
	},
	semiBold: {
		fontWeight: 600,
	},
};
