import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchFilter = createAsyncThunk(
  "userFilter/fetchFilter",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(apiRoutes.userSearch, params);
      return response?.data?.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      } else if (error.request) {
        return rejectWithValue("No response from the server");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const filterSlice = createSlice({
  name: "userFilter",
  initialState,
  reducers: {
    resetFilter: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
