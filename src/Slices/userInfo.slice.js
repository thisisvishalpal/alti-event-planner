import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { mockPosts } from "Mock";
import { axiosInstance } from "Services";

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
    accountType: null,
    isLoggedIn: false,
  },
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchInitialState = createAsyncThunk(
  "userInfo/fetchInitialState",
  async () => {
    const response = await axiosInstance.get("/user/username", {
      params: { username: "thisisvishalpal" },
    });

    return response?.data?.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialState.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInitialState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { fetchUserInfo, fetchUserInfoSuccess, fetchUserInfoFailure } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
