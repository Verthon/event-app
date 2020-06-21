import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  uid: string,
  email: string,
  name: string,
  avatar: string
}

interface IAuthState {
  error: string | null,
  synced: boolean,
  user: null | any,
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
    login: (state: IAuthState, action: PayloadAction<any>) => {
      state.synced = true
      state.user = action.payload
    },
    logout: (state: IAuthState) => {
      state.user = null
    }
  }
})

export const selectCurrentUser = (state: { auth: IAuthState }) => state.auth.user

export const { login, logout } = authSlice.actions

export default authSlice