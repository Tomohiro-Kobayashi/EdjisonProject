import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "AuthModel",
  initialState: {
    authModelOpen: false,
  },
  reducers: {
    setAuthModelOpen: (state, action) => {
      state.appState = action.payload;
    },
  },
});

export const { setAuthModalOpen } = authModalSlice.actions;

export default authModalSlice.reducer;
