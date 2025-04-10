export const selectTeachers = (state) => state.teachersData.teachers;
export const selectLoading = (state) => state.teachersData.loading;
export const selectError = (state) => state.teachersData.error;
export const selectFilters = (state) => state.teachersData.filtersForSearch;
export const selectLastKey = (state) => state.teachersData.lastKey;
export const selectIsMoreData = (state) => state.teachersData.isMoreData;
