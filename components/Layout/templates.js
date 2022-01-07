import { Container, Paper } from "@mui/material"
import Box from '@mui/material/Box'
import PageBanner from '@/components/PageBanner';

export const CenterPanel = (props) => {
  const { children, bannerTitle } = props;
  console.log('CenterPanel', props)
  return (
    <Box component='main' sx={{
      marginTop: '90px'
    }}>
      <PageBanner title={bannerTitle} />
      <Container maxWidth='lg'>
        {children}
      </Container>
    </Box >
  )
}

export const FullWidthPanel = ({ children }) => {
  return (
    <Box component='main' sx={{
      marginTop: '90px'
    }}>
      {children}
    </Box>
  )
}

export const PanelWrapper = ({ children, className }) => {
  return (
    <div className={`wrapper-panel ${className}`}>{children}</div>
  )
}