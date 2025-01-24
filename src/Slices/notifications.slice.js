import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserNotifications = createAsyncThunk(
  "userNotifications/fetchUserNotifications",
  async (_, { rejectWithValue }) => {
    const response = await axiosInstance.get(apiRoutes.userNotifications);
    return response?.data?.data;
  }
);

export const mutateReadNotification = createAsyncThunk(
  "userNotifications/mutateReadNotification",
  async (notificationId, { getState }) => {
    const { username } = getState().userAuth;
    try {
      const response = await axiosInstance.patch(
        apiRoutes.readNotification,
        { notificationId },
        {
          params: { username: username },
        }
      );
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
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
