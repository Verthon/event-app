import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'

interface ICategoriesState {
  loading: string,
  error: string | null,
  categories: Array<any>
}

export const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async () => {
  try {
    const querySnapshot = await db.collection('categories')
      .get()
    const categories: any = []
    querySnapshot.docs.forEach((doc: any) => {
      const data = doc.data()
      data.docId = doc.id
      categories.push(data)
    })
    return categories
  }
  catch (err) {
    console.log('error occurred while fetching categories inside of eventsSlice', err)
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
      state.categories = [...action.payload]
    })
  }
})

export default categoriesSlice