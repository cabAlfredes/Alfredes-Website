import { Container, Paper } from "@mui/material"
import styles from './templates.module.scss'
import Box from '@mui/material/Box'

export const CenterPanel = ({ children, title, titleColorTheme }) => {
  return (
    <Box sx={{
      marginTop: 25,
    }}>
      <Container maxWidth='lg'>
        <Paper elevation={0}>
          {children}
        </Paper>
      </Container>
    </Box >
  )
}

export const FullWidthPanel = ({ children, title, titleColorTheme }) => {
  return (
    <div className={`${styles.mainWrapper}`}>
      <Paper>
        {children}
      </Paper>
    </div>
  )
}

export const PanelWrapper = ({ children, className }) => {
  return (
    <div className={`wrapper-panel ${className}`}>{children}</div>
  )
}