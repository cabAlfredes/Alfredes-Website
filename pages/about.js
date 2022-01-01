import React from 'react'
import About from '@/components/About'
import { CenterPanel } from '@/components/Layout/templates';

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page) {
  return (
    <CenterPanel
      title='contactate con nosotros'
    >
      {page}
    </CenterPanel>

  )
}