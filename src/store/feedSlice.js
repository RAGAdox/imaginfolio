import { createSlice } from "@reduxjs/toolkit";

let initialState = { offset: 0 };
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    incrementOffset: (state) => {
      state.offset = state.offset + 10;
    },
  },
});

export const { incrementOffset } = feedSlice.actions;

export default feedSlice.reducer;
