import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";
import { logout } from "./auth.slice";

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
export const fetchUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      const data = getState().userAuth;
      const response = await axiosInstance.get(apiRoutes.userInfo, {
        params: { username: data.username },
      });
      return response?.data?.data;
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout());
      }
      if (error.response) {
        return rejectWithValue(error.response.data.error);
      } else if (error.request) {
        return rejectWithValue("No response from the server");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userInfoSlice.reducer;
