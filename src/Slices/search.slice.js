import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchSearch = createAsyncThunk(
  "userSearch/fetchSearch",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(apiRoutes.userSearch, params);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
