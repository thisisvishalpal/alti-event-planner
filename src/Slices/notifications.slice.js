import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserNotifications = createAsyncThunk(
  "userNotifications/fetchUserNotifications",
  async (params) => {
    console.log(params);
    const response = await axiosInstance.get("/user/notifications", {
      params: { username: params },
    });

    return response?.data?.data;
  }
);

const userNotificationSlice = createSlice({
  name: "userNotifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userNotificationSlice.reducer;
