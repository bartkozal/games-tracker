import {
  UPDATE_QUERY,
  REQUEST_RESULTS,
  RESOLVE_RESULTS,
  REJECT_RESULTS
} from "./actionTypes";

export const initialState = {
  query: "",
  isSearching: false,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    case REQUEST_RESULTS:
      return {
        ...state,
        isSearching: true
      };
    case RESOLVE_RESULTS:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results,
        query: ""
      };
    case REJECT_RESULTS:
      return {
        ...state,
        isSearching: false,
        results: [],
        query: ""
      };
    default:
      return state;
  }
};
