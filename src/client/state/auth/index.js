// @flow
import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";
import type { UserSignedIn, UserSignedOut } from "./actionCreators";

export type State = {
  currentUser: CurrentUser
};

export const initialState = {
  currentUser: {}
};

export type Action = UserSignedIn | UserSignedOut;

export default (state: State = initialState, action: Action): State => {
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
