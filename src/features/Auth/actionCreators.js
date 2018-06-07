import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export const signUserIn = user => ({
  type: USER_SIGNED_IN,
  payload: {
    user
  }
});

export const signUserOut = () => ({
  type: USER_SIGNED_OUT
});
