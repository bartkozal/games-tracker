import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export const initialState = {
  currentUser: {},
  userSignedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNED_IN:
      return {
        ...state,
        currentUser: action.payload.user,
        userSignedIn: true
      };
    case USER_SIGNED_OUT:
      return {
        ...state,
        currentUser: {},
        userSignedIn: false
      };
    default:
      return state;
  }
};
