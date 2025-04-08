import { createSlice } from '@reduxjs/toolkit';

import { getTeachers } from './operation.js';

const INITIAL_STATE = {
  teachers: [],
  lastKey: null,
  loading: false,
  error: null,
  totalPages: 0,
  page: 0,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: INITIAL_STATE,
  reducers: {
    clear: (state) => {
      state.teachers = [];
      state.totalPages = 0;
      state.page = 0;
    },
  },

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
      });
  },
});

export const { clear } = teachersSlice.actions;
export default teachersSlice.reducer;
