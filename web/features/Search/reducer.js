import { UPDATE_QUERY } from "./actionTypes";

export const initialState = {
  query: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    default:
      return state;
  }
};
