import {
  UPDATE_QUERY,
  REQUEST_RESULTS,
  RESOLVE_RESULTS,
  REJECT_RESULTS
} from "./actionTypes";

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  payload: {
    query
  }
});

export const requestResults = () => ({
  type: REQUEST_RESULTS
});

export const resolveResults = results => ({
  type: RESOLVE_RESULTS,
  payload: {
    results
  }
});

export const rejectResults = () => ({
  type: REJECT_RESULTS
});
