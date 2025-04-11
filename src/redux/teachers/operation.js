import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  get,
} from 'firebase/database';
import { database } from '../../api/firebase.js';

import toast from 'react-hot-toast';

const PAGE_SIZE = 4;

export const getTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (lastKey, { rejectWithValue, getState }) => {
    try {
      const db = getDatabase();
      const teachersDataRef = ref(db, 'teachers');

      const teachersQuery = lastKey
        ? query(
            teachersDataRef,
            orderByKey(),
            startAfter(lastKey),
            limitToFirst(PAGE_SIZE),
          )
        : query(teachersDataRef, orderByKey(), limitToFirst(PAGE_SIZE));

      const teachersSnapshot = await get(teachersQuery);
      const teachers = teachersSnapshot.val();

      const teachersList = Object.entries(teachers).map(([id, data]) => ({
        id,
        ...data,
      }));

      const lastKeyFetched = Object.keys(teachers).pop();

      return { teachers: teachersList, lastKey: lastKeyFetched };
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
