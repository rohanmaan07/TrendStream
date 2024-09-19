import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieInfo: (state, action) => {
      state.info = action.payload;
    },
    removemovie: (state) => {
      state.info = null;
    },
  },
});

export const { setMovieInfo, removemovie } = movieSlice.actions;
export default movieSlice.reducer;