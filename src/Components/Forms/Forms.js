import React, { useContext } from 'react';
import './FormStyle.css'

import { GraphicContext } from '../../Contexts/GraphicContext'

function Forms() {

  const {media1, setMedia1} = useContext(GraphicContext)
  const {media2, setMedia2} = useContext(GraphicContext)
  const {media3, setMedia3} = useContext(GraphicContext)

  return(
      <div className='Forms'>
        
      </div>
  )
}

export default Forms;