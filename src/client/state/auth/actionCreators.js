// @flow
import { USER_SIGNED_IN, USER_SIGNED_OUT } from "./actionTypes";

export type UserSignedIn = {
  type: "Auth/USER_SIGNED_IN",
  payload: {
    user: {
      email: string
    }
  }
};

export type SignUserIn = ({ email: string }) => UserSignedIn;

export const signUserIn: SignUserIn = ({ email }) => ({
  type: USER_SIGNED_IN,
  payload: {
    user: {
      email
    }
  }
});

export type UserSignedOut = {
  type: "Auth/USER_SIGNED_OUT"
};

export type SignUserOut = () => UserSignedOut;

export const signUserOut = (): UserSignedOut => ({
  type: USER_SIGNED_OUT
});
