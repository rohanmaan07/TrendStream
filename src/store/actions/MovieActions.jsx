// src/store/actions/MovieActions.js

import axios from "../../Utils/axios";
export { removemovie } from "../reducers/MovieSlice"; // Only import what you need
import { setMovieInfo } from "../reducers/MovieSlice";

export const loadmovie = (id) => async (dispatch) => {
  try {
    // API calls
    const detail = await axios.get(`/movie/${id}`);
    const external = await axios.get(`/movie/${id}/external_ids`);

    const videos = await axios.get(`/movie/${id}/videos`);

    let ultimate = {
      detail: detail.data,
      external: external.data,

      videos: videos.data.results.find((m) => m.type === "Trailer"),
    };

    // Correct dispatch to setMovieInfo
    dispatch(setMovieInfo(ultimate));
  } catch (e) {
    console.error(e);
  }
};
