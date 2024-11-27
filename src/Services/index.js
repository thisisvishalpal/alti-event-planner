import axios from "axios";
import { fetchStart, fetchSuccess, fetchFailure } from "Slices"; // Import slice actions

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await axios.get(
      "http://localhost:8000/events/getAllEvents"
    );
    console.log(response, "from thunk");
    dispatch(fetchSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
