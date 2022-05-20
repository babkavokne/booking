import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import counterReducer from '../reducers/counter/counterSlice'

const initialState = {
  isAuth: localStorage.getItem('isAuth'),
  fullName: localStorage.getItem('username') || ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.fullName = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.fullName = '';
    }
  },
})

export const { login, logout } = authSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default store