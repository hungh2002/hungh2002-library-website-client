import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducer/counterSlice";
import themeReducer from "./reducer/themeSlice";
import socialNetworkReducer from "./reducer/socialNetworkSlice";
import bookReducer from "./reducer/bookSlice";
import chapterReducer from "./reducer/chapterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    socialNetwork: socialNetworkReducer,
    book: bookReducer,
    chapter: chapterReducer
  },
})