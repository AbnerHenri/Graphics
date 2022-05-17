import React from 'react';
import './FormStyle.css'

import Statistcs from '../Statistcs/Statistic';

function Forms() {

  const ids1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const ids2 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
  const ids3 = [19, 20, 21, 22, 23, 24, 25, 26, 27]


  return(
      <div className='Forms'>
          <Statistcs title={'Media 1'} name={'FirstCard'} id={ids1} />
          <Statistcs title={'Media 2'} name={'SecondCard'} id={ids2} />
          <Statistcs title={'Media 3'} name={'ThirdCard'} id={ids3} />
      </div>
  )
}

export default Forms;