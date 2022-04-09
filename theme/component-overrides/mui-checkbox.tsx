import { Components } from '@mui/material'

export const muiCheckboxOverrides = (
  spacing: number[],
): Components['MuiCheckbox'] => ({
  styleOverrides: {
    root: {
      padding: spacing[1],
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
})
