import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { axiosGet } from './../../service/axios-api';


export const fetchBook = createAsyncThunk(
  'book/fetchBook',
  async () => {
    const response = await axiosGet('/book');
    return response.data
  }
)

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.value = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const {  } = bookSlice.actions

export default bookSlice.reducer