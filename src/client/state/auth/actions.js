// @flow
import { signUserIn, signUserOut } from "./actionCreators";
import type { Action } from ".";

export type SignInWithFacebook = () => (Dispatch<Action>) => void;

export const signInWithFacebook: SignInWithFacebook = () => dispatch => {
  dispatch(signUserIn({ email: "bkzl@me.com" }));
};

export type SignOut = () => (Dispatch<Action>) => void;

export const signOut: SignOut = () => dispatch => {
  dispatch(signUserOut());
};
