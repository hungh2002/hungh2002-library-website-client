import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosGetWithParams } from './../../service/axios-api';

export const fetchChapterDetail = createAsyncThunk(
  'chapterDetail/fetchChapterDetail',
  async (params) => {
    const response = await axiosGetWithParams(
      '/chapter/chapter',
      params,
    );
    return response.data;
  }
);

export const chapterDetailSlice = createSlice({
  name: 'chapterDetail',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChapterDetail.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = chapterDetailSlice.actions;

export default chapterDetailSlice.reducer;
