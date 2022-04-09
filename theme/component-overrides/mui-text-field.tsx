import { CustomThemePalette, CustomThemeTypography } from '../utils'

import { Components } from '@mui/material'

export const muiTextFieldOverrides = (
  spacing: number[],
  palette: CustomThemePalette,
  typography: CustomThemeTypography,
): Components['MuiTextField'] => ({
  styleOverrides: {
    root: {
      height: 'auto',
      backgroundColor: '#fff',
      border: 'none',
      '& .MuiInputLabel-root': {
        position: 'relative',
        transform: 'none',
        color: palette.dark.main,
        fontSize: typography.labels.small,
        lineHeight: `${typography.labels.small.lineHeight}px`,
        fontWeight: '500',
        marginBottom: spacing[1],
      },
      '& .MuiInputLabel-root.Mui-error, & .MuiInputLabel-root.Mui-error.Mui-focused':
        {
          color: palette.accent5,
        },
      '& .MuiInputLabel-root.Mui-focused': {
        color: palette.dark.main,
      },
      '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-input': {
        border: `1px solid ${palette.primary.main}`,
      },
      '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-input [aria-invalid="true"]':
        {
          border: `solid 1px ${palette.accent5}`,
        },
      '& .MuiOutlinedInput-root': {
        padding: 0,
      },
      '& .MuiOutlinedInput-input': {
        border: `1px solid ${palette.grey[100]}`,
        borderRadius: '8px',
        height: 30,
        padding: `${spacing[1]}px ${spacing[0]}px`,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none',
      },
    },
  },
})
