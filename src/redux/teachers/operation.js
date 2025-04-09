import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, query, orderByKey, startAfter, limitToFirst, get } from 'firebase/database';
import { database } from '../../api/firebase.js';

import toast from 'react-hot-toast';

export const getTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (startKey = null, { rejectWithValue }) => {
    try {
      let teachersRef = ref(database, 'teachers');
      let teachersQuery = query(teachersRef, orderByKey());

      if (startKey) {
        teachersQuery = query(
          teachersRef,
          orderByKey(),
          startAfter(startKey),
          limitToFirst(3),
        );
      } else {
        teachersQuery = query(teachersRef, orderByKey(), limitToFirst(3));
      }

      const snapshot = await get(teachersQuery);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        const keys = Object.keys(teachersData);

        if (keys.length === 0) {
          throw new Error('No teachers found');
        }

        const lastKey = keys[keys.length - 1];

        return { teachersData, lastKey };
      } else {
        throw new Error('No teachers found');
      }
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

      console.log('Fetched filters:', filters);
      return filters;
    } catch (error) {
      console.error('Error fetching filters:', error);
      toast.error(error.message || 'Error fetching filters');
      return rejectWithValue(error.message);
    }
  },
);
