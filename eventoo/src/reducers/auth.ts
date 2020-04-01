import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'
import { auth } from '../firebase/firebase'

interface IAuthState {
  error: string | null,
  synced: boolean,
  user: null,
}

const initialState: IAuthState = {
  error: null,
  synced: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state: IAuthState, action: any) => {
      state.user = action.payload
    },
    logout: (state: IAuthState) => {
      state.user = null
    }
  }
})

export const {login, logout} = authSlice.actions

export default authSlice