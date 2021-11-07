import { Container, Paper } from "@mui/material"
import styles from './templates.module.scss'

export const CenterPanel = ({ children, title, titleColorTheme }) => {
  return (
    <div className={`${styles.mainWrapper}`}>
      <Container maxWidth='lg'>
        <Paper>
          {children}
        </Paper>
      </Container>
    </div>
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