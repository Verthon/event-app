import { createSlice } from '@reduxjs/toolkit'

export const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    fetchAllEvents: (action: any, state: any) => {
      state.events.push(action.payload)
    },
    // showEventDetails: (action: any, state: any) => {
    //   state.events = action.payload;
    // },
    filterEventsByCategory: (action: any, state: any) => {
      state.events.filter((event: any) => event.category === action.payload)
    },
    filterEventsBySearch: (action: any, state: any) => {
      state.events.filter((event: any) => event.includes(action.payload))
    }
  },
}) 

export const { fetchAllEvents } = eventsSlice.actions

export default eventsSlice