import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login,logout } from '../features/user'


function Login() {
  const Dispatch=useDispatch()
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [email,setEmail]=useState("")
  return (
    <>
    <div className='login'>
    <label>Name : </label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <label>Age : </label>
    <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
    <label>Email : </label>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button className="button" onClick={()=>{
      Dispatch(login({name:name,age:age,email:email}));setName("");setAge("");setEmail("")
    }}>Login
    
    </button>
    <button className='button' onClick={()=>
      Dispatch(logout())}
      >Logout</button>
    <br></br>
    </div>
    </>
  
  )
}

export default Login