import React, { useContext } from 'react';
import './GraphicStyle.css'

import { Chart } from 'react-google-charts'
import { GraphicContext } from '../../Contexts/GraphicContext'

function Graphic() {

  const {media1, media2, media3} = useContext(GraphicContext)

  console.log(media1)


  const data = [
    ['Medias', 'Valores'],
    ['Media 1', Number(media1)],
    ['Media 2', Number(media2)],
    ['Media 3', Number(media3)]
  ]

  const options = {
    title : 'Medias Gerais',
    pieHole: 0.4,
    is3D: false,
    backgroundColor : '#F5F3F4'
  }

  return(
      <div className='Graphic'>
          <Chart 
            chartType='PieChart'
            data={data}
            width={'100%'}
            height={'270px'}
            options={options}
          />

        <br></br>

          <Chart 
            chartType='ColumnChart'
            data={data}
            width={'100%'}
            height={'270px'}
            options={options}/>
      </div>
  )
}

export default Graphic;