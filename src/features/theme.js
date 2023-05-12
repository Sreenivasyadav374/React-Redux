import {createSlice} from '@reduxjs/toolkit'

export const themeSlice=createSlice({
    name:"theme",
    initialState:{value:""},
    reducers:{
        colorchange:(state,action)=>{state.value=action.payload}
    }
})

export const {colorchange}=themeSlice.actions

export default themeSlice.reducer;