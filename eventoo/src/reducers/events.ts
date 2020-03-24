import { createSlice } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

interface EventsState {
  loading: string,
  error: string | null,
  events: Array<any>
}

const initialState: EventsState = {
  loading: 'idle',
  error: null,
  events: []
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchAllEventsSuccess: (action: any, state: any) => {
      state.events.push(action.payload)
      state.error = null
    },
    fetchAllEventsFailure: (action: any, state: any) => {
      state.error = action.payload
    },
    filterEventsByCategory: (action: any, state: any) => {
      state.events.filter((event: any) => event.category === action.payload)
    },
    filterEventsBySearch: (action: any, state: any) => {
      state.events.filter((event: any) => event.includes(action.payload))
    }
  },
}) 

export const { fetchAllEventsSuccess, fetchAllEventsFailure, filterEventsByCategory, filterEventsBySearch} = eventsSlice.actions

export default eventsSlice