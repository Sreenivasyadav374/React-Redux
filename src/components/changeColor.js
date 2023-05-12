import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {colorchange} from '../features/theme'

function ChangeColor() {
  
  const Dispatch=useDispatch()
  const [color,setColor]=useState("")
  return (
    <>
    <div className='color'>
        <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
        <button className="cbutton" onClick={()=>Dispatch(colorchange(color))}>Change Color</button>
    </div>
    
    </>
  )
}

export default ChangeColor