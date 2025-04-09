import { createSlice } from '@reduxjs/toolkit';

import { getTeachers, getFilters } from './operation.js';

const INITIAL_STATE = {
  teachers: [],
  lastKey: null,
  loading: false,
  error: null,
  totalPages: 0,
  page: 0,
  filtersForSearch: {},
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
        if (action.payload.page === 1) {
          state.teachers = [...state.teachers, ...action.payload.teachersData];
        }

        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.teachers = action.payload.teachersData;
        state.lastKey = action.payload.lastKey;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilters.fulfilled, (state, action) => {
        state.loading = false;
        console.log('Fetched filters:', action.payload);
        state.filtersForSearch = action.payload;
        console.log('Fetched filters redux:', action.payload);
        console.log('Fetched filters redux filtersForSearch', state.filtersForSearch);
      })
      .addCase(getFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teachersSlice.reducer;
