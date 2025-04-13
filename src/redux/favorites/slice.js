import { createSlice } from '@reduxjs/toolkit';

const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  list: storedFavorites,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const teacher = action.payload;
      const index = state.list.findIndex((fav) => fav.id === teacher.id);
      if (index !== -1) {
        state.list.splice(index, 1);
      } else {
        state.list.push(teacher);
      }
      localStorage.setItem('favorites', JSON.stringify(state.list));
    },
    clear: (state) => {
      state.list = [];
      localStorage.removeItem('favorites');
    },
  },
});

export const { toggleFavorite, clear } = favoritesSlice.actions;
export default favoritesSlice.reducer;
