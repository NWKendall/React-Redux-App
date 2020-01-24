import {
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS,
  FETCHING_ACTIVITY_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  data: [
    {
    id: Date.now(),
    fuel: "",
    perc: null
  }
],
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ACTIVITY_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_ACTIVITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  }
};
