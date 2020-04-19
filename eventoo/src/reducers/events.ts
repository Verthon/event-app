import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'
import { EventType } from '../types/events'

export interface IEventsState {
  loading: string,
  error: string | null,
  events: Array<EventType>,
  allEvents: Array<EventType>
  userEvents: Array<EventType>
}

export const fetchAllEvents = createAsyncThunk('events/fetchAllEvents', async () => {
  try {
    const querySnapshot = await db.collection('events')
      .get()
    const events: Array<EventType> = []
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

export const fetchUserEvents = createAsyncThunk('events/fetchUserEvents', async(uid) => {
  try {
    const querySnapshot = await db.collection('events')
      .where("uid", "==", uid)
      .get()
    const events: Array<EventType> = []
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
  events: [],
  allEvents: [],
  userEvents: []
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchAllEventsSuccess: (state: IEventsState) => {
      state.error = null
    },
    fetchAllEventsFailure: (state: IEventsState, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    filterEventsByCategory: (state: IEventsState, action: any): any => {
      console.log(action.payload)
      if (action.payload === "All") {
        state.events = [...state.allEvents]
        console.log('state.events after filter', state.events)
      }
      state.events = state.allEvents.filter((event: EventType) => event.category === action.payload)
      console.log('state.events after filter', state.events)
    },
    filterEventsBySearch: (state: IEventsState, action: any) => {
      if(state.events.length === 0) {
        state.events = state.allEvents.filter((event: any) => event.title.includes(action.payload))
      }
      state.events = state.events.filter((event: any) => event.title.includes(action.payload))
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllEvents.fulfilled, (state: IEventsState, action) => {
      state.events = [...action.payload]
      state.allEvents = [...action.payload]
    })
    builder.addCase(fetchUserEvents.fulfilled, (state: IEventsState, action) => {
      state.userEvents = [...action.payload]
    })
  }
})

export const { fetchAllEventsSuccess, fetchAllEventsFailure, filterEventsByCategory, filterEventsBySearch } = eventsSlice.actions

export default eventsSlice