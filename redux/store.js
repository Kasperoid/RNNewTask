import {configureStore} from '@reduxjs/toolkit';
import configSlice from './slices/configSlice';
import newsSlice from './slices/newsSlice';

const store = configureStore({
  reducer: {
    configSlice: configSlice,
    newsSlice: newsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
