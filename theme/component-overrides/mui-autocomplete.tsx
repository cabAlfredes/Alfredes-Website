import { Components } from "@mui/material";
import { CustomThemePalette } from "../theme";

export const muiAutocompleteOverrides = (
	spacing: number[],
	palette: CustomThemePalette,
): Components["MuiAutocomplete"] => ({
	styleOverrides: {
		root: {
			"& .MuiOutlinedInput-root": {
				padding: 0,
			},
			'& .Mui-focused.MuiInputBase-adornedEnd.MuiOutlinedInput-root [aria-controls="google-autocomplete-listbox"]':
				{
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
				},
			'& .Mui-focused.MuiInputBase-adornedEnd.MuiOutlinedInput-root [aria-invalid="true"]':
				{
					border: `solid 1px ${palette.accent5}`,
				},
			'& .MuiOutlinedInput-root [aria-invalid="true"]': {
				border: `solid 1px ${palette.accent5}`,
			},
		},
		paper: {
			borderTopLeftRadius: 0,
			borderTopRightRadius: 0,
			marginTop: "1px",
			border: `solid 1px ${palette.grey[100]}`,
			borderTop: "none",
			boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
			maxHeight: 300,
			"& .MuiAutocomplete-listbox": {
				maxHeight: 300,
			},
		},
	},
});
