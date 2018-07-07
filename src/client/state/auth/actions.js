import { signUserIn, signUserOut } from "./actionCreators";

export const signInWithFacebook = () => dispatch => {
  dispatch(signUserIn({ email: "bkzl@me.com" }));
};

export const signOut = () => dispatch => {
  dispatch(signUserOut());
};
