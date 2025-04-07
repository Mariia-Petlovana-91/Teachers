import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../api/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Реєстрація користувача
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return { email: user.email, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Логін користувача
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return { email: user.email, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Логаут користувача
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
