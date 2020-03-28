import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'

interface EventsState {
  loading: string,
  error: string | null,
  events: Array<any>
}

export const fetchAllEvents = createAsyncThunk('events/fetchAllEvents', () => {
  db.collection('events')
    .get()
    .then((querySnapshot: any) => {
      const events: any = []
      querySnapshot.docs.forEach((doc: any) => {
        const data = doc.data()
        data.docId = doc.id
        events.push(data)
      })
      console.log('fetchAllEvents() in events reducer', events);
      return events
    })
    .catch((err) => {
      console.log('error occurred while fetching events inside of eventsSlice', err)
    })
})

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
      //state.events.push(action.payload)
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
  extraReducers: builder => {
    builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
      console.log('what is action in extraReducers?', action)
      state.events.push(action.payload)
    })
  }
})

export const { fetchAllEventsSuccess, fetchAllEventsFailure, filterEventsByCategory, filterEventsBySearch } = eventsSlice.actions

export default eventsSlice