import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    fetchAllCategories: (state: any, action: any) => {
      state.categories = state.categories.push(action.payload);
    },
  },
}) 

export const { fetchAllCategories } = categoriesSlice.actions
export default categoriesSlice