import axios from 'axios';

const BASE_URL = import.meta.env.VITE_FIREBASE_BASE_URL;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const teachersInstance = axios.create({
  baseURL: `${BASE_URL}.json`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTeachers = async (filters = {}) => {
  const params = {
    auth: API_KEY,
    orderBy: '"$key"',
    limitToFirst: filters.limit || 4,
    ...(filters.lastKey && { startAt: `"${filters.lastKey}"` }),
    ...filters,
  };

  const { data } = await teachersInstance.get('', { params });
  console.log(data);
  return data;
};
