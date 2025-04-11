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
      .addCase(getTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.loading = false;
        const { teachers, lastKey } = action.payload;

        if (teachers.length === 0) {
          state.isMoreData = false;
          return;
        }
        if (state.lastKey === lastKey) {
          state.teachers = teachers;
        } else {
          state.teachers = [...state.teachers, ...teachers];
        }

        state.lastKey = lastKey;
      })
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
