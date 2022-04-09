import { Components } from '@mui/material'
import { CustomThemePalette } from '../utils'
export const muiDrawerOverrides = (
  spacing: number[],
  palette: CustomThemePalette,
): Components['MuiDrawer'] => ({
  styleOverrides: {
    root: {
      '& .MuiBackdrop-root': {
        display: 'none',
      },
      '& .MuiPaper-root': {
        top: '88px',
        overflowX: 'hidden',
      },
      '& .MuiList-root': {
        paddingTop: `${spacing[3]}px`,
      },
      '& .MuiListItem-button': {
        '&:hover': {
          backgroundColor: palette.secondary.light,
          paddingLeft: `${spacing[4]}px !important`,
        },
        paddingRight: '0px!important',
        marginLeft: `${spacing[0]}px!important`,
      },
      '& .MuiListItem-root': {
        cursor: 'pointer',
        paddingRight: `${spacing[3]}px`,
        marginLeft: 'auto',
      },
    },
  },
})
