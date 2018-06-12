import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export const signUserIn = ({ email }) => ({
  type: USER_SIGNED_IN,
  payload: {
    user: {
      email
    }
  }
});

export const signUserOut = () => ({
  type: USER_SIGNED_OUT
});
