import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  userFeeds,
  userInfo,
  userAuth,
  userNotifications,
  otherProfile,
} from "Slices";

export const Store = configureStore({
  reducer: combineReducers({
    userFeeds,
    userInfo,
    userAuth,
    userNotifications,
    otherProfile,
  }),
});
