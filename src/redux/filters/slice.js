import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: '',
  level: '',
  price: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.language = action.payload;
    },
    setSelectedLevel: (state, action) => {
      state.level = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setSelectedLanguage, setSelectedLevel, setSelectedPrice } =
  filterSlice.actions;
export default filterSlice.reducer;
