import axios from 'axios';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase'; // Імпорт Firebase конфігурації

// Функція реєстрації користувача
export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Оновлюємо профіль з displayName
    await updateProfile(user, { displayName: name });

    // Отримуємо токен доступу
    const accessToken = await user.getIdToken();

    return { user, accessToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функція авторизації користувача
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Отримуємо токен доступу
    const accessToken = await user.getIdToken();

    return { user, accessToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функція виходу з акаунту
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функція отримання поточного користувача
export const getCurrentUser = () => {
  const user = auth.currentUser;
  return user
    ? { uid: user.uid, email: user.email, displayName: user.displayName }
    : null;
};
