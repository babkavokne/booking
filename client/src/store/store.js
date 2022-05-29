import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import counterReducer from '../reducers/counter/counterSlice'

const initialState = {
  isAuth: localStorage.getItem('isAuth') || false,
  fullName: localStorage.getItem('username') || '',
  isLoading: false
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
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    nameChange: (state, action) => {
      state.fullName = action.payload;
    }
  },
})

export const { login, logout, loading, nameChange } = authSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default store