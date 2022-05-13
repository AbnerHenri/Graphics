import React, { useContext } from 'react';
import './FormStyle.css'

import { GraphicContext } from '../../Contexts/GraphicContext'
import Statistcs from '../Statistcs/Statistic';

function Forms() {

  const {media1, setMedia1} = useContext(GraphicContext)
  const {media2, setMedia2} = useContext(GraphicContext)
  const {media3, setMedia3} = useContext(GraphicContext)

  return(
      <div className='Forms'>
          <Statistcs title={'Media 1'}/>
          <Statistcs title={'Media 2'}/>
          <Statistcs title={'Media 3'}/>
      </div>
  )
}

export default Forms;