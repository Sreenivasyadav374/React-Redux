import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
  const user=useSelector((state)=> state.user.value)
  return (
    <>
    <h1>Profile Page</h1>
    <h2>Name:{user.name}</h2>
    <h2>Age:{user.age}</h2>
    </>
  )
}

export default Profile