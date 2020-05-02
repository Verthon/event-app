import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'
import { EventType } from '../types/events'

export interface IEventsState {
  loading: string,
  error: string | null,
  currentEvents: Array<EventType>,
  allEvents: Array<EventType>
  allUserEvents: Array<EventType>
  userEvents: Array<EventType>
  userEventImage: string
}

export const fetchAllEvents = createAsyncThunk('events/fetchAllEvents', async () => {
  try {
    const querySnapshot = await db.collection('events')
      .orderBy('day', 'asc')
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

export const fetchUserEvents = createAsyncThunk('events/fetchUserEvents', async (uid) => {
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
  currentEvents: [],
  allEvents: [],
  allUserEvents: [],
  userEvents: [],
  userEventImage: ''
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
      if (action.payload === "All") {
        state.currentEvents = [...state.allEvents]
      }
      state.currentEvents = state.allEvents.filter((event: EventType) => event.category === action.payload)
    },
    filterEventsBySearch: (state: IEventsState, action: any) => {
      if (state.currentEvents.length === 0) {
        state.currentEvents = state.allEvents.filter((event: EventType) => event.title.includes(action.payload))
      }
      state.currentEvents = state.currentEvents.filter((event: EventType) => event.title.includes(action.payload))
    },
    deleteEvent: (state: IEventsState, action: any) => {
      state.currentEvents = state.allEvents.filter((event: EventType) => event.docId !== action.payload)
      state.userEvents = state.allUserEvents.filter((event: EventType) => event.docId !== action.payload)
    },
    setUserEventImage: (state: IEventsState, action: any) => {
      state.userEventImage = action.payload
    },
    setDefaultEventImage: (state: IEventsState) => {
      state.userEventImage = ""
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllEvents.fulfilled, (state: IEventsState, action) => {
      state.currentEvents = [...action.payload]
      state.allEvents = [...action.payload]
    })
    builder.addCase(fetchUserEvents.fulfilled, (state: IEventsState, action) => {
      state.allUserEvents = [...action.payload]
      state.userEvents = state.allUserEvents
    })
  }
})

export const { fetchAllEventsSuccess, fetchAllEventsFailure, filterEventsByCategory, filterEventsBySearch, deleteEvent, setUserEventImage, setDefaultEventImage } = eventsSlice.actions

export default eventsSlice