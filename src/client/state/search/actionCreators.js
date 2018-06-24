// @flow
import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";

export type ResultsRequested = {
  type: "Search/RESULTS_REQUESTED"
};

export const requestResults = (): ResultsRequested => ({
  type: RESULTS_REQUESTED
});

export type ResultsResolved = {
  type: "Search/RESULTS_RESOLVED",
  payload: {
    results: SearchResults
  }
};

export const resolveResults = (results: SearchResults): ResultsResolved => ({
  type: RESULTS_RESOLVED,
  payload: {
    results
  }
});

export type ResultsRejected = {
  type: "Search/RESULTS_REJECTED"
};

export const rejectResults = (): ResultsRejected => ({
  type: RESULTS_REJECTED
});
