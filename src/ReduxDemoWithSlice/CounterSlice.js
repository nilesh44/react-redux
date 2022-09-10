import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload.username);
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state, action) => {
      console.log(action.payload.username);
      return {
        ...state,
        count: state.count - 1,
      };
    },
    reset: (state, action) => {
      console.log(action.payload.username);
      return {
        ...state,
        count: 0,
      };
    },
  },
});
export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
