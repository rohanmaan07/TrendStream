// src/store/actions/PersonActions.js

import axios from "../../Utils/axios";
import { loadPerson, removePerson } from "../reducers/PersonSlice"; // Import necessary actions

export const fetchPerson = (id) => async (dispatch) => {
  try {
    // API calls to fetch person's details and external social media IDs
    const [detailResponse, externalResponse] = await Promise.all([
      axios.get(`/person/${id}`), // Get person's basic details
      axios.get(`/person/${id}/external_ids`), // Get person's social media IDs
    ]);

    // Construct the person information object
    let personInfo = {
      detail: detailResponse.data,
      external_ids: externalResponse.data, // The external social media IDs
    };

    // Dispatch the action to set Person info in the Redux store
    dispatch(loadPerson(personInfo));
  } catch (error) {
    console.error("Error loading person data:", error);
  }
};

export const clearPersonInfo = () => (dispatch) => {
  // Dispatch the action to remove person info from the Redux store
  dispatch(removePerson());
};
