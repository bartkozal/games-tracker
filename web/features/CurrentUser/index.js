import { CURRENT_USER_LOG_IN } from "./actionTypes";

export const logIn = () => ({
  type: CURRENT_USER_LOG_IN,
  payload: {
    isLoggedIn: true
  }
});

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER_LOG_IN:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn
      };
    default:
      return state;
  }
};
