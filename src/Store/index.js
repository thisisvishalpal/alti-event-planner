import { configureStore, combineReducers } from "@reduxjs/toolkit";

import allEvents from "Slices";

export const Store = configureStore({
  reducer: combineReducers({
    allEvents,
  }),
});
