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

const searchSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    resetSearch: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
