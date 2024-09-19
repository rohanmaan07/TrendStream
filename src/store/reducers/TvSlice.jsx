import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    info: null,
  },
  reducers: {
    setTvInfo: (state, action) => {
      state.info = action.payload;
    },
    removetv: (state) => {
      state.info = null; // Reset tv info
    },
  },
});

export const { setTvInfo, removetv } = tvSlice.actions;
export default tvSlice.reducer;