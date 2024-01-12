import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosGetWithParams } from './../../service/axios-api';

export const fetchChapterDetail = createAsyncThunk(
  'chapterDetail/fetchChapterDetail',
  async (bookId) => {
    const response = await axiosGetWithParams(
        '/chapter/chapter',
        { bookId: bookId },
        data
        );
    return response.data;
  }
);

export const chapterSlice = createSlice({
  name: 'chapter',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChapter.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = chapterSlice.actions;

export default chapterSlice.reducer;
