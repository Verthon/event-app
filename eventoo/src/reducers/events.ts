import { createSlice } from '@reduxjs/toolkit'

export const eventsSlice = createSlice({
  name: 'events',
  reducers: {
    fetchAllEvents: (action: any, state: any) => {
      state.events.push(action.payload)
    },
    showEventDetails: (action: any, state: any) => {

    },
    filterEventsByCategory: (action: any, state: any) => {
      state.events.filter((event: any) => event.category === action.payload)
    },
    filterEventsBySearch: (action: any, state: any) => {
      state.events.filter((event: any) => event.includes(action.payload))
    }
  },
  initialState: { events: [] },
}) 

export const { fetchAllEvents, showEventDetails } = eventsSlice.actions

export default eventsSlice