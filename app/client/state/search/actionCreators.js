import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
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
