import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
  const user=useSelector((state)=> state.user.value)
  const color=useSelector((state)=>state.theme.value)
  return (
    <>
    <h1 className='head'>Profile Page</h1>
    <div className="Profile" style={{color:color,background:'grey'}}>
    
    <h2>Name:{user.name}</h2>
    <h2>Age:{user.age}</h2>
    <h2>Email:{user.email}</h2>
    </div>
    </>
  )
}

export default Profile