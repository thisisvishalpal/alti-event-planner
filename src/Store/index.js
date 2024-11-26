import { configureStore, combineReducers } from "@reduxjs/toolkit";

import Counter from "Slices";

export const Store = configureStore({
  reducer: combineReducers({
    Counter,
  }),
});
