import { LOG_IN } from "./actionTypes";

export const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
};
