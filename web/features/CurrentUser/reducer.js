import { LOG_USER_IN } from "./actionTypes";

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      };
    default:
      return state;
  }
};
