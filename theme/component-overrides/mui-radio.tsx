import { Components } from '@mui/material'

export const muiRadioOverrides = (
  spacing: number[],
): Components['MuiRadio'] => ({
  styleOverrides: {
    root: {
      padding: spacing[1],
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
})
