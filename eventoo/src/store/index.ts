import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit'
import eventsSlice from '../reducers/events'

const reducer = combineReducers({
  events: eventsSlice.reducer
})

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer,
  middleware
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(reducer))
}

export default store