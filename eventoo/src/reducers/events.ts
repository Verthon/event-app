import { createAction, createSlice } from '@reduxjs/toolkit'

const createEvent = createAction('CREATE_EVENT')
const fetchAllEvents = createAction('FETCH_ALL_EVENTS')

export const eventsSlice = createSlice({
  name: 'events',
  reducers: {
    fetchAllEvents: (action: any, state: any) => {
      state.events.push(action.payload)
    }
  },
  initialState: { events: [] },
})

export default eventsSlice