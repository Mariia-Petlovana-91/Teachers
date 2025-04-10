import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, query, orderByKey, startAfter, limitToFirst, get } from 'firebase/database';
import { database } from '../../api/firebase.js';

import toast from 'react-hot-toast';

export const getTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const teachersDataRef = ref(database, 'teachers');
      const teachersSnapshot = await get(teachersDataRef);
      const teachers = teachersSnapshot.val();
      console.log(teachers);
      return teachers;
    } catch (error) {
      toast.error(error.message || 'Error fetching teachers');
      return rejectWithValue(error.message);
    }
  },
);

export const getFilters = createAsyncThunk(
  'searchData/getSearchData',
  async (_, { rejectWithValue }) => {
    try {
      const filtersDataRef = ref(database, 'searchData');
      const filtersSnapshot = await get(filtersDataRef);
      const filters = filtersSnapshot.val();
      return filters;
    } catch (error) {
      toast.error(error.message || 'Error fetching filters');
      return rejectWithValue(error.message);
    }
  },
);
