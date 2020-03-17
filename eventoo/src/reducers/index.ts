import { combineReducers } from '@reduxjs/toolkit'
import eventsSlice from '../reducers/events'
import eventSlice from '../reducers/event'
import categoriesSlice from '../reducers/categories'

const rootReducer = combineReducers({
  events: eventsSlice.reducer,
  event: eventSlice.reducer,
  categories: categoriesSlice.reducer
})

export default rootReducer