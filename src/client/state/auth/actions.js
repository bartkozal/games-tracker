import cookies from "js-cookie";
import localStorage from "local-storage";
import { signUserIn, signUserOut } from "./actionCreators";

export const setCurrentUser = () => dispatch => {
  const authUser = cookies.get("auth");

  if (authUser) {
    localStorage.set("currentUser", JSON.parse(authUser));
    window.history.replaceState(null, null, window.location.href.split("#")[0]);
    cookies.remove("auth");
  }

  const currentUser = localStorage.get("currentUser");

  if (currentUser) {
    dispatch(signUserIn(currentUser));
  }
};

export const signOut = () => dispatch => {
  localStorage.remove("currentUser");
  dispatch(signUserOut());
};
