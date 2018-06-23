// @flow
import {
  QUERY_UPDATED,
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";
import type {
  QueryUpdated,
  ResultsRequested,
  ResultsResolved,
  ResultsRejected
} from "./actionCreators";

export type State = {
  query: string,
  isSearching: boolean,
  results: SearchResults
};

export const initialState = {
  query: "",
  isSearching: false,
  results: []
};

export type Action =
  | QueryUpdated
  | ResultsRequested
  | ResultsResolved
  | ResultsRejected;

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case QUERY_UPDATED:
      return {
        ...state,
        query: action.payload.query
      };
    case RESULTS_REQUESTED:
      return {
        ...state,
        isSearching: true
      };
    case RESULTS_RESOLVED:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results,
        query: ""
      };
    case RESULTS_REJECTED:
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
