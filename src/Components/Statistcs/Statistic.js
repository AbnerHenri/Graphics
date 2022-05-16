import React from 'react';
import './StatisticStyle.css'

function Statistcs(props) {

  const Data = [
    {name : props.name, id : 'Radio' + props.id[0], number : 1},
    {name : props.name, id : 'Radio' + props.id[1], number : 2},
    {name : props.name, id : 'Radio' + props.id[2], number : 3},
    {name : props.name, id : 'Radio' + props.id[3], number : 4},
    {name : props.name, id : 'Radio' + props.id[4], number : 5},
    {name : props.name, id : 'Radio' + props.id[5], number : 6},
    {name : props.name, id : 'Radio' + props.id[6], number : 7},
    {name : props.name, id : 'Radio' + props.id[7], number : 8},
    {name : props.name, id : 'Radio' + props.id[8], number : 9},
  ]

  console.log(Data[0].id)

  return(
      <div className='Card'>
          <div className='Title'>{props.title}</div>

          <div className='Buttons'>
            {Data.map((e)=> 
              <>
                <input type={'radio'} className='InpRadio' name={e.name} id={e.id} />

                <div className='CheckboxWrapper'>
                  <label for={e.id} className='Btn'>{e.number}</label>
                </div>
              </>
            )}
          </div>
      </div>
  )
}

export default Statistcs;