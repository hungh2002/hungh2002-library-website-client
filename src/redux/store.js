import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducer/counterSlice";
import themeReducer from "./reducer/themeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
})