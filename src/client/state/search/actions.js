// @flow
import { getSearchResults } from "./api";
import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import type { Action } from ".";

export type SearchQuery = string => (Dispatch<Action>) => void;

export const searchQuery: SearchQuery = query => dispatch => {
  dispatch(requestResults());
  getSearchResults(query)
    .then(response => dispatch(resolveResults(response.data)))
    .catch(error => dispatch(rejectResults()));
};
