import React, { useContext } from 'react';
import './StatisticStyle.css'

import { GraphicContext } from '../../Contexts/GraphicContext'

function Statistcs(props) {

  const {setMedia1} = useContext(GraphicContext)
  const {setMedia2} = useContext(GraphicContext)
  const {setMedia3} = useContext(GraphicContext)

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

  function setData(name, value){
    switch (name) {
      case 'FirstCard' :
        setMedia1(value)
        break;

      case 'SecondCard' : 
        setMedia2(value)
        break;

      case 'ThirdCard' : 
        setMedia3(value)
        break;
    
      default:
        return { name, value }
    }
  }

  return(
      <div className='Card'>
          <div className='Title'>{props.title}</div>

          <div className='Buttons'>
            {Data.map((e)=> 
              <>
                <input type={'radio'} className='InpRadio' name={e.name} id={e.id} />

                <div className='CheckboxWrapper'>
                  <label for={e.id} className='Btn' onClick={(e)=> setData(props.name, e.target.textContent) }>{e.number}</label>
                </div>
              </>
            )}
          </div>
      </div>
  )
}

export default Statistcs;