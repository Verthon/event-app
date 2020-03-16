import { combineReducers } from '@reduxjs/toolkit'
import eventsSlice from '../reducers/events'
import eventSlice from '../reducers/event'

const rootReducer = combineReducers({
  events: eventsSlice.reducer,
  event: eventSlice.reducer
})

export default rootReducer