import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducer/themeSlice';
import socialNetworkReducer from './reducer/socialNetworkSlice';
import bookReducer from './reducer/bookSlice';
import chapterReducer from './reducer/chapterSlice';
import chapterDetailReducer from './reducer/chapterDetailSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    socialNetwork: socialNetworkReducer,
    book: bookReducer,
    chapter: chapterReducer,
    chapterDetail: chapterDetailReducer,
  },
});
