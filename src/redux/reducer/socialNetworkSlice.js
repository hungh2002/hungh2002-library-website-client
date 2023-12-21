import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { axiosGet } from './../../service/axios-api';


export const fetchSocialNetwork = createAsyncThunk(
  'socialNetwork/fetchSocialNetwork',
  async () => {
    const response = await axiosGet('/social-network-information');
    return response.data
  }
)

export const socialNetworkSlice = createSlice({
  name: 'socialNetwork',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialNetwork.fulfilled, (state, action) => {
        state.value = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const {  } = socialNetworkSlice.actions

export default socialNetworkSlice.reducer