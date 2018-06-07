import {
  QUERY_UPDATED,
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";

export const updateQuery = query => ({
  type: QUERY_UPDATED,
  payload: {
    query
  }
});

export const requestResults = () => ({
  type: RESULTS_REQUESTED
});

export const resolveResults = results => ({
  type: RESULTS_RESOLVED,
  payload: {
    results
  }
});

export const rejectResults = () => ({
  type: RESULTS_REJECTED
});
