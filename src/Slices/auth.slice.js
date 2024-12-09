import { createSlice } from "@reduxjs/toolkit";
// import { mockPosts } from "Mock";

const initialState = {
  data: {
    profilePicture: null,
    userName: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    private: null,
    accountType: null,
    isLoggedIn: false,
  },
  loading: false,
  error: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    fetchUserAuth(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserAuthSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserAuthFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserAuth, fetchUserAuthSuccess, fetchUserAuthFailure } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;
