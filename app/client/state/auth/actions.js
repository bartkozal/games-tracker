import cookies from "js-cookie";
import { signUserIn, signUserOut } from "./actionCreators";

export const setCurrentUser = () => dispatch => {
  const currentUser = JSON.parse(decodeURIComponent(cookies.get("auth")));

  if (currentUser) {
    dispatch(signUserIn(currentUser));
  }
};

export const signOut = () => dispatch => {
  cookies.remove("auth");
  dispatch(signUserOut());
};
