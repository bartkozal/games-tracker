import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";
import results from "./__mocks__/results";

export const initialState = {
  isSearching: false,
  results: process.env.NODE_ENV === "development" ? results : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULTS_REQUESTED:
      return {
        ...state,
        isSearching: true
      };
    case RESULTS_RESOLVED:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results
      };
    case RESULTS_REJECTED:
      return {
        ...state,
        isSearching: false,
        results: []
      };
    default:
      return state;
  }
};
