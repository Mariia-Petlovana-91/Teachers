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

// export const getTeachers = createAsyncThunk(
//   'teachers/fetchTeachers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const teachersDataRef = ref(database, 'teachers');
//       const teachersSnapshot = await get(teachersDataRef);
//       const teachers = teachersSnapshot.val();
//       console.log(teachers);
//       return teachers;
//     } catch (error) {
//       toast.error(error.message || 'Error fetching teachers');
//       return rejectWithValue(error.message);
//     }
//   },
// );

const PAGE_SIZE = 4; // Кількість елементів на сторінці

// Санка для отримання пагінованих даних
export const getTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (lastKey, { rejectWithValue, getState }) => {
    try {
      const db = getDatabase();
      const teachersDataRef = ref(db, 'teachers'); // Твоя база даних в Firebase

      // Якщо lastKey є, то завантажуємо наступну порцію даних
      const teachersQuery = lastKey
        ? query(
            teachersDataRef,
            orderByKey(),
            startAfter(lastKey),
            limitToFirst(PAGE_SIZE),
          )
        : query(teachersDataRef, orderByKey(), limitToFirst(PAGE_SIZE));

      // Виконуємо запит до Firebase
      const teachersSnapshot = await get(teachersQuery);
      const teachers = teachersSnapshot.val();

      // Якщо даних немає
      if (!teachers) {
        return { teachers: [], lastKey: null };
      }

      // Перетворюємо дані у масив
      const teachersList = Object.entries(teachers).map(([id, data]) => ({
        id,
        ...data,
      }));

      // Останній ключ (для пагінації)
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
