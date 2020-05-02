import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import eventsSlice from '../reducers/events'
import eventSlice from '../reducers/event'
import categoriesSlice from '../reducers/categories'
import authSlice from '../reducers/auth'

const rootReducer = combineReducers({
  events: eventsSlice.reducer,
  event: eventSlice.reducer,
  categories: categoriesSlice.reducer,
  auth: authSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store