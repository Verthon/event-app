import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'events',
  initialState: {},
  reducers: {
    showEventDetails: (state: any, action: any) => {
      state.event = action.payload;
    },
  },
}) 

export const { showEventDetails } = eventSlice.actions
export default eventSlice