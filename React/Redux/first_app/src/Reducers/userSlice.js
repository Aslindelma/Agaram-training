import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginSuccessData : {

  }
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateLoginSuccess : (state,action) => {
      state.loginSuccessData = action.payload
    },
    resetLoginSuccess : (state) => {
      state.loginSuccessData = {}
      }
    }
  }
)

export const { updateLoginSuccess,resetLoginSuccess } = userSlice.actions

export default userSlice.reducer