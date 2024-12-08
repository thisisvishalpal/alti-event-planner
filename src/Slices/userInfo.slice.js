import { createSlice } from "@reduxjs/toolkit";
import { mockPosts } from "Mock";

const initialState = {
  data: {
    profilePicture: null,
    userName: null,
    firstName: null,
    lastName: null,
    city: null,
    state: null,
    phoneNumber: null,
    bio: null,
    followers: null,
    following: null,
    posts: null,
    private: null,
    gotra: null,
    age: null,
    gender: null,
  },
  loading: false,
  error: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    fetchUserInfo(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserInfoSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserInfoFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserInfo, fetchUserInfoSuccess, fetchUserInfoFailure } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
