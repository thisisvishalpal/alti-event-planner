import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { allEvents, allFeeds, userInfo, userAuth, otherProfile } from "Slices";

export const Store = configureStore({
  reducer: combineReducers({
    allEvents,
    allFeeds,
    userInfo,
    userAuth,
    otherProfile,
  }),
});
