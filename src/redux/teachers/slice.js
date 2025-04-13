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
        const { teachers, lastKey, isLastPage } = action.payload;

        if (teachers.length === 0) {
          state.isMoreData = false;
          return;
        }

        const existingIds = state.teachers.map((teacher) => teacher.id);
        const uniqueTeachers = teachers.filter(
          (teacher) => !existingIds.includes(teacher.id),
        );

        if (uniqueTeachers.length > 0) {
          if (state.lastKey === lastKey) {
            state.teachers = uniqueTeachers;
          } else {
            state.teachers = [...state.teachers, ...uniqueTeachers];
          }
        }

        state.lastKey = lastKey;
        state.isMoreData = !isLastPage;
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
