import { combineReducers } from '@reduxjs/toolkit'
import eventsSlice from '../reducers/events'

const rootReducer = combineReducers({
  events: eventsSlice.reducer
})

export default rootReducer