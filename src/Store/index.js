import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { allEvents, allFeeds } from "Slices";

export const Store = configureStore({
  reducer: combineReducers({
    allEvents,
    allFeeds,
  }),
});
