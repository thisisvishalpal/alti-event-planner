import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
export const fetchOtherProfile = createAsyncThunk(
  "otherProfile/fetchOtherProfile",
  async (params) => {
    const response = await axiosInstance.get("/user/username", {
      params: { username: params },
    });

    return response?.data?.data;
  }
);

const otherProfileSlice = createSlice({
  name: "otherProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOtherProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOtherProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchOtherProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default otherProfileSlice.reducer;
