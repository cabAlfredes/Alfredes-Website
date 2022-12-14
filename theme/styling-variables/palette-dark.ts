import {
	black,
	darkBlue,
	green,
	grey,
	hotPink,
	lightBlue,
	lime,
	purple,
	red,
	teal,
	white,
	yellow,
} from "./colours";
// import {
// 	red
// } from '@mui/material/colors'
import { TypeAction } from "@mui/material/styles/createPalette";
import { CustomThemePalette } from "../theme";

export const paletteDark: CustomThemePalette = {
	mode: "dark",
	primary: {
		// light: purple[200],
		main: yellow[500],
		// dark: yellow[800],
		// contrastText: grey[500],
	},
	secondary: {
		// light: teal.A400,
		main: purple[500],
		// dark: teal[700],
		// contrastText: lightBlue[400],
	},
	light: {
		// light: grey[100],
		main: green[300],
		// dark: grey[800],
		// contrastText: darkBlue[500],
	},
	dark: {
		// dark: red[900],
		// light: red[100],
		main: red[900],
		// contrastText: white,
	},
	neutral: {
		light: grey[50],
		main: grey[800],
		dark: grey[600],
		contrastText: grey[100],
	},
	accent1: green[400],
	accent2: hotPink[200],
	accent3: lime[400],
	accent4: lightBlue[400],
	accent5: red[400],
	accent1Dark: green[800],
	accent2Dark: hotPink[800],
	accent3Dark: lime[800],
	accent4Dark: lightBlue[600],
	accent5Dark: red[800],
	error: { main: red[800] },
	warning: { main: red[800] },
	info: { main: red[800] },
	success: { main: green[800] },
	background: {
		default: grey[100],
		paper: grey[800],
		header: yellow[500],
	},
	action: {
		disabled: grey[100],
		disabledOpacity: 0.8,
		// focus: red[400],
		hover: grey[900],
		// selected: green[400],
	} as TypeAction,
	grey,
	text: {
		disabled: grey[400],
		primary: grey[50],
		secondary: grey[200],
		contrast: grey[900] 
	},
};
