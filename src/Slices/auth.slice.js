import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        apiRoutes.userSignIn,
        credentials
      );
      return response.data.data; // On success, return the response data
    } catch (error) {
      console.log(error.response);
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

export const validateToken = createAsyncThunk(
  "auth/validateToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(apiRoutes.authCheck);
      return response.data.data;
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

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axiosInstance.post(apiRoutes.userLogout);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    profilePicture: null,
    email: null,
    fullName: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.username;
        state.isAuthenticated = true;
        state.profilePicture = action.payload.profilePicture;
        state.email = action.payload.email;
        state.fullName = action.payload.fullName;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(validateToken.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.profilePicture = action.payload.profilePicture;
        state.email = action.payload.email;
        state.fullName = action.payload.fullName;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(validateToken.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.username = null;
        state.profilePicture = null;
        state.email = null;
        state.fullName = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { logout } = authSlice.actions;
export default authSlice.reducer;
