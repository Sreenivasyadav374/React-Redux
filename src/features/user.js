import {createSlice} from '@reduxjs/toolkit'

const InitialState={name:"",age:"",email:""};

export const userSlice=createSlice({
    name:"user",
    initialState:{value:InitialState},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value=InitialState
        }
    }
})

export const {login,logout}=userSlice.actions

export default userSlice.reducer

