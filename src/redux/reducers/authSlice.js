import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isadmin: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userExist: (state, action) => {
      console.log("userExist action:", action);
      state.user = action.payload;
      state.isLoading = false;
    },
    userNotExist: (state, action) => {
      state.user = null;
      state.isLoading = true;
    },
  },
});

export default authSlice;
export const { userExist, userNotExist } = authSlice.actions;
