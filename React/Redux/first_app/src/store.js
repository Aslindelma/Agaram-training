import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './Reducers/counterSlice'
import  userReducer  from './Reducers/userSlice'


const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})

export default store