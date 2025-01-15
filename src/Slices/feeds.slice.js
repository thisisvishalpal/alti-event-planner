import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";
import { logout } from "./auth.slice";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserFeeds = createAsyncThunk(
  "userFeeds/fetchUserFeeds",

  async (_, { getState, rejectWithValue, dispatch }) => {
    const { username } = getState().userAuth;

    try {
      const response = await axiosInstance.get(apiRoutes.userFeeds, {
        params: { username: username },
      });
      return response?.data?.data;
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout());
      }
      console.log(error, "checking error in slice");
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

const userFeedSlice = createSlice({
  name: "userFeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userFeedSlice.reducer;
