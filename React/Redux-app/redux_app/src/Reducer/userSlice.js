import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    register:[],
    loginsuccess:[],
    setusers:{},
    singleuser:[],
    userid:0,
    loadersuccess:[]
    },
  
  reducers: {
    setRegData: (state,action)=>{
      state.register = action.payload
    },
    updateLoginSuccess : (state,action) =>{
        state.loginsuccess = action.payload
    },
    setAllUser :(state,action)=>{
      state.setusers = action.payload
    },
    setUserid : (state,action)=>{
      state.userid = action.payload
    },
    isLoaderActive : (state,action)=>{
      state.loadersuccess = action.payload
    },
    setSingleUser:(state,action)=>{
      state.singleuser = action.payload
    }
  },
})


export const { setRegData, updateLoginSuccess, setAllUser, setUserid, setSingleUser, isLoaderActive } = userSlice.actions

export default userSlice.reducer