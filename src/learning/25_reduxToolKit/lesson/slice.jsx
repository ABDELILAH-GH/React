import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByVal: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, incrementByVal } = slice.actions;
export default slice.reducer;
