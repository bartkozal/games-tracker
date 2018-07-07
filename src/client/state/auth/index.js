import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export const initialState = {
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNED_IN:
      return {
        ...state,
        currentUser: {
          email: action.payload.user.email
        }
      };
    case USER_SIGNED_OUT:
      return {
        ...state,
        currentUser: {}
      };
    default:
      return state;
  }
};
