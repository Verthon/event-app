import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit'
import eventsSlice from '../reducers/events'
import eventSlice from '../reducers/event'
import categoriesSlice from '../reducers/categories'
import authSlice from '../reducers/auth'

const reducer = combineReducers({
  events: eventsSlice.reducer,
  event: eventSlice.reducer,
  categories: categoriesSlice.reducer,
  auth: authSlice.reducer
})

const store = configureStore({
  reducer,
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(reducer))
}

export default store