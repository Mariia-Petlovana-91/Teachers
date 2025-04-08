import { configureStore } from '@reduxjs/toolkit';

import popupReducer from './popup/slice';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
    popupData: popupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
