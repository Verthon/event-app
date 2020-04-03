import { createSlice } from '@reduxjs/toolkit'

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
      state.synced = true
      state.user = action.payload
    },
    logout: (state: IAuthState) => {
      state.user = null
    }
  }
})

export const selectCurrentUser = (state: any) => state.auth.user

export const {login, logout} = authSlice.actions

export default authSlice