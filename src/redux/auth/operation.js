import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../api/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import toast from 'react-hot-toast';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('Congratulations, you have successfully registered!🎉');
      return { email: user.email, uid: user.uid };
    } catch (error) {
      toast.error('Upss, something went wrong.😔 Try again later.');
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('Congratulations, you have successfully login!🎉');
      return { email: user.email, uid: user.uid };
    } catch (error) {
      toast.error('Upss, something went wrong.😔 Try again later.');
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      toast.success('You have logged out successfully.🎉');
    } catch (error) {
      toast.error('Upss, something went wrong.');
      return rejectWithValue(error.message);
    }
  },
);
