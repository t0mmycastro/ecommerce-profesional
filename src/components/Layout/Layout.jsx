import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

/**
 Layout es el cuerpo fundamental, donde se van colocando los componentes pages, la cual irá luego en app.js y se mostrará
 */

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
          <Routers/>
        </div>
        
        <Footer/>
    </>
  )
}

export default Layout