import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "Services";
import { apiRoutes } from "Utils";
import { logout } from "./auth.slice";

const initialState = {
  data: {
    profilePicture: null,
    userName: null,
    firstName: null,
    lastName: null,
    city: null,
    state: null,
    phoneNumber: null,
    bio: null,
    followers: null,
    following: null,
    posts: null,
    private: null,
    gotra: null,
    age: null,
    gender: null,
    accountType: null,
    isLoggedIn: false,
  },
  loading: false,
  error: null,
};
// Async Thunk to fetch initial state
export const fetchUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      const data = getState().userAuth;
      const response = await axiosInstance.get(apiRoutes.userInfo, {
        params: { username: data.username },
      });
      return response?.data?.data;
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout());
      }
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

export const mutateUserUpdate = createAsyncThunk(
  "userInfo/mutateUserUpdate",
  async (body, { getState, dispatch, rejectWithValue }) => {
    const data = getState().userAuth;
    try {
      const response = await axiosInstance.post(apiRoutes.userUpdate, body, {
        params: { username: data.username },
      });
      return response?.data?.user;
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout());
      }
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

export const mutateLikeOwnPost = createAsyncThunk(
  "userInfo/mutateLikeOwnPost",
  async (postId, { rejectWithValue, getState }) => {
    const { username } = getState().userAuth;
    try {
      const response = await axiosInstance.post(apiRoutes.likePost, postId, {
        params: { username: username },
      });
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

export const mutateUnlikeOwnPost = createAsyncThunk(
  "userInfo/mutateUnlikeOwnPost",
  async (postId, { rejectWithValue, getState }) => {
    const { username } = getState().userAuth;
    try {
      const response = await axiosInstance.post(apiRoutes.unLikePost, postId, {
        params: { username: username },
      });
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

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(mutateUserUpdate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mutateUserUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(mutateUserUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(mutateLikeOwnPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mutateLikeOwnPost.fulfilled, (state, action) => {
        state.loading = false;

        const { postId, totalLikes } = action.payload; // Extract postId and updated likes count

        // Update the likes count for the matching post
        const postIndex = state.data.posts.findIndex(
          (post) => post._id === postId
        );
        if (postIndex !== -1) {
          state.data.posts[postIndex].likes = totalLikes;
          state.data.posts[postIndex].isLiked = true; // Update the likes count
        }
      })
      .addCase(mutateLikeOwnPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(mutateUnlikeOwnPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mutateUnlikeOwnPost.fulfilled, (state, action) => {
        state.loading = false;

        const { postId, totalLikes } = action.payload; // Extract postId and updated likes count

        // Update the likes count for the matching post
        const postIndex = state.data.posts.findIndex(
          (post) => post._id === postId
        );
        if (postIndex !== -1) {
          state.data.posts[postIndex].likes = totalLikes;
          state.data.posts[postIndex].isLiked = false; // Update the likes count
        }
      })
      .addCase(mutateUnlikeOwnPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userInfoSlice.reducer;
