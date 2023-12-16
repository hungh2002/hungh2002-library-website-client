import { createSlice } from '@reduxjs/toolkit'

import { SOCIAL_NETWORK } from "./../type/const";

export const socialNetworkSlice = createSlice({
  name: 'socialNetwork',
  initialState: {
    value: SOCIAL_NETWORK,
  },
  reducers: {
    changeSocialNetwork: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = {...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSocialNetwork } = socialNetworkSlice.actions

export default socialNetworkSlice.reducer