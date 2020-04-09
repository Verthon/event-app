import { createSlice } from '@reduxjs/toolkit'
import { EventType } from '../types/events'

export const eventSlice = createSlice({
  name: 'events',
  initialState: {
    event: {}
  },
  reducers: {
    showEventDetails: (state: any, action: any) => {
      state.event = {...action.payload};
    },
  },
}) 

export const { showEventDetails } = eventSlice.actions
export default eventSlice