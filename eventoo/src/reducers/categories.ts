import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'

interface ICategoriesState {
  loading: string,
  error: string | null,
  categories: Array<any>
}

export const fetchAllCategories = createAsyncThunk('events/fetchAllEvents', async () => {
  try {
    const querySnapshot = await db.collection('categories')
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

const initialState: ICategoriesState = {
  loading: 'idle',
  error: null,
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchAllCategories.fulfilled, (state: ICategoriesState, action) => {
      state.categories.push(action.payload)
    })
  }
}) 

export default categoriesSlice