import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимикає перевірку серіалізації
    }),
});

export default store;
