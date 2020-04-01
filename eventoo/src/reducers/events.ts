import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'

interface IEventsState {
  loading: string,
  error: string | null,
  events: Array<any>
}

export const fetchAllEvents = createAsyncThunk('events/fetchAllEvents', async () => {
  try {
    const querySnapshot = await db.collection('events')
      .get()
    const events: any = []
    querySnapshot.docs.forEach((doc: any) => {
      const data = doc.data()
      data.docId = doc.id
      events.push(data)
    })
    return events
  }
  catch (err) {
    console.log('error occurred while fetching events inside of eventsSlice', err)
  }
})

const initialState: IEventsState = {
  loading: 'idle',
  error: null,
  events: []
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchAllEventsSuccess: (state: IEventsState, action: any) => {
      state.error = null
    },
    fetchAllEventsFailure: (state: IEventsState, action: any) => {
      state.error = action.payload
    },
    filterEventsByCategory: (state: IEventsState, action: any) => {
      state.events.filter((event: any) => event.category === action.payload)
    },
    filterEventsBySearch: (action: any, state: any) => {
      state.events.filter((event: any) => event.includes(action.payload))
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllEvents.fulfilled, (state: IEventsState, action) => {
      state.events = [...action.payload]
    })
  }
})

export const { fetchAllEventsSuccess, fetchAllEventsFailure, filterEventsByCategory, filterEventsBySearch } = eventsSlice.actions

export default eventsSlice