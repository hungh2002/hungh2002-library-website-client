import { createSlice } from '@reduxjs/toolkit'

import { DARK, LIGHT } from "./../type";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: DARK,
  },
  reducers: {
    dark: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = DARK
    },
    light: (state) => {
      state.value = LIGHT
    },
  },
})

// Action creators are generated for each case reducer function
export const { dark, light } = themeSlice.actions

export default themeSlice.reducer