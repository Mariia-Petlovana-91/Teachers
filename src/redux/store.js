import { configureStore } from '@reduxjs/toolkit';

import popupReducer from './popup/slice.js';
import authReducer from './auth/slice.js';
import teachersReducer from './teachers/slice.js';
import filterReducer from './filters/slice.js';
import favoriteReducer from './favorites/slice.js';

export const store = configureStore({
  reducer: {
    popupData: popupReducer,
    authData: authReducer,
    teachersData: teachersReducer,
    filtersData: filterReducer,
    favoriteData: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
