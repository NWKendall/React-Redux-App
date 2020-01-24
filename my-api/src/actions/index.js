import axios from "axios";

export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get("https://api.carbonintensity.org.uk/generation")
    .then(res => {
      console.log(`this is res`, res)
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data.data.generationmix});
    })
    .catch(err => {
      console.log(`this is err`, err)
      // dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};