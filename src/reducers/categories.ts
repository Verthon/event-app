import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebase'

interface ICategoriesState {
  loading: string,
  error: string | null,
  categories: Array<any>,
  currentCategory: string
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
  categories: [],
  currentCategory: 'All'
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setActiveCategory: (state: any, action: any) => {
      state.currentCategory = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllCategories.fulfilled, (state: ICategoriesState, action) => {
      state.categories = [...action.payload]
    })
  }
})

export const {setActiveCategory} = categoriesSlice.actions

export default categoriesSlice