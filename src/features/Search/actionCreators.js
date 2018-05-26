import { UPDATE_QUERY } from "./actionTypes";

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  payload: {
    query
  }
});
