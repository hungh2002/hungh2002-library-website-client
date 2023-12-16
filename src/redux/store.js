import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducer/counterSlice";
import themeReducer from "./reducer/themeSlice";
import socialNetworkReducer from "./reducer/socialNetworkSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    socialNetwork: socialNetworkReducer
  },
})