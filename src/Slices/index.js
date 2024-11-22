import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increament: (state) => (state += 1),
    decreament: (state) => (state -= 1),
    editByAmount: (state, action) => (state += Number(action.payload)),
    asyncUpdate: (state, action) => (state += Number(action.payload)),
  },
});

export const { increament, decreament, editByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
