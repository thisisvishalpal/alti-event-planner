import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

const initialState = {
  data: { followers: [], following: [] },
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserConnections = createAsyncThunk(
  "userConnections/fetchUserConnections",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(apiRoutes.userConnections);

      return response?.data?.data;
    } catch (error) {
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

const userConnectionSlice = createSlice({
  name: "userConnections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserConnections.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserConnections.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserConnections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userConnectionSlice.reducer;
