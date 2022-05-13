import React from 'react';
import './StatisticStyle.css'

function Statistcs(props) {

    const data = [
        {id : 1, value : 1},
        {id : 2, value : 2},
        {id : 3, value : 3},
        {id : 4, value : 4},
        {id : 5, value : 5},
        {id : 6, value : 6},
        {id : 7, value : 7},
        {id : 8, value : 8},
        {id : 9, value : 9},
    ]


  return(
      <div className='Card'>
          <div className='Title'>{props.title}</div>

          <div>
            {data.map((but)=> <button className='Btn'>{but.value}</button>)}
          </div>
      </div>
  )
}

export default Statistcs;