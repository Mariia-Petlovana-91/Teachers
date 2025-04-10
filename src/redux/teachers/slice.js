import { createSlice } from '@reduxjs/toolkit';

import { getTeachers, getFilters } from './operation.js';

const INITIAL_STATE = {
  teachers: [],
  loading: false,
  error: null,
  filtersForSearch: {},
  lastKey: null,
  isMoreData: true,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      // .addCase(getTeachers.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(getTeachers.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.teachers = action.payload;
      // })
      // .addCase(getTeachers.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })
      .addCase(getTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Коли дані успішно завантажені
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.loading = false;
        const { teachers, lastKey } = action.payload;

        // Якщо немає нових даних, просто залишаємо поточний стан
        if (teachers.length === 0) {
          state.isMoreData = false; // Якщо більше нема даних
          return;
        }

        // Перевірка чи є вже елементи в масиві (по lastKey)
        if (state.lastKey === lastKey) {
          // Якщо в масиві вже є ці елементи, заміщаємо
          state.teachers = teachers;
        } else {
          // Додаємо нові елементи
          state.teachers = [...state.teachers, ...teachers];
        }

        // Оновлюємо lastKey для наступного запиту
        state.lastKey = lastKey;
      })
      // Якщо запит не вдався
      .addCase(getTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.filtersForSearch = action.payload;
      })
      .addCase(getFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teachersSlice.reducer;
