export const selectUser = (state) => state.authData.user;
export const selectIsLoggedIn = (state) => state.authData.isLoggedIn;
export const selectError = (state) => state.authData.error;
export const selectLoading = (state) => state.authData.loading;
