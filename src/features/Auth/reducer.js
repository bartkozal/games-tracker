import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNED_IN:
      return {
        ...state,
        currentUser: action.payload.user
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