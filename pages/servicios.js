
import React from 'react'
import Services from '@/components/Services'
import { CenterPanel } from '@/components/Layout/templates';

const ServiciosPage = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

export default ServiciosPage

ServiciosPage.getLayout = function getLayout(page) {
  return (
    <CenterPanel
      title='contactate con nosotros'
    >
      {page}
    </CenterPanel>

  )
}