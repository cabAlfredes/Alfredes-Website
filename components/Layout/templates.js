import { Container } from "@mui/material"

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

export const MainPanel = ({ component: Component, title, titleColorTheme, wrapperClassName, narrow, options = {}, matchProps, ...rest }) => {
  // const { bgTheme } = rest
  // const bgThemeClassName = bgClassNameSelector(bgTheme)

  return (
    // <div className={`wrapper-main-panel ${wrapperClassName} ${bgThemeClassName}`}>
    //   <div className={`wrapper-title-bar ${options.titleColorTheme}`}>
    //     <h1>{title}</h1>
    //   </div>
    <Container>
      <Component/>
    </Container>
    // </div>
  )
}

export const PanelWrapper = ({ children, className }) => {
  return (
    <div className={`wrapper-panel ${className}`}>{children}</div>
  )
}