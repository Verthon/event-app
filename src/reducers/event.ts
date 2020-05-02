import { createSlice } from '@reduxjs/toolkit'
import { EventType } from '../types/events'

interface IEventState {
  event: EventType
}

export const eventSlice = createSlice({
  name: 'events',
  initialState: {
    event: {
      docId: '',
      title: '',
      host: '',
      localization: '',
      address: '',
      category: '',
      day: '',
      hour: '',
      description: '',
      featuredImage: '',
      editMode: false
    }
  },
  reducers: {
    showEventDetails: (state: IEventState, action: any) => {
      state.event = { ...action.payload };
    },
  },
})

export const { showEventDetails } = eventSlice.actions
export default eventSlice