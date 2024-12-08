import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feeds: ["yo bro"],
  loading: false,
  error: null,
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    fetchFeeds(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFeedsSuccess(state, action) {
      state.loading = false;
      state.events = action.payload;
    },
    fetchFeedsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFeeds, fetchFeedsSuccess, fetchFeedsFailure } =
  feedsSlice.actions;

export default feedsSlice.reducer;
