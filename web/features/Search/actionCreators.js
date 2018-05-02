import { UPDATE_QUERY } from "./actionTypes";

export const updateSearchQuery = query => ({
  type: UPDATE_QUERY,
  payload: {
    query
  }
});
