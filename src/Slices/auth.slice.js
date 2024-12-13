import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/signin", credentials);
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
  async () => {
    const response = await axiosInstance.get("/auth/validate-token");
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
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
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.username = null;
        state.accessToken = null;
        state.refreshToken = null;
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
