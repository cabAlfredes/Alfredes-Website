import { CustomThemeTypography } from "../typography-theme";
import { CustomThemePalette } from "../theme";

import { Components } from "@mui/material";
import { muiAutocompleteOverrides } from "./mui-autocomplete";
import { muiButtonOverrides } from "./mui-button";
import { muiCheckboxOverrides } from "./mui-checkbox";
import { muiDrawerOverrides } from "./mui-drawer";
import { muiRadioOverrides } from "./mui-radio";
import { muiSliderOverrides } from "./mui-slider";
import { muiSnackBarOverrides } from "./mui-snackbar";
import { muiSwitchOverrides } from "./mui-switch";
import { muiTextFieldOverrides } from "./mui-text-field";

export const defaultComponentOverrides = (
	palette: CustomThemePalette,
	typography: CustomThemeTypography,
	spacing: number[],
): Components => ({
	// MuiButton: muiButtonOverrides(palette, typography),
	// MuiCheckbox: muiCheckboxOverrides(spacing),
	// MuiRadio: muiRadioOverrides(spacing),
	// MuiSlider: muiSliderOverrides(spacing, palette, typography),
	// MuiSwitch: muiSwitchOverrides(spacing, palette),
	// MuiTextField: muiTextFieldOverrides(spacing, palette, typography),
	// MuiAutocomplete: muiAutocompleteOverrides(spacing, palette),
	// MuiDrawer: muiDrawerOverrides(spacing, palette),
	// MuiSnackbar: muiSnackBarOverrides(spacing, palette),
	MuiListItem:{
		styleOverrides:{
			root:{
				// color: 'red'
			}
		}
	}
});
