// @flow
import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";
import type {
  ResultsRequested,
  ResultsResolved,
  ResultsRejected
} from "./actionCreators";
import results from "./__mocks__/results";

export type State = {
  isSearching: boolean,
  results: SearchResults
};

export const initialState = {
  isSearching: false,
  results: process.env.NODE_ENV === "development" ? results : []
};

export type Action = ResultsRequested | ResultsResolved | ResultsRejected;

export default (state: State = initialState, action: Action): State => {
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
