import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    selectedLenguage: null,
    selectedLevel: null,
    selectedPrice: null,
  },
  reducers: {
    setSelectedLenguage: (state, action) => {
      state.selectedLenguage = action.payload;
    },
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});

export const { setSelectedLenguage, setSelectedLevel, setSelectedPrice } =
  filterSlice.actions;
export default filterSlice;
