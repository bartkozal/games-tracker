import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED,
  RESULTS_CLEARED,
  QUERY_UPDATED
} from "./actionTypes";

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

export const clearResults = () => ({
  type: RESULTS_CLEARED
});

export const updateQuery = query => ({
  type: QUERY_UPDATED,
  payload: {
    query
  }
});
