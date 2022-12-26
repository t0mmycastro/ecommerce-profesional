import React from 'react'

// Colocación de un título de página con uso de Props.

const Helmet = (props) => {

    document.title = 'NeuSmart - ' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet