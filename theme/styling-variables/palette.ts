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
} from './colours'

import { TypeAction } from '@mui/material/styles/createPalette'
import { CustomThemePalette } from '@lasoo/theme'

export const palette: CustomThemePalette = {
  primary: {
    light: purple.A400,
    main: purple[400],
    dark: purple[600],
    contrastText: white,
  },
  secondary: {
    light: teal.A400,
    main: teal[400],
    dark: teal[700],
    contrastText: darkBlue[800],
  },
  light: {
    light: white,
    main: white,
    dark: white,
    contrastText: white,
  },
  dark: {
    dark: darkBlue[400],
    light: darkBlue.A200,
    main: darkBlue[800],
    contrastText: white,
  },
  neutral: {
    light: grey[50],
    main: grey[200],
    dark: grey[600],
    contrastText: black,
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
  info: { main: lightBlue[600] },
  success: { main: green[800] },
  background: {
    default: white,
    paper: white,
  },
  action: {
    disabled: grey[100],
    disabledOpacity: 0.8,
  } as TypeAction,
  grey,
  text: {
    disabled: grey[600],
    primary: darkBlue[800],
    secondary: purple[600],
  },
}
