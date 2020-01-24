import axios from "axios";

export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get("https://dog.ceo/api/breed/pitbull/images")
    .then(res => {
      console.log(`this is res`, res.data.message)
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      console.log(`this is err`, err)
      // dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};