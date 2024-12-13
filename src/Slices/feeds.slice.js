import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserFeeds = createAsyncThunk(
  "userFeeds/fetchUserFeeds",

  async (_, { getState }) => {
    const { username } = getState().userAuth;

    const response = await axiosInstance.get(apiRoutes.userFeeds, {
      params: { username: username },
    });
    return response?.data?.data;
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
        state.error = action.error.message;
      });
  },
});

export default userFeedSlice.reducer;
