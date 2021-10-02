import { Container, Paper } from "@mui/material"
import styles from './templates.module.scss'

// export const CentrePanel = ({component: Component, title, wrapperClassName, fluid, narrow, options={}, matchProps, ...rest}) => {
//   const { bgTheme } = rest
//   const { sidePattern, showTitle, panelWrapperClassName } = options
//   console.log('panelWrapperClassName: ', panelWrapperClassName)
//   const bgThemeClassName = bgClassNameSelector(bgTheme)

//   const sidePatternClassName = sidePatternClassNameSelector(sidePattern)

//   return (
//     <div className={`centre-layout ${narrow ? 'centre-layout-narrow' : ''} ${wrapperClassName} ${bgThemeClassName} ${sidePatternClassName}`}>
//       <Container fluid={fluid}>
//         <PanelWrapper className={panelWrapperClassName} >
//           {
//             showTitle && <PageTitle text={title} />
//           }
//           <Component {...matchProps} bgThemeClassName={bgThemeClassName} {...rest} title={title} />
//         </PanelWrapper>
//       </Container>
//     </div>
//   )
// }

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