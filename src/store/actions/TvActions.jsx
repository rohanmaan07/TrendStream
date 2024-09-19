import axios from "../../Utils/axios";
export { removetv } from "../reducers/TvSlice"; 
import { setTvInfo } from "../reducers/TvSlice"; // Only import setTvInfo


export const loadtv = (id) => async (dispatch) => {
  try {
    const detailResponse = await axios.get(`/tv/${id}`);
    const externalResponse = await axios.get(`/tv/${id}/external_ids`);
    const videosResponse = await axios.get(`/tv/${id}/videos`);

    let ultimate = {
      detail: detailResponse.data,
      external: externalResponse.data,
      videos: videosResponse.data.results.find((m) => m.type === "Trailer"),
    };
    console.log("Videos Response:", videosResponse.data.results);
    dispatch(setTvInfo(ultimate));
  } catch (e) {
    console.error("Error loading TV data:", e);
  }
};